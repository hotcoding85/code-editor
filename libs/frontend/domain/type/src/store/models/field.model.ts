import type {
  IFieldDefaultValue,
  IInterfaceType,
  IType,
  IValidationRules,
} from '@codelab/frontend/abstract/core'
import { fieldRef, IField, typeRef } from '@codelab/frontend/abstract/core'
import type { FieldUpdateInput } from '@codelab/shared/abstract/codegen'
import { IFieldDTO } from '@codelab/shared/abstract/core'
import type { Nullish } from '@codelab/shared/abstract/types'
import { connectNodeId, reconnectNodeId } from '@codelab/shared/domain/mapper'
import type { Ref } from 'mobx-keystone'
import { idProp, Model, model, modelAction, prop } from 'mobx-keystone'

const create = ({
  api,
  defaultValues,
  description,
  fieldType,
  id,
  key,
  name,
  nextSibling,
  prevSibling,
  validationRules,
}: IFieldDTO) => {
  return new Field({
    api: typeRef(api.id) as Ref<IInterfaceType>,
    defaultValues: defaultValues ? JSON.parse(defaultValues) : null,
    description,
    id,
    key,
    name,
    nextSibling: nextSibling?.id ? fieldRef(nextSibling.id) : undefined,
    prevSibling: prevSibling?.id ? fieldRef(prevSibling.id) : undefined,
    type: typeRef(fieldType.id),
    validationRules: JSON.parse(validationRules || '{}'),
  })
}

@model('@codelab/Field')
export class Field
  extends Model(() => ({
    api: prop<Ref<IInterfaceType>>(),
    defaultValues: prop<Nullish<IFieldDefaultValue>>(null),
    description: prop<Nullish<string>>(),
    // this is a 'local' id, we don't use it in the backend. It's generated from the interfaceId + the key
    id: idProp,
    key: prop<string>(),
    name: prop<Nullish<string>>(),
    nextSibling: prop<Nullish<Ref<IField>>>(null).withSetter(),
    prevSibling: prop<Nullish<Ref<IField>>>(null).withSetter(),
    type: prop<Ref<IType>>(),
    validationRules: prop<Nullish<IValidationRules>>(),
  }))
  implements IField
{
  @modelAction
  add(fragment: IFieldDTO) {
    this.id = fragment.id
    this.name = fragment.name
    this.description = fragment.description
    this.key = fragment.key
    this.type = typeRef(fragment.fieldType.id)
    this.validationRules = JSON.parse(fragment.validationRules || '{}')
    this.defaultValues = fragment.defaultValues
      ? JSON.parse(fragment.defaultValues)
      : null

    return this
  }

  static create = create

  @modelAction
  attachAsPrevSibling(sibling: IField) {
    sibling.prevSibling = fieldRef(this)
    this.nextSibling = fieldRef(sibling.id)
  }

  @modelAction
  attachAsNextSibling(sibling: IField) {
    sibling.nextSibling = fieldRef(this)
    this.prevSibling = fieldRef(sibling)
  }

  @modelAction
  changePrev(sibling: IField) {
    sibling.prevSibling = null
  }

  @modelAction
  connectPrevToNextSibling(): void {
    if (this.nextSibling) {
      this.nextSibling.current.prevSibling = this.prevSibling
        ? fieldRef(this.prevSibling.current)
        : null
    }

    if (this.prevSibling) {
      this.prevSibling.current.nextSibling = this.nextSibling
        ? fieldRef(this.nextSibling.current)
        : null
    }

    this.nextSibling = null
    this.prevSibling = null
  }

  @modelAction
  detachPrevSibling() {
    if (!this.prevSibling) {
      return
    }

    this.prevSibling = null
  }

  @modelAction
  writeCache({
    defaultValues,
    description,
    fieldType,
    id,
    key,
    name,
    nextSibling,
    prevSibling,
    validationRules,
  }: Partial<IFieldDTO>) {
    this.id = id ?? this.id
    this.name = name ?? this.name
    this.description = description ?? this.description
    this.key = key ?? this.key
    this.type = fieldType?.id ? typeRef(fieldType.id) : this.type
    this.validationRules = validationRules
      ? JSON.parse(validationRules || '{}')
      : this.validationRules
    this.defaultValues = defaultValues
      ? JSON.parse(defaultValues)
      : this.defaultValues
    this.nextSibling = nextSibling?.id
      ? fieldRef(nextSibling.id)
      : this.nextSibling
    this.prevSibling = prevSibling?.id
      ? fieldRef(prevSibling.id)
      : this.prevSibling

    return this
  }

  toCreateInput() {
    return {
      api: connectNodeId(this.api.id),
      defaultValues: JSON.stringify(this.defaultValues),
      description: this.description,
      fieldType: connectNodeId(this.type.id),
      id: this.id,
      key: this.key,
      name: this.name,
      validationRules: JSON.stringify(this.validationRules),
    }
  }

  toUpdateInput() {
    return {
      defaultValues: JSON.stringify(this.defaultValues),
      description: this.description,
      fieldType: reconnectNodeId(this.type.id),
      id: this.id,
      key: this.key,
      name: this.name,
      validationRules: JSON.stringify(this.validationRules),
    }
  }

  @modelAction
  toUpdateNodesInput(): Pick<FieldUpdateInput, 'nextSibling' | 'prevSibling'> {
    return {
      nextSibling: reconnectNodeId(this.nextSibling?.id),
      prevSibling: reconnectNodeId(this.prevSibling?.id),
    }
  }
}
