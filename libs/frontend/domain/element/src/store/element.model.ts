import type {
  IAction,
  IAtom,
  IComponent,
  IElementRenderType,
  IElementRuntimeProp,
  IHook,
  IPage,
  IProp,
  IPropData,
  IStore,
  RenderingError,
  RenderingMetadata,
  TransformPropsFn,
} from '@codelab/frontend/abstract/core'
import {
  actionRef,
  componentRef,
  CssMap,
  DATA_ELEMENT_ID,
  elementRef,
  getComponentService,
  getElementService,
  getRenderService,
  IElement,
  IElementTreeViewDataNode,
  isAtomInstance,
  isComponentInstance,
  pageRef,
  propRef,
} from '@codelab/frontend/abstract/core'
import { getPropService } from '@codelab/frontend/domain/prop'
import {
  ElementCreateInput,
  ElementUpdateInput,
} from '@codelab/shared/abstract/codegen'
import type { IAuth0Owner, IElementDTO } from '@codelab/shared/abstract/core'
import type { IEntity } from '@codelab/shared/abstract/types'
import { Maybe, Nullable, Nullish } from '@codelab/shared/abstract/types'
import {
  connectNodeId,
  disconnectNodeId,
  reconnectNodeId,
} from '@codelab/shared/domain/mapper'
import { compoundCaseToTitleCase, mergeProps } from '@codelab/shared/utils'
import attempt from 'lodash/attempt'
import isError from 'lodash/isError'
import { computed } from 'mobx'
import {
  clone,
  idProp,
  Model,
  model,
  modelAction,
  prop,
  Ref,
} from 'mobx-keystone'
import { getRenderType } from './utils'

const create = ({
  childMapperComponent,
  childMapperPreviousSibling,
  childMapperPropKey,
  customCss,
  firstChild,
  guiCss,
  id,
  name,
  nextSibling,
  page,
  parent,
  parentComponent,
  postRenderAction,
  preRenderAction,
  prevSibling,
  props,
  propTransformationJs,
  renderForEachPropKey,
  renderIfExpression,
  renderType,
}: IElementDTO) => {
  const elementRenderType = getRenderType(renderType)

  return new Element({
    _page: page ? pageRef(page.id) : null,
    _parentComponent: parentComponent ? componentRef(parentComponent.id) : null,
    childMapperComponent: childMapperComponent
      ? componentRef(childMapperComponent.id)
      : null,
    childMapperPreviousSibling: childMapperPreviousSibling
      ? elementRef(childMapperPreviousSibling.id)
      : null,
    childMapperPropKey,
    customCss,
    firstChild: firstChild?.id ? elementRef(firstChild.id) : undefined,
    guiCss,
    id,
    name,
    nextSibling: nextSibling?.id ? elementRef(nextSibling.id) : undefined,

    // parent of first child
    parent: parent?.id ? elementRef(parent.id) : undefined,
    postRenderAction: postRenderAction?.id
      ? actionRef(postRenderAction.id)
      : undefined,
    preRenderAction: preRenderAction?.id
      ? actionRef(preRenderAction.id)
      : undefined,
    prevSibling: prevSibling?.id ? elementRef(prevSibling.id) : undefined,
    props: propRef(props.id),
    propTransformationJs,
    renderForEachPropKey,
    renderIfExpression,
    renderingMetadata: null,
    renderType: elementRenderType,
  })
}

@model('@codelab/Element')
export class Element
  extends Model({
    // page which has this element as rootElement
    _page: prop<Nullable<Ref<IPage>>>(null),
    // component which has this element as rootElement
    _parentComponent: prop<Nullable<Ref<IComponent>>>(null),

    childMapperComponent: prop<Nullable<Ref<IComponent>>>(null).withSetter(),
    childMapperPreviousSibling:
      prop<Nullable<Ref<IElement>>>(null).withSetter(),
    childMapperPropKey: prop<Nullable<string>>(null).withSetter(),
    customCss: prop<Nullable<string>>(null).withSetter(),
    firstChild: prop<Nullable<Ref<IElement>>>(null).withSetter(),
    guiCss: prop<Nullable<string>>(null),
    // Marks the element as an instance of a specific component
    // renderComponentType: prop<Nullable<Ref<IComponent>>>(null).withSetter(),
    hooks: prop<Array<IHook>>(() => []),
    id: idProp.withSetter(),
    name: prop<string>().withSetter(),
    nextSibling: prop<Nullable<Ref<IElement>>>(null).withSetter(),
    orderInParent: prop<Nullable<number>>(null).withSetter(),
    owner: prop<Nullable<IAuth0Owner>>(null),
    // Data used for tree initializing, before our Element model is ready
    parent: prop<Nullable<Ref<IElement>>>(null).withSetter(),
    postRenderAction: prop<Nullable<Ref<IAction>>>(null).withSetter(),
    preRenderAction: prop<Nullable<Ref<IAction>>>(null).withSetter(),
    prevSibling: prop<Nullable<Ref<IElement>>>(null).withSetter(),
    props: prop<Ref<IProp>>().withSetter(),
    propTransformationJs: prop<Nullable<string>>(null).withSetter(),
    renderForEachPropKey: prop<Nullable<string>>(null).withSetter(),
    renderIfExpression: prop<Nullable<string>>(null).withSetter(),
    renderingMetadata: prop<Nullable<RenderingMetadata>>(null),
    // atom: prop<Nullable<Ref<IAtom>>>(null).withSetter(),
    renderType: prop<IElementRenderType | null>(null).withSetter(),
    // if this is a duplicate, trace source element id else null
    sourceElement: prop<Nullable<IEntity>>(null).withSetter(),
  })
  implements IElement
{
  @computed
  get componentService() {
    return getComponentService(this)
  }

  @computed
  get elementService() {
    return getElementService(this)
  }

  @computed
  get renderService() {
    return getRenderService(this)
  }

  @computed
  get propService() {
    return getPropService(this)
  }

  @computed
  get closestRootElement(): IElement {
    return this.closestParent
      ? this.closestParent.closestRootElement
      : (this as IElement)
  }

  @computed
  get parentComponent(): Nullable<Ref<IComponent>> {
    return this.closestParent?.parentComponent ?? this._parentComponent
  }

  @computed
  get page(): Nullable<Ref<IPage>> {
    return this.closestParent?.page ?? this._page
  }

  @computed
  get closestContainerNode(): IComponent | IPage {
    const closestNode = this.page || this.parentComponent

    if (!closestNode) {
      throw new Error('Element has no node attached to')
    }

    return closestNode.current
  }

  @computed
  get store(): Ref<IStore> {
    return this.closestContainerNode.store
  }

  @computed
  get children(): Array<IElement> {
    const firstChild = this.firstChild

    if (!firstChild) {
      return []
    }

    const results = []
    let currentTraveledNode: Maybe<IElement> = firstChild.current

    // parent = el1 -> el2 -> el3 -> end
    // given el1, travel next using next sibling until next = no more next sibling
    while (currentTraveledNode) {
      results.push(currentTraveledNode)
      currentTraveledNode = currentTraveledNode.nextSibling?.current
    }

    return results
  }

  /**
   * Only the root doesn't have a closestParent
   */
  @computed
  get isRoot() {
    return !this.closestParent?.id
  }

  /**
   * We have the concept of `parent` and `closestParent`.
   *
   * `parent` has an edge connection like `siblings` in the database.
   *
   * `closestParent` is a conceptual value, we traverse up the sibling chain until we find the first parent
   *
   * (parentA)
   * \
   * (firstChild)-(nextSibling)
   *
   * `nextSibling` has no `parent`, but has a `closestParent` of `parentA`
   */
  @computed
  get closestParent(): IElement | null {
    const parent = this.parent

    if (parent) {
      return parent.current
    }

    let traveledNode = this.prevSibling?.maybeCurrent

    while (traveledNode) {
      const currentParent = traveledNode.parent

      if (currentParent) {
        return currentParent.current
      }

      /**
       * If we don't find a parent, traverse up the sibling chain
       */
      traveledNode = traveledNode.prevSibling?.current
    }

    return null
  }

  @computed
  get runtimeProp(): Maybe<IElementRuntimeProp> {
    return this.renderService.activeRenderer?.current.runtimeProps.get(
      this.id,
    ) as Maybe<IElementRuntimeProp>
  }

  @modelAction
  appendToGuiCss(css: CssMap) {
    const curGuiCss = JSON.parse(this.guiCss || '{}')
    const newGuiCss = { ...curGuiCss, ...css }
    this.guiCss = JSON.stringify(newGuiCss)
  }

  @modelAction
  deleteFromGuiCss(propNames: Array<string>) {
    const curGuiCss = JSON.parse(this.guiCss || '{}')
    propNames.forEach((propName) => {
      if (curGuiCss[propName]) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete curGuiCss[propName]
      }
    })

    this.guiCss = JSON.stringify(curGuiCss)
  }

  @modelAction
  setParentComponent(component: Ref<IComponent>) {
    this._parentComponent = component
  }

  @modelAction
  setPage(page: Ref<IPage>) {
    this._page = page
  }

  @modelAction
  setRenderingError(error: Nullish<RenderingError>) {
    this.renderingMetadata = {
      error,
    }
  }

  @computed
  get ancestorError() {
    const parent = this.closestParent

    if (!parent) {
      return null
    }

    if (parent.renderingMetadata?.error) {
      return parent.renderingMetadata.error
    }

    return parent.ancestorError
  }

  /**
   * We could fetch descendantElements for each element, but that would require too much GraphQL data, instead we can compute it from children.
   *
   * We reserve descendantElements for rootElements only
   */
  @computed
  get descendantElements(): Array<IElement> {
    const descendants: Array<IElement> = []

    for (const child of this.children) {
      descendants.push(child)
      descendants.push(...child.descendantElements)
    }

    return descendants
  }

  @computed
  get label() {
    return (
      this.name ||
      this.renderType?.maybeCurrent?.name ||
      (isAtomInstance(this.renderType)
        ? compoundCaseToTitleCase((this.renderType.current as IAtom).type)
        : undefined) ||
      this.parentComponent?.maybeCurrent?.name ||
      ''
    )
  }

  @computed
  get treeTitle() {
    return {
      primary: this.label,
      secondary:
        this.renderType?.maybeCurrent?.name ||
        (isAtomInstance(this.renderType)
          ? compoundCaseToTitleCase((this.renderType.current as IAtom).type)
          : undefined),
    }
  }

  /**
   * Internal system props for meta data, use double underline for system-defined identifiers.
   */
  @computed
  get __metadataProps() {
    return { [DATA_ELEMENT_ID]: this.id, key: this.id }
  }

  @computed
  get treeViewNode(): IElementTreeViewDataNode {
    const extraChildren: Array<IElement> = []

    // Creates the tree node n times for the component based on the child mapper prop
    if (
      this.childMapperComponent?.id &&
      this.childMapperPropKey &&
      this.runtimeProp?.evaluatedChildMapperProp.length
    ) {
      const keys = [
        ...Array(this.runtimeProp.evaluatedChildMapperProp.length).keys(),
      ]

      keys.forEach((i) => {
        const clonedComponent = this.componentService.clonedComponents.get(
          `${this.id}-${i}`,
        )

        if (clonedComponent) {
          extraChildren.push(clonedComponent.rootElement.current)
        }
      })
    }

    const childMapperRenderIndex =
      this.children.findIndex(
        (child) => child.id === this.childMapperPreviousSibling?.id,
      ) + 1

    const children = [...this.children.map((child) => child.treeViewNode)]
    children.splice(
      childMapperRenderIndex,
      0,
      ...extraChildren.map((child) => ({
        ...child.treeViewNode,
        children: [],
        isChildMapperComponentInstance: true,
      })),
    )

    return {
      children,
      key: this.id,
      node: this,
      primaryTitle: this.treeTitle.primary,
      rootKey: this.closestRootElement.id,
      secondaryTitle: this.treeTitle.secondary,
      title: `${this.treeTitle.primary} (${this.treeTitle.secondary})`,
    }
  }

  @computed
  get atomName() {
    if (isAtomInstance(this.renderType)) {
      return this.renderType.current.name || this.renderType.current.type
    }

    return ''
  }

  /**
   * Parses and materializes the propTransformationJs
   */
  @computed
  get transformPropsFn(): Maybe<TransformPropsFn> {
    if (!this.propTransformationJs) {
      return undefined
    }

    // the parentheses allow us to return a function from eval
    // eslint-disable-next-line no-eval
    const result = attempt(eval, `(${this.propTransformationJs})`)

    if (isError(result)) {
      console.warn('Error while evaluating prop transformation', result)

      return undefined
    }

    if (typeof result != 'function') {
      console.warn('Invalid transformation function')

      return undefined
    }

    return result
  }

  static create = create

  @modelAction
  toCreateInput(): ElementCreateInput {
    /**
     * Here we'll want to set default value based on the interface
     */
    const renderAtomType = isAtomInstance(this.renderType)
      ? connectNodeId(this.renderType.id)
      : undefined

    const renderComponentType = isComponentInstance(this.renderType)
      ? connectNodeId(this.renderType.id)
      : undefined

    return {
      id: this.id,
      name: this.name,
      props: {
        create: {
          node: this.props.current.toCreateInput(),
        },
      },
      renderAtomType,
      renderComponentType,
    }
  }

  @modelAction
  toUpdateInput(): ElementUpdateInput {
    // We need to disconnect the atom if render type changed to component or empty
    const renderAtomType = isAtomInstance(this.renderType)
      ? reconnectNodeId(this.renderType.id)
      : disconnectNodeId(undefined)

    // We need to disconnect the component if render type changed to atom or empty
    const renderComponentType = isComponentInstance(this.renderType)
      ? reconnectNodeId(this.renderType.id)
      : disconnectNodeId(undefined)

    const preRenderAction = this.preRenderAction?.id
      ? reconnectNodeId(this.preRenderAction.id)
      : disconnectNodeId(undefined)

    const postRenderAction = this.postRenderAction?.id
      ? reconnectNodeId(this.postRenderAction.id)
      : disconnectNodeId(undefined)

    const childMapperComponent = this.childMapperComponent?.id
      ? reconnectNodeId(this.childMapperComponent.id)
      : disconnectNodeId(undefined)

    const childMapperPreviousSibling = this.childMapperPreviousSibling?.id
      ? reconnectNodeId(this.childMapperPreviousSibling.id)
      : disconnectNodeId(undefined)

    return {
      childMapperComponent,
      childMapperPreviousSibling,
      childMapperPropKey: this.childMapperPropKey,
      customCss: this.customCss,
      guiCss: this.guiCss,
      name: this.name,
      postRenderAction,
      preRenderAction,
      propTransformationJs: this.propTransformationJs,
      renderAtomType,
      renderComponentType,
      renderForEachPropKey: this.renderForEachPropKey,
      renderIfExpression: this.renderIfExpression,
    }
  }

  @modelAction
  toUpdateNodesInput(): Pick<
    ElementUpdateInput,
    'firstChild' | 'nextSibling' | 'parent' | 'prevSibling'
  > {
    return {
      firstChild: reconnectNodeId(this.firstChild?.id),
      nextSibling: reconnectNodeId(this.nextSibling?.id),
      parent: reconnectNodeId(this.parent?.id),
      prevSibling: reconnectNodeId(this.prevSibling?.id),
    }
  }

  @modelAction
  clone(cloneIndex: number) {
    const clonedElement: IElement = clone<IElement>(this, {
      generateNewIds: true,
    })

    // FIXME: add atom and props
    clonedElement.setName(`${this.name} ${cloneIndex}`)
    clonedElement.setSourceElement(elementRef(this.id))

    // store elements in elementService
    this.elementService.clonedElements.set(clonedElement.id, clonedElement)

    return clonedElement
  }

  /**
   * Executes the prop transformation function
   * If successful, merges the result with the original props and returns it
   * If failed, returns the original props
   */
  executePropTransformJs = (props: IPropData) => {
    if (!this.transformPropsFn) {
      return props
    }

    const result = attempt(this.transformPropsFn, props)

    if (isError(result)) {
      console.warn('Unable to transform props', result)

      return props
    }

    return mergeProps(props, result)
  }

  /**
   * This removes the `element` and attaches the siblings together
   *
   * (prevSibling)-[element]-(nextSibling)
   *
   * (prevSibling)-(nextSibling)
   */
  @modelAction
  connectPrevToNextSibling() {
    if (this.nextSibling) {
      this.nextSibling.current.prevSibling = this.prevSibling
        ? elementRef(this.prevSibling.current)
        : null
    }

    if (this.prevSibling) {
      this.prevSibling.current.nextSibling = this.nextSibling
        ? elementRef(this.nextSibling.current)
        : null
    }

    this.nextSibling = null
    this.prevSibling = null
  }

  /**
   * This will connect any siblings to the current element's parent
   *
   * (parent)
   * \
   *  [element]-(nextSibling)
   */
  @modelAction
  detachFromParent() {
    if (!this.parent) {
      return
    }

    /**
     * Connect nextSibling to the parent
     */
    if (this.nextSibling) {
      // Connect parent to nextSibling
      this.parent.current.firstChild = elementRef(this.nextSibling.current)

      // Connect nextSibling to parent
      this.nextSibling.current.setParent(elementRef(this.parent.id))
    } else {
      this.parent.current.firstChild = null
    }

    this.parent = null
  }

  @modelAction
  detachAsFirstChild() {
    this.parent = null
  }

  /**
   * This function will replace the current `firstChild` with our new element. You'll need to call other function to handle attaching firstChild
   *
   * (parent)
   * \
   * (firstChild)
   *
   *    (parent)
   *       \   \
   * [element]  x
   *             \
   *             (firstChild)
   */
  @modelAction
  attachToParentAsFirstChild(parentElement: IElement) {
    parentElement.firstChild?.current.detachAsFirstChild()
    this.parent = elementRef(parentElement)
    parentElement.firstChild = elementRef(this.id)
  }

  /**
   * Attach the new element as prevSibling. Leaves `prevSibling` still connected to `sibling`.
   *
   * (prevSibling)-(sibling)
   * (prevSibling)-x-[element]-(sibling)
   *
   * @param sibling
   * @returns
   */
  @modelAction
  attachAsPrevSibling(sibling: IElement) {
    // Add element as as prevSibling
    sibling.prevSibling = elementRef(this)
    this.nextSibling = elementRef(sibling)
  }

  /**
   * Attach the new element as as nextSibling. Leaves `nextSibling` still connected to `sibling`.
   *
   * (sibling)-(nextSibling)
   * (sibling)-[element]-x-(nextSibling)
   *
   * @param sibling
   * @returns
   */
  @modelAction
  attachAsNextSibling(sibling: IElement) {
    sibling.nextSibling = elementRef(this.id)
    this.prevSibling = elementRef(sibling.id)
  }

  @modelAction
  @modelAction
  writeCache({
    childMapperComponent,
    childMapperPreviousSibling,
    childMapperPropKey,
    customCss,
    firstChild,
    guiCss,
    name,
    nextSibling,
    parent,
    parentComponent,
    postRenderAction,
    preRenderAction,
    prevSibling,
    props,
    propTransformationJs,
    renderForEachPropKey,
    renderIfExpression,
    renderType,
  }: Partial<IElementDTO>) {
    const elementRenderType = getRenderType(renderType)

    this.name = name ?? this.name
    this.customCss = customCss ?? this.customCss
    this.guiCss = guiCss ?? this.guiCss
    this.propTransformationJs =
      propTransformationJs ?? this.propTransformationJs
    this.renderIfExpression = renderIfExpression ?? null
    this.renderForEachPropKey = renderForEachPropKey ?? null
    this.renderType = elementRenderType ?? null
    this.props = props?.id ? propRef(props.id) : this.props
    this.childMapperPropKey = childMapperPropKey ?? null
    this.parent = parent?.id ? elementRef(parent.id) : this.parent
    this.nextSibling = nextSibling?.id
      ? elementRef(nextSibling.id)
      : this.nextSibling
    this.prevSibling = prevSibling?.id
      ? elementRef(prevSibling.id)
      : this.prevSibling
    this.firstChild = firstChild?.id
      ? elementRef(firstChild.id)
      : this.firstChild
    this._parentComponent = parentComponent
      ? componentRef(parentComponent.id)
      : this._parentComponent
    this.preRenderAction = preRenderAction
      ? actionRef(preRenderAction.id)
      : null
    this.postRenderAction = postRenderAction
      ? actionRef(postRenderAction.id)
      : null
    this.childMapperComponent = childMapperComponent
      ? componentRef(childMapperComponent.id)
      : null
    this.childMapperPreviousSibling = childMapperPreviousSibling
      ? elementRef(childMapperPreviousSibling.id)
      : null

    return this
  }
}
