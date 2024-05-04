import {
  DATA_ELEMENT_ID,
  isAtomInstance,
} from '@codelab/frontend/abstract/core'
import { ConditionalRenderPipe } from '../renderPipes/conditional-render-pipe'
import { setupTestForRenderer } from './setup/setup-test'

describe('ConditionalRenderPipe', () => {
  const data = setupTestForRenderer([ConditionalRenderPipe])

  it('should render normally if no expression is set', async () => {
    data.element.setRenderIfExpression(undefined)

    const output = data.rootStore.renderer.renderIntermediateElement(
      data.element,
    )

    const atomType = isAtomInstance(data.element.renderType)
      ? data.element.renderType.current.type
      : null

    expect(output).toEqual({
      atomType,
      element: data.element,
      props: expect.objectContaining({
        [DATA_ELEMENT_ID]: data.element.id,
      }),
    })
  })

  it('should stop rendering by returning an empty output', async () => {
    data.element.setRenderIfExpression('{{props.shouldRender}}')
    // changing state is bit tricky so, just use props
    data.element.props.current.set('shouldRender', false)

    const output = data.rootStore.renderer.renderIntermediateElement(
      data.element,
    )

    expect(output).toEqual({ element: data.element })
  })

  it('should continue rendering', async () => {
    data.element.setRenderIfExpression('{{props.shouldRender}}')
    // changing state is bit tricky so, just use props
    data.element.props.current.set('shouldRender', true)

    const output = data.rootStore.renderer.renderIntermediateElement(
      data.element,
    )

    const atomType = isAtomInstance(data.element.renderType)
      ? data.element.renderType.current.type
      : null

    expect(output).toEqual({
      atomType,
      element: data.element,
      props: expect.objectContaining({
        [DATA_ELEMENT_ID]: data.element.id,
      }),
    })
  })
})
