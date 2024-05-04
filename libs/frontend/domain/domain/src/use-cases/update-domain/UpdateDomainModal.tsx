import type { IUpdateDomainData } from '@codelab/frontend/abstract/core'
import {
  useCurrentApp,
  useStore,
} from '@codelab/frontend/presentation/container'
import { ModalForm } from '@codelab/frontend/presentation/view'
import { useNotify } from '@codelab/frontend/shared/utils'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { AutoFields } from 'uniforms-antd'
import { handleDomainExistError } from '../../errors'
import { updateDomainSchema } from './update-domain.schema'

export const UpdateDomainModal = observer(() => {
  const { domainService } = useStore()
  const domain = domainService.updateModal.domain
  const isOpen = domainService.updateModal.isOpen
  const { app } = useCurrentApp()

  const onSubmit = (domainDTO: IUpdateDomainData) => {
    return domainService.update(domainDTO)
  }

  const closeModal = () => domainService.updateModal.close()
  const { onError } = useNotify({}, {})

  const onSubmitError = (error: unknown) => {
    if (!handleDomainExistError(error, onError)) {
      onError('Error while updating app domain')
    }
  }

  const model = {
    app: { id: app?.id },
    id: domain?.id,
    name: domain?.name,
  }

  return (
    <ModalForm.Modal okText="Update Domain" onCancel={closeModal} open={isOpen}>
      <ModalForm.Form<IUpdateDomainData>
        model={model}
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
        onSubmitSuccess={closeModal}
        schema={updateDomainSchema}
      >
        <AutoFields omitFields={['storeId']} />
      </ModalForm.Form>
    </ModalForm.Modal>
  )
})
