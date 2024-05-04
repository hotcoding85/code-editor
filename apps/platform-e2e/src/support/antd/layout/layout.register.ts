import type { CypressCommand } from '../../types'
import { getSider } from './layout.command'

export interface AntLayoutCommands {
  getSider: typeof getSider
}

export const antLayoutCommands: Array<CypressCommand> = [
  {
    fn: getSider,
    name: 'getSider',
  },
]
