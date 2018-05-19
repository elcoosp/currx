const { pipe, pipeArr } = require('../src/pipe.ts')

it('should pipe functions passed at the first argument as an array againt the initial accumulator', () => {
  expect(pipeArr([x => x.toUpperCase(), x => x.repeat(2)], 'abc')).toBe(
    'ABCABC'
  )
})

it('should pipe functions passed as rest againt the initial accumulator', () => {
  expect(pipe(x => x.toUpperCase(), x => x.repeat(2))('abc')).toBe('ABCABC')
})
