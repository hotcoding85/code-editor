import type {
  ResourceFragment,
  ResourceOptions,
  ResourceWhere,
} from '@codelab/shared/abstract/codegen'
import type { IRepository } from '../../service'
import type { IResource } from './resource.model.interface'

export type IResourceRepository = IRepository<
  IResource,
  ResourceFragment,
  ResourceWhere,
  ResourceOptions
>
