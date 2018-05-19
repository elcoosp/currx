const { after } = require('../src/after.ts')

it('should pipe functions passed at the first argument as an array againt the initial accumulator', () => {
  expect(after(3, 'abcdef')).toBe('ef')
})

it('should return only the elements before index 3', () => {
  expect(after(3, ['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(['e', 'f'])
})
