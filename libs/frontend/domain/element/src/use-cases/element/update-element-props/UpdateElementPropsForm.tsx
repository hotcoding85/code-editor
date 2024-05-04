import type { IElement, IPropData } from '@codelab/frontend/abstract/core'
import {
  CUSTOM_TEXT_PROP_KEY,
  isAtomInstance,
  isComponentInstance,
} from '@codelab/frontend/abstract/core'
import { AdminPropsPanel } from '@codelab/frontend/domain/admin'
import { PropsForm } from '@codelab/frontend/domain/type'
import {
  loadAllTypesForElements,
  useStore,
} from '@codelab/frontend/presentation/container'
import { ReactQuillField, Spinner } from '@codelab/frontend/presentation/view'
import { filterEmptyStrings, mergeProps } from '@codelab/shared/utils'
import { useAsync } from '@react-hookz/web'
import type { JSONSchemaType } from 'ajv'
import { Col, Row } from 'antd'
import type { Ref } from 'mobx-keystone'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'

export interface UpdateElementPropsFormProps {
  element: Ref<IElement>
}

const withCustomTextSchema: JSONSchemaType<{
  [CUSTOM_TEXT_PROP_KEY]?: string
}> = {
  properties: {
    [CUSTOM_TEXT_PROP_KEY]: {
      label: 'Custom text',
      nullable: true,
      type: 'string',
      uniforms: {
        component: ReactQuillField,
      },
    },
  },
  required: [],
  title: '',
  type: 'object',
} as const

export const UpdateElementPropsForm = observer<UpdateElementPropsFormProps>(
  ({ element }) => {
    const { builderService, componentService, propService, typeService } =
      useStore()

    const currentElement = element.current
    const apiId = currentElement.renderType?.current.api.id

    const [{ result: interfaceType, status }, getInterface] = useAsync(
      async () => {
        await loadAllTypesForElements(
          componentService,
          typeService,
          builderService.activeElementTree?.rootElement.current
            .descendantElements ?? [],
        )

        return typeService.getInterface(apiId!)
      },
    )

    useEffect(() => {
      void getInterface.execute()
    }, [apiId])

    const onSubmit = (data: IPropData) => {
      const filteredData = filterEmptyStrings(data)
      console.log('Submitting: ', filteredData)

      const props = element.current.props.current

      return propService.update({
        data: JSON.stringify(filteredData),
        id: props.id,
      })
    }

    const allowCustomInnerHtml =
      isAtomInstance(currentElement.renderType) &&
      currentElement.renderType.current.allowCustomTextInjection &&
      currentElement.children.length === 0

    const initialSchema = allowCustomInnerHtml ? withCustomTextSchema : {}

    // If element is a component type, we also show the component props
    // but should prioritize the element props
    // Since the prop values are observable and changes after the update, we need to prevent
    // re-rendering the form so the focus is not lost, so the use of `useMemo` here
    const propsModel = React.useMemo(
      () =>
        mergeProps(
          isComponentInstance(currentElement.renderType)
            ? currentElement.renderType.maybeCurrent?.props.current.values
            : {},
          currentElement.props.current.values,
        ),
      [currentElement.id],
    )

    return (
      <Spinner isLoading={status === 'loading'}>
        {interfaceType && (
          <Row className="mb-5" gutter={[0, 16]}>
            <Col span={24}>
              <PropsForm
                autosave
                initialSchema={initialSchema}
                interfaceType={interfaceType}
                key={element.id}
                model={propsModel}
                onSubmit={onSubmit}
                submitField={React.Fragment}
              />
            </Col>
            <Col span={24}>
              <AdminPropsPanel interfaceType={interfaceType} />
            </Col>
          </Row>
        )}
      </Spinner>
    )
  },
)
