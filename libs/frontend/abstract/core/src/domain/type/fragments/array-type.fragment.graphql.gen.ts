import * as Types from '@codelab/shared/abstract/codegen'

import {
  BaseType_ActionType_Fragment,
  BaseType_AppType_Fragment,
  BaseType_ArrayType_Fragment,
  BaseType_BaseType_Fragment,
  BaseType_CodeMirrorType_Fragment,
  BaseType_ElementType_Fragment,
  BaseType_EnumType_Fragment,
  BaseType_InterfaceType_Fragment,
  BaseType_LambdaType_Fragment,
  BaseType_PageType_Fragment,
  BaseType_PrimitiveType_Fragment,
  BaseType_ReactNodeType_Fragment,
  BaseType_RenderPropType_Fragment,
  BaseType_UnionType_Fragment,
} from './base-type.fragment.graphql.gen'
import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
import { BaseTypeFragmentDoc } from './base-type.fragment.graphql.gen'
export type ArrayTypeFragment = {
  itemType:
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
    | { id: string; name: string; kind: Types.TypeKind }
} & BaseType_ArrayType_Fragment

export const ArrayTypeFragmentDoc = gql`
  fragment ArrayType on ArrayType {
    ...BaseType
    itemType {
      ... on IBaseType {
        id
        name
        kind
      }
    }
  }
  ${BaseTypeFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {}
}
export type Sdk = ReturnType<typeof getSdk>
