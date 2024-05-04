import type {
  ICreatePropData,
  IProp,
  IPropService,
  IUpdatePropData,
} from '@codelab/frontend/abstract/core'
import { IPropDTO } from '@codelab/shared/abstract/core'
import {
  _async,
  _await,
  createContext,
  idProp,
  Model,
  model,
  modelAction,
  modelFlow,
  objectMap,
  prop,
  transaction,
} from 'mobx-keystone'
import { Prop } from './prop.model'
import { PropRepository } from './prop.repo'

@model('@codelab/PropService')
export class PropService
  extends Model({
    id: idProp,
    propRepository: prop(() => new PropRepository({})),
    props: prop(() => objectMap<IProp>()),
  })
  implements IPropService
{
  prop(id: string) {
    return this.props.get(id)
  }

  @modelAction
  add({ api, data, id }: IPropDTO) {
    let props = this.prop(id)

    if (props) {
      props.writeCache({ api, data })
    } else {
      props = Prop.create({ api, data, id })
      this.props.set(props.id, props)
    }

    return props
  }

  @modelFlow
  @transaction
  create = _async(function* (
    this: PropService,
    { api, data, id }: ICreatePropData,
  ) {
    const props = this.add({ api, data, id })

    yield* _await(this.propRepository.add(props))

    return props
  })

  @modelFlow
  @transaction
  delete = _async(function* (this: PropService, props: IProp) {
    this.props.delete(props.id)

    yield* _await(this.propRepository.delete([props]))

    return props
  })

  @modelFlow
  @transaction
  update = _async(function* (this: PropService, { data, id }: IUpdatePropData) {
    const props = this.props.get(id)!

    props.writeCache({ data })

    yield* _await(this.propRepository.update(props))

    return props
  })
}

export const propServiceContext = createContext<IPropService>()

export const getPropService = (self: object) => {
  const propService = propServiceContext.get(self)

  if (!propService) {
    throw new Error('PropService context is not defined')
  }

  return propService
}
