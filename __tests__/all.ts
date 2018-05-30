import { all } from './../src/all'
test('should return true if all functions return true', () => {
  expect(all(x => x < 3, x => x > 0)(2)).toBe(true)
})

test('should return false if one function return false', () => {
  expect(all(x => x < 3, x => x > 0)(95)).toBe(false)
})
