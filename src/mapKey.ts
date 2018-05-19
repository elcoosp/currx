import { OneArityFunc } from './types'
import { curry, Curry2 } from '@typed/curry'
/**
 *
 * @param fn A function receiving the value at the key provided and mapping it
 * @param key The key on the object to map
 * @param obj An object to map
 *
 * @returns The same object with the value from the key mapped
 *
 */
export const mapKey = curry((fn: OneArityFunc, key: string, obj: Object) => ({
  ...obj,
  [key]: fn(obj[key])
}))
