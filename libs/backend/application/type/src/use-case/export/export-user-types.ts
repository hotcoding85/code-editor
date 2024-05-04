import type { InterfaceType } from '@codelab/backend/abstract/codegen'
import type { ITypesExport } from '@codelab/backend/abstract/core'
import {
  exportInterfaceTypeSelectionSet,
  getDriver,
  getTypeDescendantsOGM,
  Repository,
} from '@codelab/backend/infra/adapter/neo4j'
import { ITypeKind } from '@codelab/shared/abstract/core'

interface Descendant {
  id: string
  kind: ITypeKind
}

export const exportUserTypes = async (): Promise<ITypesExport> => {
  /**
   * Export types
   */

  /**
   * Export all types
   *
   * Go through each interface, then grab all descendant ids of it
   */
  const InterfaceType = await Repository.instance.InterfaceType

  const interfaceTypes = await InterfaceType.find({
    selectionSet: exportInterfaceTypeSelectionSet,
    where: {
      apiOfAtomsAggregate: {
        count: 0,
      },
    },
  })

  /**
   * Here we create the interface dependency tree order
   *
   * Further to the front are closer to the leaf.
   */
  let dependentTypes: Array<Descendant> = []

  for (const interfaceType of interfaceTypes) {
    const driver = getDriver()
    const session = driver.session()

    const results = await session.run(getTypeDescendantsOGM, {
      id: interfaceType.id,
    })

    // We pass in a single id, so only get 1 record, for each record, we want the first column
    const descendants = [
      ...(results.records[0]?.values() ?? []),
    ][0] as Array<Descendant>

    // We only get interface type descendants, since other types are pushed in front of interfaces
    const interfaceDescendants = descendants.filter(
      (type) => type.kind === ITypeKind.InterfaceType,
    )

    dependentTypes = [...interfaceDescendants, ...dependentTypes]
  }

  // Here we get all the types that needs to be added
  const orderedInterfaceTypes = dependentTypes
    .map((type) => {
      return interfaceTypes.find(
        (interfaceType) => interfaceType.id === type.id,
      )
    })
    .filter((type): type is InterfaceType => Boolean(type))

  // TODO: Need to fix type here
  return {
    fields: [],
    types: [...orderedInterfaceTypes],
  } as ITypesExport
}
