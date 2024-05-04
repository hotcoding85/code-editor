import * as Types from '@codelab/shared/abstract/codegen'

import { RenderedComponentFragment } from '../../../../abstract/core/src/domain/component/component-render.fragment.graphql.gen'
import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
import { RenderedComponentFragmentDoc } from '../../../../abstract/core/src/domain/component/component-render.fragment.graphql.gen'
export type CreateComponentsMutationVariables = Types.Exact<{
  input: Array<Types.ComponentCreateInput> | Types.ComponentCreateInput
}>

export type CreateComponentsMutation = {
  createComponents: { components: Array<{ id: string }> }
}

export type DeleteComponentsMutationVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ComponentWhere>
  delete?: Types.InputMaybe<Types.ComponentDeleteInput>
}>

export type DeleteComponentsMutation = {
  deleteComponents: { nodesDeleted: number }
}

export type UpdateComponentsMutationVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ComponentWhere>
  update?: Types.InputMaybe<Types.ComponentUpdateInput>
}>

export type UpdateComponentsMutation = {
  updateComponents: { components: Array<{ id: string }> }
}

export type GetComponentsQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.ComponentOptions>
  where?: Types.InputMaybe<Types.ComponentWhere>
}>

export type GetComponentsQuery = {
  aggregate: { count: number }
  items: Array<RenderedComponentFragment>
}

export const CreateComponentsDocument = gql`
  mutation CreateComponents($input: [ComponentCreateInput!]!) {
    createComponents(input: $input) {
      components {
        id
      }
    }
  }
`
export const DeleteComponentsDocument = gql`
  mutation DeleteComponents(
    $where: ComponentWhere
    $delete: ComponentDeleteInput
  ) {
    deleteComponents(where: $where, delete: $delete) {
      nodesDeleted
    }
  }
`
export const UpdateComponentsDocument = gql`
  mutation UpdateComponents(
    $where: ComponentWhere
    $update: ComponentUpdateInput
  ) {
    updateComponents(where: $where, update: $update) {
      components {
        id
      }
    }
  }
`
export const GetComponentsDocument = gql`
  query GetComponents($options: ComponentOptions, $where: ComponentWhere) {
    aggregate: componentsAggregate(where: $where) {
      count
    }
    items: components(options: $options, where: $where) {
      ...RenderedComponent
    }
  }
  ${RenderedComponentFragmentDoc}
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
    CreateComponents(
      variables: CreateComponentsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateComponentsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateComponentsMutation>(
            CreateComponentsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'CreateComponents',
        'mutation',
      )
    },
    DeleteComponents(
      variables?: DeleteComponentsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteComponentsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteComponentsMutation>(
            DeleteComponentsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteComponents',
        'mutation',
      )
    },
    UpdateComponents(
      variables?: UpdateComponentsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateComponentsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateComponentsMutation>(
            UpdateComponentsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'UpdateComponents',
        'mutation',
      )
    },
    GetComponents(
      variables?: GetComponentsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetComponentsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetComponentsQuery>(GetComponentsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetComponents',
        'query',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
