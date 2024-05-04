import type {
  IAction,
  IActionRunner,
  IApiAction,
  IBaseResourceConfigData,
  ICodeAction,
  IElement,
  IGraphQLActionConfig,
  IPropData,
  IRestActionConfig,
} from '@codelab/frontend/abstract/core'
import {
  actionRef,
  getRenderService,
  getRunnerId,
  IProp,
} from '@codelab/frontend/abstract/core'
import { replaceStateInProps, tryParse } from '@codelab/frontend/shared/utils'
import { IActionKind, IResourceType } from '@codelab/shared/abstract/core'
import type { Axios, Method } from 'axios'
import axios from 'axios'
import { GraphQLClient } from 'graphql-request'
import isString from 'lodash/isString'
import merge from 'lodash/merge'
import { computed, toJS } from 'mobx'
import type { Ref } from 'mobx-keystone'
import { Model, model, modelAction, prop } from 'mobx-keystone'

const restFetch = (
  client: Axios,
  config: IRestActionConfig,
  overrideConfig?: IPropData,
) => {
  const data = merge(tryParse(config.body), overrideConfig?.['body'])
  const headers = merge(tryParse(config.headers), overrideConfig?.['headers'])
  const parsedParams = tryParse(config.queryParams)

  return client.request({
    data,
    headers,
    method: config.method as Method,
    // params should be an object to be properly used as url params
    params: isString(parsedParams) ? undefined : parsedParams,
    responseType: config.responseType,
    url: config.urlSegment,
  })
}

const graphqlFetch = (
  client: GraphQLClient,
  config: IGraphQLActionConfig,
  overrideConfig?: IPropData,
) => {
  const headers = merge(tryParse(config.headers), overrideConfig?.['headers'])

  const variables = merge(
    tryParse(config.variables),
    overrideConfig?.['variables'],
  )

  return client.request(config.query, variables, headers)
}

const create = (rootElement: IElement) => {
  const store = rootElement.store.current
  const component = rootElement.parentComponent?.current
  // more props will be added other then component
  const props = component?.runtimeProp?.componentEvaluatedProps || {}

  return store.actions.map(
    (action) =>
      new ActionRunner({
        actionRef: actionRef(action.id),
        id: getRunnerId(store.id, action.id),
        props,
      }),
  )
}

@model('@codelab/ActionRunner')
export class ActionRunner
  extends Model(() => ({
    actionRef: prop<Ref<IAction>>(),
    id: prop<string>(),
    props: prop<IPropData>(() => ({})),
  }))
  implements IActionRunner
{
  @computed
  get renderer() {
    const renderService = getRenderService(this)

    return renderService.activeRenderer?.current
  }

  @computed
  get runner() {
    return this.actionRef.current.type === IActionKind.ApiAction
      ? this.apiRunner
      : this.codeRunner(toJS(this.props))
  }

  @modelAction
  private replaceStateInConfig(config: IProp) {
    return replaceStateInProps(config.values, {})
  }

  @computed
  get _resourceConfig() {
    return this.replaceStateInConfig(
      (this.actionRef.current as IApiAction).resource.current.config.current,
    ) as IBaseResourceConfigData
  }

  @computed
  get _graphqlClient() {
    const { headers, url } = this._resourceConfig
    const options = { headers: tryParse(headers) }

    return new GraphQLClient(url, options)
  }

  @computed
  get _restClient() {
    const { headers, url } = this._resourceConfig

    return axios.create({ baseURL: url, headers: tryParse(headers) })
  }

  @computed
  get apiRunner() {
    const action = this.actionRef.current as IApiAction

    const successRunner = action.successAction?.id
      ? this.renderer?.actionRunners.get(
          getRunnerId(action.store.id, action.successAction.id),
        )?.runner
      : null

    const errorRunner = action.errorAction?.id
      ? this.renderer?.actionRunners.get(
          getRunnerId(action.store.id, action.errorAction.id),
        )?.runner
      : null

    const resource = action.resource.current
    const config = action.config.current.values
    const graphQLClient = this._graphqlClient
    const restClient = this._restClient

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return async function (...args: Array<unknown>) {
      const overrideConfig = args[1] as IPropData
      // @ts-expect-error: due to not using arrow function
      const state = this as IPropData
      const evaluatedConfig = replaceStateInProps(config, state)

      const fetchPromise =
        resource.type === IResourceType.GraphQL
          ? graphqlFetch(
              graphQLClient,
              evaluatedConfig as IGraphQLActionConfig,
              overrideConfig,
            )
          : restFetch(
              restClient,
              evaluatedConfig as IRestActionConfig,
              overrideConfig,
            )

      try {
        const response = await fetchPromise

        return successRunner?.call(state, response)
      } catch (error) {
        return errorRunner?.call(state, error)
      }
    }
  }

  @computed
  get codeRunner() {
    try {
      // eslint-disable-next-line no-new-func
      return new Function(
        'props',
        `return function run(...args) {
          const state = this;
          return ${(this.actionRef.current as ICodeAction).code}(...args)
        }`,
      )
    } catch (error) {
      console.log(error)

      return () => () => undefined
    }
  }

  static create = create
}
