import type { IUpdateFieldData } from '@codelab/frontend/abstract/core'
import { useStore } from '@codelab/frontend/presentation/container'
import {
  DisplayIfField,
  Form,
  FormController,
} from '@codelab/frontend/presentation/view'
import { createNotificationHandler } from '@codelab/frontend/shared/utils'
import { PrimitiveTypeKind } from '@codelab/shared/abstract/codegen'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { AutoFields } from 'uniforms-antd'
import { SelectDefaultValue } from '../../../interface-form'
import { TypeSelect } from '../../../shared'
import {
  canSetDefaultValue,
  createFieldSchema,
  filterValidationRules,
  isBoolean,
  isFloat,
  isInteger,
  isPrimitive,
  isString,
} from '../create-field'

export const UpdateFieldForm = observer(() => {
  const { fieldService, typeService } = useStore()
  const closeForm = () => fieldService.updateForm.close()
  const field = fieldService.updateForm.field

  const onSubmit = (input: IUpdateFieldData) => {
    if (!field) {
      throw new Error('Updated field is not set')
    }

    const validationRules = filterValidationRules(
      input.validationRules,
      typeService.primitiveKind(input.fieldType),
    )

    void fieldService.update({ ...input, validationRules })

    closeForm()

    return Promise.resolve()
  }

  return (
    <Form<IUpdateFieldData>
      model={{
        defaultValues: field?.defaultValues,
        description: field?.description,
        fieldType: field?.type.id,
        id: field?.id,
        interfaceTypeId: field?.api.id,
        key: field?.key,
        name: field?.name,
        validationRules: field?.validationRules,
      }}
      modelTransform={(mode, model) => {
        // This automatically sets the `defaultValue` to be nullable for types
        // where we dont set a default value like ReactNodeType, InterfaceType
        if (
          mode === 'form' &&
          model.fieldType &&
          !canSetDefaultValue(typeService, model.fieldType)
        ) {
          return {
            ...model,
            validationRules: {
              general: {
                nullable: true,
              },
            },
          }
        }

        return model
      }}
      onSubmit={onSubmit}
      onSubmitError={createNotificationHandler({
        title: 'Error while updating field',
        type: 'error',
      })}
      onSubmitSuccess={closeForm}
      schema={createFieldSchema}
    >
      <AutoFields fields={['key', 'name', 'description']} />
      <TypeSelect label="Type" name="fieldType" />
      <DisplayIfField<IUpdateFieldData>
        condition={({ model }) =>
          !isBoolean(typeService, model.fieldType) &&
          canSetDefaultValue(typeService, model.fieldType)
        }
      >
        <AutoFields fields={['validationRules.general']} />
      </DisplayIfField>
      <DisplayIfField<IUpdateFieldData>
        condition={({ model }) => isPrimitive(typeService, model.fieldType)}
      >
        <DisplayIfField<IUpdateFieldData>
          condition={({ model }) => isString(typeService, model.fieldType)}
        >
          <AutoFields
            fields={[`validationRules.${PrimitiveTypeKind.String}`]}
          />
        </DisplayIfField>
        <DisplayIfField<IUpdateFieldData>
          condition={({ model }) => isInteger(typeService, model.fieldType)}
        >
          <AutoFields
            fields={[`validationRules.${PrimitiveTypeKind.Integer}`]}
          />
        </DisplayIfField>
        <DisplayIfField<IUpdateFieldData>
          condition={({ model }) => isFloat(typeService, model.fieldType)}
        >
          <AutoFields
            fields={[`validationRules.${PrimitiveTypeKind.Number}`]}
          />
        </DisplayIfField>
      </DisplayIfField>

      <DisplayIfField<IUpdateFieldData>
        condition={({ model }) =>
          canSetDefaultValue(typeService, model.fieldType)
        }
      >
        <SelectDefaultValue typeService={typeService} />
      </DisplayIfField>

      <FormController onCancel={closeForm} submitLabel="Update Field" />
    </Form>
  )
})
