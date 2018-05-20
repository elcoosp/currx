import { OneArityFunc } from './types'
import { curry, Curry3 } from '@typed/curry'
import { ObjToLookUp } from './types'

/**
 *
 * @param fn A function receiving the value at the key provided and mapping it
 * @param key The key which value will be mapped
 * @param obj An object to map
 *
 * @returns The same object with the value from the key mapped
 *
 */
export const mapKey = curry(
  (fn: OneArityFunc, key: string, obj: ObjToLookUp) => ({
    ...obj,
    [key]: fn(obj[key])
  })
)
