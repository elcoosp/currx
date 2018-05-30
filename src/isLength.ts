/**
 *
 * @param length The length to check
 * @param arr The arraychecked
 * @returns True if length to check is equal to arr length
 */
export const isLength = (length: number) => (arr: any[]) =>
  arr.length === length
