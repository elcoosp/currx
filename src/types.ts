export type OneArityFunc = (data: any) => any
export type ArrOrStr = any[] | string
export interface ObjToLookUp {
  [x: string]: any
}
export interface CheckingFunc {
  (data: any): boolean
}
