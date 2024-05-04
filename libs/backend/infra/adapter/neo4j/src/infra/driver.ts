import { getEnv } from '@codelab/shared/config'
import type { Driver } from 'neo4j-driver'
import neo4j from 'neo4j-driver'

// Keep a single driver instance if possible
let driver: Driver | undefined

export const getDriver = () => {
  const password = getEnv().neo4j.password
  const uri = getEnv().neo4j.uri
  const username = getEnv().neo4j.user

  return (driver ??= neo4j.driver(uri, neo4j.auth.basic(username, password)))
}
