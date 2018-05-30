import { before } from './../src/before'

it('should return only the characters before index 3', () => {
  expect(before(3, 'abcdef')).toBe('abc')
})

it('should return only the elements before index 3', () => {
  expect(before(3, ['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c'])
})
