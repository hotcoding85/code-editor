import { RendererType } from '@codelab/frontend/abstract/core'
import { useAsync } from '@react-hookz/web'
import { useStore } from '../providers'
import { useCurrentApp } from '../routerHooks'

/**
 * Fetch and load the remaining app pages (that currently were not loaded from server)
 */
export const useRemainingPages = () => {
  const { appService, renderService } = useStore()
  const { app } = useCurrentApp()

  return useAsync(async () => {
    if (!app?.pages) {
      return
    }

    const notAlreadyLoadedPages = app.pages
      .map((page) => page.current.id)
      .map((id) => ({ NOT: { id } }))

    await appService.getAppPages(app.id, {
      AND: notAlreadyLoadedPages,
    })

    app.pages.forEach((pageRef) => {
      const page = pageRef.current
      const rendererExists = renderService.renderers.has(page.id)

      if (!rendererExists) {
        renderService.addRenderer({
          elementTree: page,
          id: page.id,
          providerTree: app.providerPage,
          rendererType: RendererType.PageBuilder,
        })
      }
    })
  })
}
