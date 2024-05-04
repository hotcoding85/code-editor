import * as Types from '@codelab/shared/abstract/codegen'

import { PropFragment } from '../../../../abstract/core/src/domain/prop/prop.fragment.graphql.gen'
import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
import { PropFragmentDoc } from '../../../../abstract/core/src/domain/prop/prop.fragment.graphql.gen'
export type CreatePropsMutationVariables = Types.Exact<{
  input: Array<Types.PropCreateInput> | Types.PropCreateInput
}>

export type CreatePropsMutation = {
  createProps: { props: Array<{ id: string }> }
}

export type UpdatePropsMutationVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.PropWhere>
  update?: Types.InputMaybe<Types.PropUpdateInput>
}>

export type UpdatePropsMutation = {
  updateProps: { props: Array<{ id: string }> }
}

export type DeletePropsMutationVariables = Types.Exact<{
  where: Types.PropWhere
}>

export type DeletePropsMutation = { deleteProps: { nodesDeleted: number } }

export type GetPropsQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.PropOptions>
  where?: Types.InputMaybe<Types.PropWhere>
}>

export type GetPropsQuery = {
  aggregate: { count: number }
  items: Array<PropFragment>
}

export const CreatePropsDocument = gql`
  mutation CreateProps($input: [PropCreateInput!]!) {
    createProps(input: $input) {
      props {
        id
      }
    }
  }
`
export const UpdatePropsDocument = gql`
  mutation UpdateProps($where: PropWhere, $update: PropUpdateInput) {
    updateProps(where: $where, update: $update) {
      props {
        id
      }
    }
  }
`
export const DeletePropsDocument = gql`
  mutation DeleteProps($where: PropWhere!) {
    deleteProps(where: $where) {
      nodesDeleted
    }
  }
`
export const GetPropsDocument = gql`
  query GetProps($options: PropOptions, $where: PropWhere) {
    aggregate: propsAggregate(where: $where) {
      count
    }
    items: props(options: $options, where: $where) {
      ...Prop
    }
  }
  ${PropFragmentDoc}
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
    CreateProps(
      variables: CreatePropsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreatePropsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePropsMutation>(CreatePropsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateProps',
        'mutation',
      )
    },
    UpdateProps(
      variables?: UpdatePropsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdatePropsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePropsMutation>(UpdatePropsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'UpdateProps',
        'mutation',
      )
    },
    DeleteProps(
      variables: DeletePropsMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeletePropsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePropsMutation>(DeletePropsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DeleteProps',
        'mutation',
      )
    },
    GetProps(
      variables?: GetPropsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetPropsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPropsQuery>(GetPropsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetProps',
        'query',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
