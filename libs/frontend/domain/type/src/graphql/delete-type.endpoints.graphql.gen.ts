import * as Types from '@codelab/shared/abstract/codegen'

import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
export type DeletePrimitiveTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.PrimitiveTypeDeleteInput>
  where?: Types.InputMaybe<Types.PrimitiveTypeWhere>
}>

export type DeletePrimitiveTypesMutation = {
  deletePrimitiveTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteArrayTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.ArrayTypeDeleteInput>
  where?: Types.InputMaybe<Types.ArrayTypeWhere>
}>

export type DeleteArrayTypesMutation = {
  deleteArrayTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteReactNodeTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.ReactNodeTypeDeleteInput>
  where?: Types.InputMaybe<Types.ReactNodeTypeWhere>
}>

export type DeleteReactNodeTypesMutation = {
  deleteReactNodeTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteUnionTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.UnionTypeDeleteInput>
  where?: Types.InputMaybe<Types.UnionTypeWhere>
}>

export type DeleteUnionTypesMutation = {
  deleteUnionTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteInterfaceTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.InterfaceTypeDeleteInput>
  where?: Types.InputMaybe<Types.InterfaceTypeWhere>
}>

export type DeleteInterfaceTypesMutation = {
  deleteInterfaceTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteElementTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.ElementTypeDeleteInput>
  where?: Types.InputMaybe<Types.ElementTypeWhere>
}>

export type DeleteElementTypesMutation = {
  deleteElementTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteRenderPropTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.RenderPropTypeDeleteInput>
  where?: Types.InputMaybe<Types.RenderPropTypeWhere>
}>

export type DeleteRenderPropTypesMutation = {
  deleteRenderPropTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteEnumTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.EnumTypeDeleteInput>
  where?: Types.InputMaybe<Types.EnumTypeWhere>
}>

export type DeleteEnumTypesMutation = {
  deleteEnumTypes: { relationshipsDeleted: number; nodesDeleted: number }
  deleteEnumTypeValues: { nodesDeleted: number }
}

export type DeleteLambdaTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.LambdaTypeDeleteInput>
  where?: Types.InputMaybe<Types.LambdaTypeWhere>
}>

export type DeleteLambdaTypesMutation = {
  deleteLambdaTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeletePageTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.PageTypeDeleteInput>
  where?: Types.InputMaybe<Types.PageTypeWhere>
}>

export type DeletePageTypesMutation = {
  deletePageTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteAppTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.AppTypeDeleteInput>
  where?: Types.InputMaybe<Types.AppTypeWhere>
}>

export type DeleteAppTypesMutation = {
  deleteAppTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteActionTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.ActionTypeDeleteInput>
  where?: Types.InputMaybe<Types.ActionTypeWhere>
}>

export type DeleteActionTypesMutation = {
  deleteActionTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export type DeleteCodeMirrorTypesMutationVariables = Types.Exact<{
  delete?: Types.InputMaybe<Types.CodeMirrorTypeDeleteInput>
  where?: Types.InputMaybe<Types.CodeMirrorTypeWhere>
}>

export type DeleteCodeMirrorTypesMutation = {
  deleteCodeMirrorTypes: { relationshipsDeleted: number; nodesDeleted: number }
}

export const DeletePrimitiveTypesDocument = gql`
  mutation DeletePrimitiveTypes(
    $delete: PrimitiveTypeDeleteInput
    $where: PrimitiveTypeWhere
  ) {
    deletePrimitiveTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteArrayTypesDocument = gql`
  mutation DeleteArrayTypes(
    $delete: ArrayTypeDeleteInput
    $where: ArrayTypeWhere
  ) {
    deleteArrayTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteReactNodeTypesDocument = gql`
  mutation DeleteReactNodeTypes(
    $delete: ReactNodeTypeDeleteInput
    $where: ReactNodeTypeWhere
  ) {
    deleteReactNodeTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteUnionTypesDocument = gql`
  mutation DeleteUnionTypes(
    $delete: UnionTypeDeleteInput
    $where: UnionTypeWhere
  ) {
    deleteUnionTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteInterfaceTypesDocument = gql`
  mutation DeleteInterfaceTypes(
    $delete: InterfaceTypeDeleteInput
    $where: InterfaceTypeWhere
  ) {
    deleteInterfaceTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteElementTypesDocument = gql`
  mutation DeleteElementTypes(
    $delete: ElementTypeDeleteInput
    $where: ElementTypeWhere
  ) {
    deleteElementTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteRenderPropTypesDocument = gql`
  mutation DeleteRenderPropTypes(
    $delete: RenderPropTypeDeleteInput
    $where: RenderPropTypeWhere
  ) {
    deleteRenderPropTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteEnumTypesDocument = gql`
  mutation DeleteEnumTypes(
    $delete: EnumTypeDeleteInput
    $where: EnumTypeWhere
  ) {
    deleteEnumTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
    deleteEnumTypeValues(where: { enumTypeConnection: { node: $where } }) {
      nodesDeleted
    }
  }
`
export const DeleteLambdaTypesDocument = gql`
  mutation DeleteLambdaTypes(
    $delete: LambdaTypeDeleteInput
    $where: LambdaTypeWhere
  ) {
    deleteLambdaTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeletePageTypesDocument = gql`
  mutation DeletePageTypes(
    $delete: PageTypeDeleteInput
    $where: PageTypeWhere
  ) {
    deletePageTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteAppTypesDocument = gql`
  mutation DeleteAppTypes($delete: AppTypeDeleteInput, $where: AppTypeWhere) {
    deleteAppTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteActionTypesDocument = gql`
  mutation DeleteActionTypes(
    $delete: ActionTypeDeleteInput
    $where: ActionTypeWhere
  ) {
    deleteActionTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
  }
`
export const DeleteCodeMirrorTypesDocument = gql`
  mutation DeleteCodeMirrorTypes(
    $delete: CodeMirrorTypeDeleteInput
    $where: CodeMirrorTypeWhere
  ) {
    deleteCodeMirrorTypes(delete: $delete, where: $where) {
      relationshipsDeleted
      nodesDeleted
    }
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
  return {
    DeletePrimitiveTypes(
      variables?: DeletePrimitiveTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeletePrimitiveTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePrimitiveTypesMutation>(
            DeletePrimitiveTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeletePrimitiveTypes',
        'mutation',
      )
    },
    DeleteArrayTypes(
      variables?: DeleteArrayTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteArrayTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteArrayTypesMutation>(
            DeleteArrayTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteArrayTypes',
        'mutation',
      )
    },
    DeleteReactNodeTypes(
      variables?: DeleteReactNodeTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteReactNodeTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteReactNodeTypesMutation>(
            DeleteReactNodeTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteReactNodeTypes',
        'mutation',
      )
    },
    DeleteUnionTypes(
      variables?: DeleteUnionTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteUnionTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUnionTypesMutation>(
            DeleteUnionTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteUnionTypes',
        'mutation',
      )
    },
    DeleteInterfaceTypes(
      variables?: DeleteInterfaceTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteInterfaceTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteInterfaceTypesMutation>(
            DeleteInterfaceTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteInterfaceTypes',
        'mutation',
      )
    },
    DeleteElementTypes(
      variables?: DeleteElementTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteElementTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteElementTypesMutation>(
            DeleteElementTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteElementTypes',
        'mutation',
      )
    },
    DeleteRenderPropTypes(
      variables?: DeleteRenderPropTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteRenderPropTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteRenderPropTypesMutation>(
            DeleteRenderPropTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteRenderPropTypes',
        'mutation',
      )
    },
    DeleteEnumTypes(
      variables?: DeleteEnumTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteEnumTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteEnumTypesMutation>(
            DeleteEnumTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteEnumTypes',
        'mutation',
      )
    },
    DeleteLambdaTypes(
      variables?: DeleteLambdaTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteLambdaTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteLambdaTypesMutation>(
            DeleteLambdaTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteLambdaTypes',
        'mutation',
      )
    },
    DeletePageTypes(
      variables?: DeletePageTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeletePageTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePageTypesMutation>(
            DeletePageTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeletePageTypes',
        'mutation',
      )
    },
    DeleteAppTypes(
      variables?: DeleteAppTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteAppTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteAppTypesMutation>(
            DeleteAppTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteAppTypes',
        'mutation',
      )
    },
    DeleteActionTypes(
      variables?: DeleteActionTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteActionTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteActionTypesMutation>(
            DeleteActionTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteActionTypes',
        'mutation',
      )
    },
    DeleteCodeMirrorTypes(
      variables?: DeleteCodeMirrorTypesMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteCodeMirrorTypesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteCodeMirrorTypesMutation>(
            DeleteCodeMirrorTypesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteCodeMirrorTypes',
        'mutation',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
