import { CheckingFunc } from './types'
/**
 * @param fns Checking functions to call with data (order matters)
 * @param data Some value passed to each CheckingFunc
 * @returns True if all CheckingFunc return true otherwise false when one CheckingFunc return false
 */

export const all = (...fns: CheckingFunc[]) => (data: any) =>
  fns.every(f => f(data))
