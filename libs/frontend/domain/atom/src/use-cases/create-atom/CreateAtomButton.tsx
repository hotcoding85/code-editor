import { PlusOutlined } from '@ant-design/icons'
import { useStore } from '@codelab/frontend/presentation/container'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'

export const CreateAtomButton = observer(() => {
  const { atomService } = useStore()

  return (
    <Button
      className="flex items-center justify-center"
      icon={<PlusOutlined />}
      onClick={() => atomService.createModal.open()}
      type="primary"
    >
      Create
    </Button>
  )
})
