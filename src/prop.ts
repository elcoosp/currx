import { ObjToLookUp } from './types'

export interface PropObject {
  eq: (data: any) => (o: ObjToLookUp) => boolean
}

export const prop = (prop: string): PropObject => ({
  eq: data => o => o[prop] === data
})
