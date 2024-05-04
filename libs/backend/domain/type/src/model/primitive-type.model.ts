import type {
  IAuth0Owner,
  IPrimitiveTypeDTO,
  IPrimitiveTypeKind,
} from '@codelab/shared/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { BaseType } from './base-type.model'

export class PrimitiveType extends BaseType implements IPrimitiveTypeDTO {
  declare id: string

  declare name: string

  declare kind: ITypeKind.PrimitiveType

  __typename: `${ITypeKind.PrimitiveType}` = ITypeKind.PrimitiveType

  declare owner: IAuth0Owner

  primitiveKind: IPrimitiveTypeKind

  constructor({ id, name, owner, primitiveKind }: IPrimitiveTypeDTO) {
    super({
      id,
      kind: ITypeKind.PrimitiveType,
      name,
      owner,
    })

    this.primitiveKind = primitiveKind
  }
}
