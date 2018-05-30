import { isLength } from './../src/isLength'
isLength
it('should return true if array length equal length (first arg)', () => {
  expect(isLength(3)([1, 2, 3])).toBe(true)
})
