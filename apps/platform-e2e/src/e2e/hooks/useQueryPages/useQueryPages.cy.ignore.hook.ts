import { beforeHook, selectHook } from './utils'

describe('useQueryPagesHook', () => {
  const pageName = 'test'
  const dummyPageName = 'test2'
  const childElementName = 'root'

  before(() => {
    beforeHook({
      childElementName,
      dummyPageName,
      pageName,
      sourceKey: 'res.data.pages[0].name',
    })
  })

  it('run correctly', () => {
    selectHook({ childElementName, hook: /HookQueryPages/ })

    cy.getOpenedModal().findByText('Add hook').click()
    // // Assert the mapper value
    cy.get('#render-root').findByText(pageName).should('exist')
  })
})
