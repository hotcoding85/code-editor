import type { EventDataNode } from 'antd/lib/tree'
import type { Key } from 'rc-tree/lib/interface'

interface DropInfo {
  dragNode: EventDataNode<unknown>
  dragNodesKeys: Array<Key>
  dropPosition: number
  dropToGap: boolean
  node: EventDataNode<unknown>
}

export const shouldMoveElementAsNextSibling = (info: DropInfo) => {
  const isRootNode = info.node.pos === '0-0'

  // next sibling shouldn't be root node
  return info.dropToGap && !isRootNode
}

export const shouldMoveElementAsFirstChild = (info: DropInfo) => !info.dropToGap
