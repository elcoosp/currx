import { curry, Curry2 } from '@typed/curry'
import { ArrOrStr } from './types'

/**
 *
 * @param index Index before which to grab data (not included)
 * @param data An array or string to slice
 * @returns Sliced array or string
 */

export const before = curry((index: number, data: ArrOrStr): ArrOrStr =>
  data.slice(0, index)
)
