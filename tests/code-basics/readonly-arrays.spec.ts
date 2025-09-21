import reverse from '../../src/code-basics/readonly-arrays'

test('reverse', () => {
  expect(reverse([])).toEqual([])
  expect(reverse([ 1, 2 ])).toEqual([ 2, 1 ])
  expect(reverse([ 8, 3, 9 ])).toEqual([ 9, 3, 8 ])
})
