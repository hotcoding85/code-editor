import * as Types from '@codelab/shared/abstract/codegen'

import { AppFragment } from '../app/app.fragment.graphql.gen'
import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { gql } from 'graphql-tag'
import { AppFragmentDoc } from '../app/app.fragment.graphql.gen'
export type UserFragment = {
  id: string
  username: string
  email: string
  auth0Id: string
  roles?: Array<Types.Role> | null
  apps: Array<AppFragment>
}

export const UserFragmentDoc = gql`
  fragment User on User {
    id
    username
    email
    auth0Id
    roles
    apps {
      ...App
    }
  }
  ${AppFragmentDoc}
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
