export interface PropObject {
  eq: (data: any) => (o: ObjToLookUp) => boolean
}
export interface ObjToLookUp {
  [x: string]: any
}
export const prop = (prop: string): PropObject => ({
  eq: data => o => o[prop] === data
})
