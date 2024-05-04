import { SortDirection } from '@codelab/backend/abstract/codegen'
import type { ITypesExport } from '@codelab/backend/abstract/core'
import {
  exportFieldSelectionSet,
  exportInterfaceTypeSelectionSet,
  Repository,
} from '@codelab/backend/infra/adapter/neo4j'
import { sortInterfaceTypesFields } from '../../mapper/sort'

/**
 * These are types created by the admin, mostly types related to an atom.
 *
 * We export api separately since those can be it's own file
 */
export const exportAtomApis = async (): Promise<ITypesExport> => {
  /**
   * Get all interfaces that are connected to atoms, here we don't do dependent types since Ant Design atoms don't have them (at least I haven't seen any)
   *
   * We will go through dependent types for user interfaces however
   */
  const InterfaceType = await Repository.instance.InterfaceType

  const interfaceTypes = await InterfaceType.find({
    options: {
      sort: [{ name: SortDirection.Asc }],
    },
    selectionSet: exportInterfaceTypeSelectionSet,
    // Where it is assigned to atom
    where: {
      apiOfAtomsAggregate: {
        count_GTE: 0,
      },
    },
  })

  /**
   * Get all fields related to interface type
   */
  const Field = await Repository.instance.Field

  const fields = await Field.find({
    options: {
      sort: [{ key: SortDirection.Asc }],
    },
    selectionSet: exportFieldSelectionSet,
    where: {
      api: {
        id_IN: interfaceTypes.map((api) => api.id),
      },
    },
  })

  /**
   * Here we create the interface dependency tree order
   *
   * Further to the front are closer to the leaf.
   */

  return { fields, types: sortInterfaceTypesFields(interfaceTypes) }
}
