import type { IComponentService } from '@codelab/frontend/abstract/core'
import { detach, rootRef } from 'mobx-keystone'

export const componentServiceRef = rootRef<IComponentService>(
  '@codelab/ComponentServiceRef',
  {
    onResolvedValueChange: (ref, newComponentService, oldComponentService) => {
      if (newComponentService && !oldComponentService) {
        detach(ref)
      }
    },
  },
)
