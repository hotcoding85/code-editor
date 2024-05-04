import type { AntDesignField, TypeRef } from '@codelab/backend/abstract/core'
import type { IAtomDTO } from '@codelab/shared/abstract/core'
import {
  containsInterfaceTypeRegex,
  functionTypeRegex,
  interfaceTypeRegex,
  primitiveTypesRegex,
  reactNodeTypeRegex,
  renderPropRegexes,
  unionTypeRegex,
} from './matchers'

interface UnionTypeArgs {
  atom: IAtomDTO
  field: Pick<AntDesignField, 'property' | 'type'>
  userId: string
}

export type FieldTypeRef = (args: UnionTypeArgs) => Promise<TypeRef>

/**
 * We must check on parsed values as opposed to field.type
 *
 * We reduce each predicate by multiplying all elements in an array
 */
export type IsTypePredicates = (fieldType: string) => boolean

export const isPrimitiveType: IsTypePredicates = (fieldType) => {
  return primitiveTypesRegex.test(fieldType)
}

/**
 * Some enum fields in Ant Design docs don't have CODE block, but uses `'` instead, so we can't rely on `isEnum` anymore
 *
 * Input.status = 'error' | 'warning'
 *
 * Make sure it isn't an interface first, then check for `|`. Some interfaces have `|` in them
 *
 * @param field
 */
export const isEnumType: IsTypePredicates = (fieldType) => {
  if (interfaceTypeRegex.test(fieldType)) {
    return false
  }

  return unionTypeRegex.test(fieldType)
}

export const isUnionType: IsTypePredicates = (fieldType) => {
  return unionTypeRegex.test(fieldType) && !interfaceTypeRegex.test(fieldType)
}

export const isReactNodeType: IsTypePredicates = (fieldType) => {
  return reactNodeTypeRegex.test(fieldType)
}

export const isActionType: IsTypePredicates = (fieldType) => {
  return functionTypeRegex.test(fieldType)
}

// ReactNode is also render props
export const isRenderPropType: IsTypePredicates = (fieldType) => {
  return renderPropRegexes.some((regex) => regex.test(fieldType))
}

export const isInterfaceType: IsTypePredicates = (fieldType) => {
  return interfaceTypeRegex.test(fieldType)
}

/**
 * See if `boolean | { loading: true }` contains a nested interface
 */
export const unionContainsInterfaceType: IsTypePredicates = (fieldType) => {
  // We use `||` since we only need 1 to have a nested interface
  return (
    containsInterfaceTypeRegex.test(fieldType) ||
    // We don't want to parse edge cases yet
    !functionTypeRegex.test(fieldType)
  )
}
