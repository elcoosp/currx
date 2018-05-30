import { mapKey } from './../src/mapKey'
it('should map the key provided with the function', () => {
  expect(mapKey(x => x * 2, 'a', { a: 2, b: 3 })).toEqual({ a: 4, b: 3 })
})
