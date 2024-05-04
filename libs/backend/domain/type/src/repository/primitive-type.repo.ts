import type {
  PrimitiveType,
  PrimitiveTypeWhere,
} from '@codelab/backend/abstract/codegen'
import {
  exportPrimitiveTypeSelectionSet,
  Repository,
} from '@codelab/backend/infra/adapter/neo4j'
import { AbstractRepository } from '@codelab/backend/infra/core'
import type { IPrimitiveTypeDTO } from '@codelab/shared/abstract/core'
import type { BaseTypeUniqueWhere } from '@codelab/shared/abstract/types'
import { connectAuth0Owner } from '@codelab/shared/domain/mapper'

export class PrimitiveTypeRepository extends AbstractRepository<
  IPrimitiveTypeDTO,
  PrimitiveType,
  PrimitiveTypeWhere
> {
  private PrimitiveType = Repository.instance.PrimitiveType

  async _find(where: PrimitiveTypeWhere) {
    return await (
      await this.PrimitiveType
    ).find({
      selectionSet: exportPrimitiveTypeSelectionSet,
      where,
    })
  }

  protected async _add(primitiveTypes: Array<IPrimitiveTypeDTO>) {
    return (
      await (
        await this.PrimitiveType
      ).create({
        input: primitiveTypes.map(({ __typename, owner, ...type }) => ({
          ...type,
          owner: connectAuth0Owner(owner),
        })),
        selectionSet: `{ primitiveTypes ${exportPrimitiveTypeSelectionSet} }`,
      })
    ).primitiveTypes
  }

  protected async _update(
    { __typename, id, name, owner, primitiveKind }: IPrimitiveTypeDTO,
    where: BaseTypeUniqueWhere,
  ) {
    return (
      await (
        await this.PrimitiveType
      ).update({
        selectionSet: `{ primitiveTypes ${exportPrimitiveTypeSelectionSet} }`,
        update: { name },
        where,
      })
    ).primitiveTypes[0]
  }
}
