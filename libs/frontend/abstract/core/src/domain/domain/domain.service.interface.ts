import type {
  DomainOptions,
  DomainWhere,
} from '@codelab/shared/abstract/codegen'
import type { Maybe } from '@codelab/shared/abstract/types'
import type { ObjectMap, Ref } from 'mobx-keystone'
import type {
  ICRUDModalService,
  ICRUDService,
  IQueryService,
} from '../../service'
import type { ICreateDomainData } from './domain.dto.interface'
import type { IDomain } from './domain.model.interface'

export interface IDomainService
  extends ICRUDService<IDomain, ICreateDomainData, ICreateDomainData>,
    Omit<IQueryService<IDomain, DomainWhere, DomainOptions>, 'getOne'>,
    ICRUDModalService<Ref<IDomain>, { domain: Maybe<IDomain> }> {
  createModal: ICRUDModalService<
    Ref<IDomain>,
    { domain: Maybe<string> }
  >['createModal']
  domains: ObjectMap<IDomain>
  domainsList: Array<IDomain>
  getAll(where?: DomainWhere): Promise<Array<IDomain>>
}
