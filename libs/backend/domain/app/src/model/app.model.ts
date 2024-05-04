import type { IAppDTO, IAuth0Owner } from '@codelab/shared/abstract/core'
import type { IEntity } from '@codelab/shared/abstract/types'

export class App implements IAppDTO {
  domains?: Array<IEntity> | undefined

  id: string

  name: string

  pages?: Array<IEntity> | undefined

  owner: IAuth0Owner

  constructor({ domains, id, name, owner, pages }: IAppDTO) {
    this.id = id
    this.name = name
    this.owner = owner
    this.domains = domains
    this.pages = pages
  }
}
