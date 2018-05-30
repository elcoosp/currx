import { prop } from './../src/prop'
it('should return true if the property equal the value on the last argument object', () => {
  expect(prop('id').eq(3)({ id: 3 })).toBe(true)
})

it('should return false if the property is not equal the value on the last argument object', () => {
  expect(prop('id').eq(2)({ id: 3 })).toBe(false)
})
