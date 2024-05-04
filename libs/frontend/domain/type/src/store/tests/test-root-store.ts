import type {
  IFieldService,
  ITypeService,
} from '@codelab/frontend/abstract/core'
import { Model, model, prop, registerRootStore } from 'mobx-keystone'
import { fieldServiceContext } from '../field.service.context'
import { typeServiceContext } from '../type.service.context'

@model('@codelab/TestRootStore')
export class TestRootStore extends Model({
  fieldService: prop<IFieldService>(),
  typeService: prop<ITypeService>(),
}) {
  protected override onInit(): void {
    typeServiceContext.set(this, this.typeService)
    fieldServiceContext.set(this, this.fieldService)

    registerRootStore(this)
  }
}
