import type { ICreateDomainData } from '@codelab/frontend/abstract/core'
import {
  useCurrentApp,
  useStore,
} from '@codelab/frontend/presentation/container'
import { ModalForm } from '@codelab/frontend/presentation/view'
import { useNotify } from '@codelab/frontend/shared/utils'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { AutoFields } from 'uniforms-antd'
import { v4 } from 'uuid'
import { handleDomainExistError } from '../../errors'
import { createDomainSchema } from './create-domain.schema'

export const CreateDomainModal = observer(() => {
  const { domainService, userService } = useStore()
  const { app } = useCurrentApp()

  const model = {
    app: { id: app?.id },
    auth0Id: userService.user.auth0Id,
    id: v4(),
  }

  const onSubmit = (data: ICreateDomainData) => {
    return domainService.create(data)
  }

  const closeModal = () => domainService.createModal.close()
  const { onError } = useNotify({}, {})

  const onSubmitError = (error: unknown) => {
    if (!handleDomainExistError(error, onError)) {
      onError('Error while adding app domain')
    }
  }

  return (
    <ModalForm.Modal
      okText="Create Domain"
      onCancel={closeModal}
      open={domainService.createModal.isOpen}
    >
      <ModalForm.Form
        model={model}
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
        onSubmitSuccess={closeModal}
        schema={createDomainSchema}
      >
        <AutoFields />
      </ModalForm.Form>
    </ModalForm.Modal>
  )
})
