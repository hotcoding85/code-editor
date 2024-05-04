import type { IResourceService } from '@codelab/frontend/abstract/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { SelectField } from 'uniforms-antd'

export interface SelectResourcesProps {
  name: string
  resourceService: IResourceService
}

export const SelectResource = observer<SelectResourcesProps>(
  ({ name, resourceService }) => {
    const options = resourceService.resourceList.map((resource) => ({
      label: resource.name,
      value: resource.id,
    }))

    return (
      <SelectField
        getPopupContainer={(triggerNode) => triggerNode.parentElement}
        name={name}
        optionFilterProp="label"
        options={options}
        showSearch
      />
    )
  },
)
