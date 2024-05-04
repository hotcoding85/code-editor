import type * as Types from '@codelab/shared/abstract/codegen'
import type { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request'
import { gql } from 'graphql-tag'

export interface TypeBase_ActionType_Fragment {
  __typename: 'ActionType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_AppType_Fragment {
  __typename: 'AppType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_ArrayType_Fragment {
  __typename: 'ArrayType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_CodeMirrorType_Fragment {
  __typename: 'CodeMirrorType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_ElementType_Fragment {
  __typename: 'ElementType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_EnumType_Fragment {
  __typename: 'EnumType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_InterfaceType_Fragment {
  __typename: 'InterfaceType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_LambdaType_Fragment {
  __typename: 'LambdaType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_PageType_Fragment {
  __typename: 'PageType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_PrimitiveType_Fragment {
  __typename: 'PrimitiveType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_ReactNodeType_Fragment {
  __typename: 'ReactNodeType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_RenderPropType_Fragment {
  __typename: 'RenderPropType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export interface TypeBase_UnionType_Fragment {
  __typename: 'UnionType'
  kind: Types.TypeKind
  id: string
  name: string
  owner: { id: string; auth0Id: string }
}

export type TypeBaseFragment =
  | TypeBase_ActionType_Fragment
  | TypeBase_AppType_Fragment
  | TypeBase_ArrayType_Fragment
  | TypeBase_CodeMirrorType_Fragment
  | TypeBase_ElementType_Fragment
  | TypeBase_EnumType_Fragment
  | TypeBase_InterfaceType_Fragment
  | TypeBase_LambdaType_Fragment
  | TypeBase_PageType_Fragment
  | TypeBase_PrimitiveType_Fragment
  | TypeBase_ReactNodeType_Fragment
  | TypeBase_RenderPropType_Fragment
  | TypeBase_UnionType_Fragment

export const TypeBaseFragmentDoc = gql`
  fragment TypeBase on TypeBase {
    __typename
    kind
    id
    owner {
      id
      auth0Id
    }
    name
  }
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
