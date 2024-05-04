export type DeepNonNullable<T> = {
  [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepNonNullable<T[P]>
    : NonNullable<T[P]>
}

export const isNotNull = <T extends Record<string, unknown>>(
  input: T | null,
): input is T => {
  return input !== null
}
