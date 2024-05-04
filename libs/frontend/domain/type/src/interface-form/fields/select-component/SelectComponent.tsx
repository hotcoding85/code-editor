/* eslint-disable react/jsx-props-no-spreading */
import { useStore } from '@codelab/frontend/presentation/container'
import { useAsync } from '@react-hookz/web'
import sortBy from 'lodash/sortBy'
import React from 'react'
import type { SelectFieldProps } from 'uniforms-antd'
import { SelectField } from 'uniforms-antd'

export type SelectComponentProps = Partial<
  Pick<SelectFieldProps, 'error' | 'label' | 'onChange'>
> &
  Pick<SelectFieldProps, 'name'>

export const SelectComponent = ({ ...fieldProps }: SelectComponentProps) => {
  const { builderService, componentService } = useStore()
  const [{ status }, getComponents] = useAsync(() => componentService.getAll())
  const allComponents = sortBy(componentService.componentList, 'name')
  // Used for filtering the component options
  const parentComponent = builderService.activeComponent?.current

  // remove the components that refer the current component to avoid creating circular references
  // including itself
  const filteredComponents = allComponents.filter((component) => {
    if (component.id === parentComponent?.id) {
      return false
    }

    const descendants = component.descendantComponents

    return (
      !parentComponent?.id ||
      !descendants.some(({ id }) => id === parentComponent.id)
    )
  })

  const componentOptions = filteredComponents.map((component) => ({
    label: component.name,
    value: component.id,
  }))

  return (
    <SelectField
      {...fieldProps}
      error={fieldProps.error}
      getPopupContainer={(triggerNode) => triggerNode.parentElement}
      onDropdownVisibleChange={async (open) => {
        if (open && status === 'not-executed') {
          await getComponents.execute()
        }
      }}
      optionFilterProp="label"
      options={componentOptions}
      showSearch
    />
  )
}
