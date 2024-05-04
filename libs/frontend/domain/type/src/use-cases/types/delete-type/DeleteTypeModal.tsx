import { useStore } from '@codelab/frontend/presentation/container'
import type { EmptyJsonSchemaType } from '@codelab/frontend/presentation/view'
import { emptyJsonSchema, ModalForm } from '@codelab/frontend/presentation/view'
import { createNotificationHandler } from '@codelab/frontend/shared/utils'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { typeApi } from '../../../store'

export const DeleteTypeModal = observer(() => {
  const { typeService } = useStore()
  const closeModal = () => typeService.deleteModal.close()
  const typeToDelete = typeService.deleteModal.type

  const onSubmit = async () => {
    if (!typeToDelete?.kind) {
      throw new Error('useDeleteTypeForm: TypeKind is not defined')
    }

    // Make sure this type is not referenced anywhere else or the data may become corrupt
    const { getTypeReferences } = await typeApi.GetTypeReferences({
      typeId: typeToDelete.id,
    })

    if (getTypeReferences?.length) {
      const allRefs = getTypeReferences.map(
        (typeRef) => `${typeRef.name} (${typeRef.label})`,
      )

      const label = Array.from(new Set(allRefs)).join(', ')

      throw new Error(`Can't delete typed since it's referenced in ${label}`)
    }

    await typeService.delete(typeToDelete)

    /**
     * typeService.delete writes into cache
     * if modal is opened -> bug: modal input values are cleared
     *
     * void = execute typeService.queryGetTypesTableTypes, close modal, and not wait until it finished
     */
  }

  return (
    <ModalForm.Modal
      okText="Delete"
      onCancel={closeModal}
      open={typeService.deleteModal.isOpen}
      title={<span className="font-semibold">Delete type</span>}
    >
      <ModalForm.Form<EmptyJsonSchemaType>
        model={{}}
        onSubmit={onSubmit}
        onSubmitError={createNotificationHandler({
          title: 'Error while deleting type',
          type: 'error',
        })}
        onSubmitSuccess={closeModal}
        schema={emptyJsonSchema}
      >
        <h4>Are you sure you want to delete type "{typeToDelete?.name}"?</h4>
      </ModalForm.Form>
    </ModalForm.Modal>
  )
})
