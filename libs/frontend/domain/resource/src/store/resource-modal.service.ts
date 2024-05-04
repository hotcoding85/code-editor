import type {
  CreateResourceData,
  CreateResourceProperties,
  IEntityModalService,
  IResource,
} from '@codelab/frontend/abstract/core'
import { ModalService } from '@codelab/frontend/shared/utils'
import { computed } from 'mobx'
import type { Ref } from 'mobx-keystone'
import { ExtendedModel, model, modelClass } from 'mobx-keystone'

@model('@codelab/CreateResourceModalService')
export class CreateResourceModalService
  extends ExtendedModel(
    modelClass<ModalService<CreateResourceData>>(ModalService),
    {},
  )
  implements IEntityModalService<CreateResourceData, CreateResourceProperties>
{
  @computed
  get type() {
    return this.metadata?.type
  }
}

@model('@codelab/ResourceModalService')
export class ResourceModalService
  extends ExtendedModel(
    modelClass<ModalService<Ref<IResource>>>(ModalService),
    {},
  )
  implements IEntityModalService<Ref<IResource>>
{
  @computed
  get resource() {
    return this.metadata?.current
  }
}
