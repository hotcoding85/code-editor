import { IAtomType } from '@codelab/shared/abstract/core'
import type { AtomCustomizer, AtomCustomizerFn } from '../types'

const reactFragmentFn: AtomCustomizerFn = ({ props }) => {
  const { children, key } = props

  // Do not pass in any props for fragments, except key and children, because it creates an error
  return { props: { children, key } }
}

export const reactPropsCustomizer: AtomCustomizer = {
  [IAtomType.ReactFragment]: reactFragmentFn,
}
