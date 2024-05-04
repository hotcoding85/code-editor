import { useStore } from '@codelab/frontend/presentation/container'
import { emptyJsonSchema, ModalForm } from '@codelab/frontend/presentation/view'
import { createNotificationHandler } from '@codelab/frontend/shared/utils'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { AutoFields } from 'uniforms-antd'

export const DeleteDomainModal = observer(() => {
  const { domainService } = useStore()
  const closeModal = () => domainService.deleteModal.close()
  const domain = domainService.deleteModal.domain

  const onSubmit = () => {
    if (!domain) {
      return Promise.reject()
    }

    return domainService.delete(domain)
  }

  const onSubmitError = createNotificationHandler({
    title: 'Error while deleting domain',
  })

  if (!domainService.deleteModal.domain) {
    return null
  }

  const model = {
    id: domainService.deleteModal.domain.id,
  }

  return (
    <ModalForm.Modal
      okText="Delete"
      onCancel={closeModal}
      open={domainService.deleteModal.isOpen}
      title={<span className="font-semibold">Delete domain</span>}
    >
      <ModalForm.Form
        model={model}
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
        onSubmitSuccess={closeModal}
        schema={emptyJsonSchema}
      >
        <h4>Are you sure you want to delete the domain "{domain?.name}"?</h4>
        <AutoFields />
      </ModalForm.Form>
    </ModalForm.Modal>
  )
})
