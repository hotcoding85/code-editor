export const whereNodeId = (id: string) => whereNode('id', id)

export const whereNodeIds = (ids: Array<string>) =>
  ids.map((id) => whereNodeId(id))

/**
 * Trying this version out before combining, so we don't break others
 */
export const whereNullableNodeId = (id?: string | null) =>
  id ? whereNodeId(id) : null

export const whereNullableNodeIds = (ids?: Array<string> | null) =>
  ids ? whereNodeIds(ids) : null

/**
 * Not sure if we should use `null` or `undefined`
 */
export const whereMaybeNodeId = (id?: string | null) =>
  id ? whereNodeId(id) : undefined

export const whereMaybeNodeIds = (ids?: Array<string> | null) =>
  ids ? whereNodeIds(ids) : undefined

/**
 * Where node
 */
export const whereNode = (key: string, value: string) => ({
  where: {
    node: {
      [key]: value,
    },
  },
})

export const whereMaybeNode = (key: string, value: string | null | undefined) =>
  value
    ? {
        where: {
          node: {
            [key]: value,
          },
        },
      }
    : undefined

/**
 * Used for disconnecting everything
 */
export const whereAll = () => ({ where: {} })

export const whereManyAll = () => [{ where: {} }]
