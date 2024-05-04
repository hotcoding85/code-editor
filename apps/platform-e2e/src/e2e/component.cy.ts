import type { IAppDTO } from '@codelab/shared/abstract/core'
import { IAtomType, IPrimitiveTypeKind } from '@codelab/shared/abstract/core'
import { slugify } from '@codelab/shared/utils'
import { FIELD_TYPE } from '../support/antd/form'
import { loginSession } from '../support/nextjs-auth0/commands/login'

const COMPONENT_NAME = 'New Component'
const COMPONENT_INSTANCE_NAME = 'Component Instance'
const COMPONENT_PROP_NAME = 'component_prop'
const COMPONENT_PROP_VALUE = 'component_prop_value'
const COMPONENT_CHILD_SPACE = 'Space'
const COMPONENT_CHILD_TYPOGRAPHY = 'Typography'
const COMPONENT_CHILD_TEXT = `text {{this.${COMPONENT_PROP_NAME}}}`
const COMPONENT_INSTANCE_TEXT = 'Instance Text'
const PAGE_NAME = '_app'

interface ComponentChildData {
  atom: string
  name: string
}

const componentChildren: Array<ComponentChildData> = [
  { atom: IAtomType.AntDesignSpace, name: COMPONENT_CHILD_SPACE },
  { atom: IAtomType.AntDesignTypographyText, name: COMPONENT_CHILD_TYPOGRAPHY },
]

let testApp: any
let appName: string | undefined
describe('Component CRUD', () => {
  before(() => {
    cy.resetDatabase()
    loginSession()

    cy.request('/api/cypress/type')

    cy.request('/api/cypress/atom')
      .then(() => {
        return cy.request<IAppDTO>('/api/cypress/app')
      })
      .then((apps) => {
        testApp = apps

        const app = apps.body
        appName = app.name
        cy.visit(
          `/apps/cypress/${slugify(appName)}/pages/${slugify(
            PAGE_NAME,
          )}/builder?primarySidebarKey=components`,
        )
        // GetRenderedPageAndCommonAppData
        cy.waitForApiCalls()
        cy.getSpinner().should('not.exist')

        // GetAtoms
        // GetComponents
        cy.waitForApiCalls()
        cy.getSpinner().should('not.exist')
      })
  })

  describe('Add component', () => {
    it('should be able to add a new component', () => {
      cy.log('my app', JSON.stringify(testApp, null, 2))
      cy.getCuiSidebar('Components').getToolbarItem('Add Component').click()
      cy.findByTestId('create-component-form')
        .findByLabelText('Name')
        .type(COMPONENT_NAME)
      cy.findByTestId('create-component-form')
        .getButton({ label: 'Create Component' })
        .click()
      cy.findByTestId('create-component-form').should('not.exist', {
        timeout: 10000,
      })
      cy.findByText(COMPONENT_NAME).should('exist')
    })

    it('should be able to define property on component', () => {
      cy.getSider().getButton({ icon: 'edit' }).click()
      cy.get(`.ant-tabs [aria-label="setting"]`).click()
      cy.get('.ant-tabs-tabpane-active').contains(/Add/).click()
      cy.getModal().setFormFieldValue({
        label: 'Key',
        value: COMPONENT_PROP_NAME,
      })
      cy.getModal().setFormFieldValue({
        label: 'Type',
        type: FIELD_TYPE.SELECT,
        value: IPrimitiveTypeKind.String,
      })
      cy.getModal().setFormFieldValue({
        label: 'Nullable',
        type: FIELD_TYPE.TOGGLE,
        value: true,
      })
      cy.getModal()
        .getModalAction(/Create/)
        .click()
      cy.getModal().should('not.exist', { timeout: 10000 })
    })

    it('should be able to add elements to the component', () => {
      /**
       * TODO(@nx/cypress): Nesting Cypress commands in a should assertion now throws.
       * You should use .then() to chain commands instead.
       * More Info: https://docs.cypress.io/guides/references/migration-guide#-should
       * */
      cy.wrap(componentChildren).each((child: ComponentChildData) => {
        cy.getCuiTreeItemByPrimaryTitle(COMPONENT_NAME).trigger('contextmenu')

        cy.contains(/Add child/).click({ force: true })
        cy.findByTestId('create-element-form').setFormFieldValue({
          label: 'Render Type',
          type: FIELD_TYPE.SELECT,
          value: 'Atom',
        })
        cy.findByTestId('create-element-form').setFormFieldValue({
          label: 'Atom',
          type: FIELD_TYPE.SELECT,
          value: child.atom,
        })
        cy.findByTestId('create-element-form').setFormFieldValue({
          label: 'Name',
          type: FIELD_TYPE.INPUT,
          value: child.name,
        })
        cy.findByTestId('create-element-form')
          .getButton({ label: 'Create Element' })
          .click()
        cy.findByTestId('create-element-form').should('not.exist', {
          timeout: 10000,
        })
        cy.getCuiTreeItemByPrimaryTitle(child.name).click({ force: true })
      })

      // Should run after each
      cy.get(`.ant-tabs [aria-label="setting"]`).click()
      cy.get('.ant-tabs-tabpane-active form .ql-editor').type(
        COMPONENT_CHILD_TEXT,
        { parseSpecialCharSequences: false },
      )

      cy.get('#render-root').findByText('text undefined').should('exist')
    })

    it('should be able to specify where to render component children', () => {
      cy.visit(
        `/apps/cypress/${slugify(appName)}/pages/${slugify(
          PAGE_NAME,
        )}/builder?primarySidebarKey=components`,
      )
      // GetRenderedPageAndCommonAppData
      cy.waitForApiCalls()
      cy.getSpinner().should('not.exist')

      // GetAtoms
      cy.waitForApiCalls()
      cy.getSpinner().should('not.exist')

      cy.get('[data-node-key="custom-components"] .ant-tabs-tab-btn').click({
        force: true,
      })

      cy.findByText(COMPONENT_NAME).click({ force: true })
      cy.get(`.ant-tabs [aria-label="node-index"]`).click()
      cy.get('.ant-tabs-tabpane-active form').setFormFieldValue({
        label: 'Container for component children',
        type: FIELD_TYPE.SELECT,
        value: COMPONENT_CHILD_SPACE,
      })
    })

    it('should be able to create an instance of the component', () => {
      cy.visit(
        `/apps/cypress/${slugify(appName)}/pages/${slugify(
          PAGE_NAME,
        )}/builder?primarySidebarKey=explorer`,
      )

      cy.getCuiTreeItemByPrimaryTitle('Body').click({ force: true })

      cy.getCuiSidebar('Explorer').getToolbarItem('Add Element').click()

      cy.findByTestId('create-element-form').setFormFieldValue({
        label: 'Render Type',
        type: FIELD_TYPE.SELECT,
        value: 'Component',
      })
      cy.findByTestId('create-element-form').setFormFieldValue({
        label: 'Component',
        type: FIELD_TYPE.SELECT,
        value: COMPONENT_NAME,
      })

      cy.findByTestId('create-element-form').setFormFieldValue({
        label: 'Name',
        type: FIELD_TYPE.INPUT,
        value: COMPONENT_INSTANCE_NAME,
      })

      cy.findByTestId('create-element-form')
        .getButton({ label: 'Create Element' })
        .click()

      cy.findByTestId('create-element-form').should('not.exist', {
        timeout: 10000,
      })
    })

    it('should be able to set props on an instance of the component', () => {
      cy.getCuiTreeItemByPrimaryTitle(COMPONENT_INSTANCE_NAME).click({
        force: true,
      })
      cy.get(`.ant-tabs [aria-label="setting"]`).click()
      cy.getSpinner().should('not.exist')
      cy.get('.ant-tabs-tabpane-active form').setFormFieldValue({
        label: 'Component_prop',
        type: FIELD_TYPE.CODE_MIRROR,
        value: COMPONENT_PROP_VALUE,
      })
    })

    it('should be able to add children to component instance', () => {
      cy.getCuiSidebar('Explorer').getToolbarItem('Add Element').click()

      cy.findByTestId('create-element-form').setFormFieldValue({
        label: 'Render Type',
        type: FIELD_TYPE.SELECT,
        value: 'Atom',
      })

      cy.findByTestId('create-element-form').setFormFieldValue({
        label: 'Atom',
        type: FIELD_TYPE.SELECT,
        value: IAtomType.AntDesignTypographyText,
      })

      cy.findByTestId('create-element-form').setFormFieldValue({
        label: 'Name',
        type: FIELD_TYPE.INPUT,
        value: COMPONENT_INSTANCE_TEXT,
      })

      cy.findByTestId('create-element-form')
        .getButton({ label: 'Create Element' })
        .click()

      cy.findByTestId('create-element-form').should('not.exist', {
        timeout: 10000,
      })

      cy.getCuiTreeItemByPrimaryTitle(COMPONENT_INSTANCE_TEXT).click({
        force: true,
      })
      cy.get(`.ant-tabs [aria-label="setting"]`).click()
      cy.get('.ant-tabs-tabpane-active form .ql-editor').type(
        COMPONENT_INSTANCE_TEXT,
      )

      // cy.get('#render-root')
      //   .findByText(`text ${COMPONENT_PROP_VALUE}`)
      //   .should('exist')
      cy.get('#render-root').findByText(COMPONENT_INSTANCE_TEXT).should('exist')
    })
  })
})
