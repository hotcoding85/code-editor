import type {
  IBuilderService,
  IComponent,
  IElementService,
} from '@codelab/frontend/abstract/core'
import { isElementPageNodeRef } from '@codelab/frontend/abstract/core'
import { CreateElementButton } from '@codelab/frontend/domain/element'
import { Col, Row } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'

interface BuilderTreeItemComponentTitleProps {
  builderService: IBuilderService
  component: IComponent
  elementService: IElementService
}

export const BuilderTreeItemComponentTitle = observer(
  ({
    builderService,
    component,
    elementService,
  }: BuilderTreeItemComponentTitleProps) => {
    const { selectedNode } = builderService

    const selectedNodeId = isElementPageNodeRef(selectedNode)
      ? selectedNode.id
      : undefined

    return (
      <Row justify="space-between">
        <Col className="px-2">{component.name}</Col>
        <Col className="px-2">
          <CreateElementButton
            createElementForm={elementService.createForm}
            elementTree={component}
            key={0}
            selectedElementId={selectedNodeId}
            type="text"
          />
        </Col>
      </Row>
    )
  },
)
