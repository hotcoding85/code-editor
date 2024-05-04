import { Role } from '@codelab/backend/abstract/codegen'
import type {
  Auth0SessionUser,
  IRole,
  IUserDTO,
} from '@codelab/shared/abstract/core'
import { JWT_CLAIMS } from '@codelab/shared/abstract/core'
import { v4 } from 'uuid'

export class User implements IUserDTO {
  id: string

  auth0Id: string

  email: string

  username: string

  roles: Array<IRole>

  constructor({ auth0Id, email, id, roles = [], username }: IUserDTO) {
    this.id = id
    this.auth0Id = auth0Id
    this.email = email
    this.roles = roles
    this.username = username
  }

  static fromSession({ email, nickname, sub, ...session }: Auth0SessionUser) {
    const auth0Id = sub
    const roles = session[JWT_CLAIMS].roles

    return new User({
      auth0Id,
      email,
      id: v4(),
      roles: [Role.Admin],
      username: nickname,
    })
  }
}

export type IUserModel = typeof User
