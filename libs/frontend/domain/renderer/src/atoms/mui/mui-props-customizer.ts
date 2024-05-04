import { ROOT_RENDER_CONTAINER_ID } from '@codelab/frontend/abstract/core'
import { IAtomType } from '@codelab/shared/abstract/core'
import type { AtomCustomizer, AtomCustomizerFn } from '../types'

const MuiDisablePortalFn: AtomCustomizerFn = ({ node, props }) => ({
  props: {
    ...props,
    // disableEnforceFocus: true,
    container: () => document.getElementById(ROOT_RENDER_CONTAINER_ID),
  },
})

export const muiPropsCustomizer: AtomCustomizer = {
  [IAtomType.MuiDrawer]: MuiDisablePortalFn,
  [IAtomType.MuiModal]: MuiDisablePortalFn,
}
