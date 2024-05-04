import type { AtomCreateInput } from '@codelab/shared/abstract/codegen'
import { AtomType, PrimitiveTypeKind } from '@codelab/shared/abstract/codegen'
import type { IAuth0Owner } from '@codelab/shared/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { connectAuth0Owner, connectNodeId } from '@codelab/shared/domain/mapper'
import { v4 } from 'uuid'

/**
 * Create List Atom
 */
export const headerFieldName = 'Header'

export const renderItemFieldName = 'Render Item'

export const createListAtomInput = (owner: IAuth0Owner): AtomCreateInput => ({
  api: {
    create: {
      node: {
        fields: {
          create: [
            {
              edge: {
                key: 'header',
                name: headerFieldName,
              },
              node: {
                ReactNodeType: {
                  id: v4(),
                  name: ITypeKind.ReactNodeType,
                  owner: connectAuth0Owner(owner),
                },
              },
            },
            {
              edge: {
                key: 'renderItem',
                name: renderItemFieldName,
              },
              node: {
                RenderPropType: {
                  id: v4(),
                  name: ITypeKind.RenderPropType,
                  owner: connectAuth0Owner(owner),
                },
              },
            },
          ],
        },
        name: 'List API',
        owner: connectAuth0Owner(owner),
      },
    },
  },
  name: 'List',
  owner: connectAuth0Owner(owner),
  type: AtomType.AntDesignList,
})

/**
 * create ListItem Atom
 */

export const createListItemAtomInput = (auth0Id: string): AtomCreateInput => ({
  api: {
    create: {
      node: {
        name: 'ListItem API',
        owner: connectAuth0Owner(owner),
      },
    },
  },
  name: 'ListItem',
  type: AtomType.AntDesignListItem,
})

/**
 * create Text Atom
 */

export const createTextAtomInput = (owner: IAuth0Owner): AtomCreateInput => ({
  api: {
    create: {
      node: {
        fields: {
          create: [
            {
              edge: {
                key: 'text',
                name: 'Text',
              },
              node: {
                fieldType: {
                  create: {
                    node: {
                      PrimitiveType: {
                        id: v4(),
                        name: 'String',
                        owner: connectAuth0Owner(owner),
                        primitiveKind: PrimitiveTypeKind.String,
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        name: 'Text API',
        owner: connectAuth0Owner(owner),
      },
    },
  },
  name: 'Text',
  type: AtomType.Text,
})

/**
 * create list item component
 * - RootElement - bind prop "value" to atom "text"'s text prop key
 *     - ListItem - Component
 *         - Text
 */
export const listItemComponentName = 'ListItem'

// TODO: this util isn't used anywhere. Fix types later if requires
// export const createComponentInput = (
//   userId: string,
//   textAtomId: string,
//   listItemId: string,
// ): ComponentCreateInput => ({
//   name: listItemComponentName,
//   owner: { connect: { where: { node: { auth0Id: userId } } } },
//   rootElement: {
//     create: {
//       node: {
//         name: ROOT_ELEMENT_NAME,
//         children: {
//           create: [
//             {
//               node: {
//                 name: 'List Item',
//                 atom: { connect: { where: { node: { id: listItemId } } } },
//                 children: {
//                   create: [
//                     {
//                       node: {
//                         name: 'List Item Text',
//                         atom: {
//                           connect: { where: { node: { id: textAtomId } } },
//                         },
//                       },
//                       edge: { order: 1 },
//                     },
//                   ],
//                 },
//               },
//               edge: { order: 1 },
//             },
//           ],
//         },
//       },
//     },
//   },
// })

export const listElementName = 'List'
export const listDataSource = [{ value: 'test1' }, { value: 'test2' }]

export const createListElementInput = (
  listAtomId: string,
  rootElementId: string,
) => ({
  atom: connectNodeId(listAtomId),
  name: listElementName,
  props: {
    create: { node: { data: JSON.stringify({ dataSource: listDataSource }) } },
  },
})

export const reactNodeTextComponentName = 'Text'
export const reactNodeTextProp = { text: 'React Node' }

// TODO: this util isn't used anywhere. Fix types later if requires
// export const createTextReactNodeComponentInput = (
//   userId: string,
//   textAtomId: string,
// ): ComponentCreateInput => ({
//   name: reactNodeTextComponentName,
//   owner: { connect: { where: { node: { auth0Id: userId } } } },
//   rootElement: {
//     create: {
//       node: {
//         name: ROOT_ELEMENT_NAME,
//         children: {
//           create: [
//             {
//               node: {
//                 name: `React Node Text`,
//                 atom: { connect: { where: { node: { id: textAtomId } } } },
//                 props: {
//                   create: { node: { data: JSON.stringify(reactNodeTextProp) } },
//                 },
//               },
//             },
//           ],
//         },
//       },
//     },
//   },
// })
