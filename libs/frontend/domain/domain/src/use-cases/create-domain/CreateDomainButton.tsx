import { PlusOutlined } from '@ant-design/icons'
import { useStore } from '@codelab/frontend/presentation/container'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import type { PropsWithChildren } from 'react'
import React from 'react'

export const CreateDomainButton = observer<PropsWithChildren>(
  ({ children }) => {
    const { domainService } = useStore()
    const icon = !children && <PlusOutlined />

    const onClick = () => {
      domainService.createModal.open()
    }

    return (
      <Button icon={icon} onClick={onClick} type="primary">
        {children ?? 'Create Domain'}
      </Button>
    )
  },
)
