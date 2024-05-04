import * as Types from '@codelab/shared/abstract/codegen'

import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
export type DeleteCodeActionsMutationVariables = Types.Exact<{
  where: Types.CodeActionWhere
  delete?: Types.InputMaybe<Types.CodeActionDeleteInput>
}>

export type DeleteCodeActionsMutation = {
  deleteCodeActions: { nodesDeleted: number; relationshipsDeleted: number }
}

export type DeleteApiActionsMutationVariables = Types.Exact<{
  where: Types.ApiActionWhere
  delete?: Types.InputMaybe<Types.ApiActionDeleteInput>
}>

export type DeleteApiActionsMutation = {
  deleteApiActions: { nodesDeleted: number; relationshipsDeleted: number }
}

export const DeleteCodeActionsDocument = gql`
  mutation DeleteCodeActions(
    $where: CodeActionWhere!
    $delete: CodeActionDeleteInput
  ) {
    deleteCodeActions(where: $where, delete: $delete) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`
export const DeleteApiActionsDocument = gql`
  mutation DeleteApiActions(
    $where: ApiActionWhere!
    $delete: ApiActionDeleteInput
  ) {
    deleteApiActions(where: $where, delete: $delete) {
      nodesDeleted
      relationshipsDeleted
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
    DeleteCodeActions(
      variables: DeleteCodeActionsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteCodeActionsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteCodeActionsMutation>(
            DeleteCodeActionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteCodeActions',
        'mutation',
      )
    },
    DeleteApiActions(
      variables: DeleteApiActionsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteApiActionsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteApiActionsMutation>(
            DeleteApiActionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteApiActions',
        'mutation',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
