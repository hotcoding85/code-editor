import * as Types from '@codelab/shared/abstract/codegen'

import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
export type InterfaceForm_GetAppsQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.AppOptions>
  where?: Types.InputMaybe<Types.AppWhere>
}>

export type InterfaceForm_GetAppsQuery = {
  apps: Array<{ id: string; name: string }>
}

export type InterfaceForm_GetAtomsQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.AtomOptions>
  where?: Types.InputMaybe<Types.AtomWhere>
}>

export type InterfaceForm_GetAtomsQuery = {
  atoms: Array<{ id: string; name: string; type: Types.AtomType }>
}

export type InterfaceForm_GetActionsQueryVariables = Types.Exact<{
  appId?: Types.InputMaybe<Types.Scalars['ID']['input']>
}>

export type InterfaceForm_GetActionsQuery = {
  codeActions: Array<{ id: string; name: string }>
  apiActions: Array<{ id: string; name: string }>
}

export type InterfaceForm_GetStoresQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.StoreOptions>
  where?: Types.InputMaybe<Types.StoreWhere>
}>

export type InterfaceForm_GetStoresQuery = {
  stores: Array<{ id: string; name: string }>
}

export type InterfaceForm_GetResourceQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.ResourceOptions>
  where?: Types.InputMaybe<Types.ResourceWhere>
}>

export type InterfaceForm_GetResourceQuery = {
  resources: Array<{ id: string; name: string }>
}

export type InterfaceForm_GetPagesQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.PageOptions>
  where?: Types.InputMaybe<Types.PageWhere>
}>

export type InterfaceForm_GetPagesQuery = {
  pages: Array<{ id: string; name: string }>
}

export const InterfaceForm_GetAppsDocument = gql`
  query InterfaceForm_GetApps($options: AppOptions, $where: AppWhere) {
    apps(options: $options, where: $where) {
      id
      name
    }
  }
`
export const InterfaceForm_GetAtomsDocument = gql`
  query InterfaceForm_GetAtoms($options: AtomOptions, $where: AtomWhere) {
    atoms(options: $options, where: $where) {
      id
      name
      type
    }
  }
`
export const InterfaceForm_GetActionsDocument = gql`
  query InterfaceForm_GetActions($appId: ID) {
    codeActions {
      id
      name
    }
    apiActions {
      id
      name
    }
  }
`
export const InterfaceForm_GetStoresDocument = gql`
  query InterfaceForm_GetStores($options: StoreOptions, $where: StoreWhere) {
    stores(options: $options, where: $where) {
      id
      name
    }
  }
`
export const InterfaceForm_GetResourceDocument = gql`
  query InterfaceForm_GetResource(
    $options: ResourceOptions
    $where: ResourceWhere
  ) {
    resources(options: $options, where: $where) {
      id
      name
    }
  }
`
export const InterfaceForm_GetPagesDocument = gql`
  query InterfaceForm_GetPages($options: PageOptions, $where: PageWhere) {
    pages(options: $options, where: $where) {
      id
      name
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
    InterfaceForm_GetApps(
      variables?: InterfaceForm_GetAppsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InterfaceForm_GetAppsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InterfaceForm_GetAppsQuery>(
            InterfaceForm_GetAppsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'InterfaceForm_GetApps',
        'query',
      )
    },
    InterfaceForm_GetAtoms(
      variables?: InterfaceForm_GetAtomsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InterfaceForm_GetAtomsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InterfaceForm_GetAtomsQuery>(
            InterfaceForm_GetAtomsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'InterfaceForm_GetAtoms',
        'query',
      )
    },
    InterfaceForm_GetActions(
      variables?: InterfaceForm_GetActionsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InterfaceForm_GetActionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InterfaceForm_GetActionsQuery>(
            InterfaceForm_GetActionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'InterfaceForm_GetActions',
        'query',
      )
    },
    InterfaceForm_GetStores(
      variables?: InterfaceForm_GetStoresQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InterfaceForm_GetStoresQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InterfaceForm_GetStoresQuery>(
            InterfaceForm_GetStoresDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'InterfaceForm_GetStores',
        'query',
      )
    },
    InterfaceForm_GetResource(
      variables?: InterfaceForm_GetResourceQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InterfaceForm_GetResourceQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InterfaceForm_GetResourceQuery>(
            InterfaceForm_GetResourceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'InterfaceForm_GetResource',
        'query',
      )
    },
    InterfaceForm_GetPages(
      variables?: InterfaceForm_GetPagesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InterfaceForm_GetPagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InterfaceForm_GetPagesQuery>(
            InterfaceForm_GetPagesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'InterfaceForm_GetPages',
        'query',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
