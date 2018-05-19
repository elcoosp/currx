import { OneArityFunc } from './types'
import { curry, Curry2 } from '@typed/curry'

/**
 *
 * @param fns One or more functions to apply succesively (left to right)
 * @param initAcc Initial accumulator passed to the first function in the piping
 * @returns The acumulated value
 */
export const pipeArr = curry((fns: OneArityFunc[], initAcc: any): any =>
  fns.reduce((acc, f) => f(acc), initAcc)
)

/**
 *
 * @param fns One or more functions as parameters
 * @returns A pipeArr function preloaded the functions provided
 */
export const pipe = (...fns: OneArityFunc[]): OneArityFunc => pipeArr(fns)
