import type { IEntity, Nullish } from '@codelab/shared/abstract/types'
import keyBy from 'lodash/keyBy'

export const entityToIdAndEntity = <T extends IEntity>(
  entity: T,
): [string, T] => [entity.id, entity]

export const entityMapById = <T extends IEntity>(entities: Nullish<Array<T>>) =>
  new Map(entities?.length ? entities.map(entityToIdAndEntity) : [])

export const entityRecordById = <T extends IEntity>(
  entities: Nullish<Array<T>>,
): Record<string, T> => (entities?.length ? keyBy(entities, 'id') : {})
