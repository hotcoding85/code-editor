import { Repository } from '@codelab/backend/infra/adapter/neo4j'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { connectNode } from '@codelab/shared/domain/mapper'
import { logger } from '@codelab/shared/infra/logging'
import {
  capitalizeFirstLetter,
  compoundCaseToTitleCase,
} from '@codelab/shared/utils'
import { v4 } from 'uuid'
import { isInterfaceTypeRegex } from '../../../../use-cases/seed/utils/matchers'
import {
  extractObjectFromString,
  parseSeparators,
} from '../../../../use-cases/seed/utils/parser'
import type { FieldTypeRef } from '../../../../use-cases/seed/utils/type-predicates'
import {
  isPrimitiveType,
  unionContainsInterfaceType,
} from '../../../../use-cases/seed/utils/type-predicates'
import { mapPrimitiveType } from '../mapper/ant-design-primitive-map'

/**
 *
 * Take a type of `boolean | { inkBar: boolean, tabPane: boolean }`, interfaceString is `{ inkBar: boolean, tabPane: boolean }`
 *
 * @param interfaceString E.G. { key: boolean, key2: string }
 * @param choose
 */
// const convertObjectStringToObject = (interfaceString: string) => {
//   console.log('Interface Data', interfaceString)
//   // Initialize "key" variable to get the property, the "value" variable to get type of property
//
//   // if string is undefined
//   if (!interfaceString || interfaceString.includes(',')) {
//     console.log(`Can't get values from interface value ${interfaceString}`)
//
//     return {}
//   }
//
//   const hasColon = /:/
//   const dataSlice = interfaceString.slice(1, interfaceString.length - 1)
//   const temp = dataSlice.split(hasColon)
//   const theObj: Record<string, unknown> = {}
//
//   for (let i = 0; i < temp.length; i += 2) {
//     theObj[temp[i].trim()] = temp[i + 1]
//   }
//
//   return {
//     keys: Object.entries(theObj).toString(),
//     values: Object.values(theObj).toString(),
//   }
// }

/**
 *
 * @param field
 * @param atom
 * @param userId
 * @param values the is array of types for union (currently we filtered it to primitive types only)
 */
export const upsertUnionFieldType: FieldTypeRef = async ({
  atom,
  field,
  userId,
}) => {
  logger.info('Get Union Type', field.type)

  const UnionType = await Repository.instance.UnionType
  const values = parseSeparators(field)

  /**
   * If we have a nested interface type
   */
  if (unionContainsInterfaceType(field.type)) {
    const [existingUnion] = await UnionType.find({
      where: {
        AND: [
          {
            name: `${atom.name} ${compoundCaseToTitleCase(
              field.property,
            )} Union API`,
          },
        ],
      },
    })

    if (!existingUnion) {
      const unionName = `${atom.name} ${compoundCaseToTitleCase(
        field.property,
      )} Union API`

      const {
        unionTypes: [unionType],
      } = await UnionType.create({
        input: [
          {
            id: v4(),
            kind: ITypeKind.UnionType,
            name: unionName,
            owner: connectNode(userId),
            typesOfUnionType: {
              InterfaceType: {
                create: values
                  .filter((item: string) => item.match(isInterfaceTypeRegex))
                  .map((interfaceType: string) => {
                    // TODO: Need to add case for multiple keys
                    const interfaceTypeName = Object.keys(
                      extractObjectFromString(interfaceType),
                    )[0]

                    if (!interfaceTypeName) {
                      throw new Error('Invalid interface type name')
                    }

                    return {
                      node: {
                        fields: {
                          connect: values
                            .filter((type: string) =>
                              type.match(isInterfaceTypeRegex),
                            )
                            .map((item: string) => {
                              const typeId = v4()

                              const typeName = Object.keys(
                                extractObjectFromString(interfaceType),
                              )[0]

                              if (!typeName) {
                                throw new Error('missing type name')
                              }

                              const existingTypeName = mapPrimitiveType(
                                Object.values(extractObjectFromString(item))[0],
                              )

                              if (!existingTypeName) {
                                throw new Error('Field type not found')
                              }

                              return {
                                edge: {
                                  id: typeId,
                                  key: typeName,
                                  name: capitalizeFirstLetter(typeName),
                                },
                                where: {
                                  node: {
                                    // Connect to our primitive type by name
                                    name: existingTypeName,
                                  },
                                },
                              }
                            }),
                        },
                        id: v4(),
                        kind: ITypeKind.InterfaceType,
                        name: `${atom.name} ${compoundCaseToTitleCase(
                          field.property,
                        )} ${capitalizeFirstLetter(interfaceTypeName)} API`,
                        owner: connectNode(userId),
                      },
                    }
                  }),
              },
              PrimitiveType: {
                connect: values
                  .filter((type) => isPrimitiveType(type))
                  .map((value: string) => ({
                    where: {
                      node: {
                        name: mapPrimitiveType(value),
                      },
                    },
                  })),
              },
            },
          },
        ],
      })

      if (!unionType) {
        throw new Error('Union type creation failed')
      }

      return {
        existingId: unionType.id,
      }
    }

    return {
      existingId: existingUnion.id,
    }
  }

  // Not needed here, we connect union type above
  // if (isPrimitivePredicate(values)) {
  //   return connectUnionType({ field: field, atom, userId, values })
  // }

  console.log(`Could not transform fields for Atom [${atom.type}]`, field)

  return null
}
