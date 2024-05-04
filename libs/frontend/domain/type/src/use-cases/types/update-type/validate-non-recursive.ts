import type { IUpdateTypeData } from '@codelab/frontend/abstract/core'
import { typeApi } from '../../../store'

const getInnerTypeIds = (submitData: IUpdateTypeData) => [
  ...(submitData.unionTypeIds ?? []),
]

// Check if the updated type is not a descendant of any of the inner types
// because this would cause a circular dependency between them and
export const validateNonRecursive = async (
  updateId: string | undefined,
  submitData: IUpdateTypeData,
) => {
  if (!updateId) {
    throw new Error('Missing type id')
  }

  const innerTypes = getInnerTypeIds(submitData)

  if (innerTypes.length > 0) {
    const results = await Promise.all(
      innerTypes.map((innerTypeId) =>
        typeApi.IsTypeDescendantOf({
          descendantTypeId: updateId,
          parentTypeId: innerTypeId,
        }),
      ),
    )

    if (results.some((result) => Boolean(result.isTypeDescendantOf))) {
      throw new Error(
        'Cannot update type because it will cause a circular dependency',
      )
    }
  }
}
