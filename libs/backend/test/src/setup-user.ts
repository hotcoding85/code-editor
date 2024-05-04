/// <reference types='jest'/>

import type { IAdminService } from '@codelab/backend/domain/admin'
import type { IUserModel, IUserRepository } from '@codelab/backend/domain/user'
import { IRole } from '@codelab/shared/abstract/core'
import type { Driver } from 'neo4j-driver'
import { v4 } from 'uuid'

interface SetupUserProps {
  AdminService: IAdminService
  User: IUserModel
  UserRepository: IUserRepository
  driver: Driver
}

export const resetUserAndDb = async ({
  AdminService,
  driver,
  User,
  UserRepository,
}: SetupUserProps) => {
  const userRepository = new UserRepository()

  const user = new User({
    auth0Id: v4(),
    email: 'admin@codelab.app',
    id: v4(),
    roles: [IRole.Admin],
    username: 'Codelab',
  })

  await new AdminService(driver).reset()

  await userRepository.save(user)

  const savedUser = await userRepository.findOne({ email: user.email })

  expect(savedUser?.username).toEqual('Codelab')

  return user
}
