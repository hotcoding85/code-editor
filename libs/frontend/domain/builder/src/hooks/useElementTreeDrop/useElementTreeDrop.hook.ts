import type {
  IElementService,
  IElementTree,
  IElementTreeViewDataNode,
} from '@codelab/frontend/abstract/core'
import { useRequiredParentValidator } from '@codelab/frontend/domain/element'
import type { Nullable } from '@codelab/shared/abstract/types'
import type { TreeProps } from 'antd/lib/tree'
import {
  shouldMoveElementAsFirstChild,
  shouldMoveElementAsNextSibling,
} from './utils.hook'

export interface UseElementTreeDropProps {
  elementService: IElementService
  elementTree: Nullable<IElementTree>
}

/**
 * Provides a handler for Antd tree onDrop for moving elements
 * This can be optimized by batching data changes in the API
 */
export const useElementTreeDrop = (elementService: IElementService) => {
  const { validateParentForMove } = useRequiredParentValidator()

  const handleDrop: TreeProps<IElementTreeViewDataNode>['onDrop'] = async (
    info,
  ) => {
    const dragElement = { id: info.dragNode.key.toString() }
    const dropElement = { id: info.node.key.toString() }
    const dragRootId = info.dragNode.rootKey?.toString()
    const dropRootId = info.node.rootKey?.toString()

    // check if the dropNode lives in a different component
    // move the element into the other component
    if (dragRootId !== dropRootId) {
      if (dragElement.id === dragRootId) {
        // We can't move the root because the drag component
        // can't stay without a root element
        return
      }

      void elementService.moveNodeToAnotherTree({
        dropPosition: info.dropPosition,
        object: dragElement,
        targetElement: dropElement,
      })

      return
    }

    if (!validateParentForMove(dragElement.id, dropElement.id)) {
      return
    }

    if (shouldMoveElementAsFirstChild(info)) {
      void elementService.moveElementAsFirstChild({
        element: dragElement,
        parentElement: dropElement,
      })

      return
    }

    if (shouldMoveElementAsNextSibling(info)) {
      void elementService.moveElementAsNextSibling({
        element: dragElement,
        targetElement: dropElement,
      })
    }

    // drop at the beginning of parent body
    // drop to gap + isRootNode = move element outside of body
  }

  return {
    handleDrop,
    // isLoading,
    isMoving: false,
  }
}
