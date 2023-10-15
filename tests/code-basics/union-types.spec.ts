import lastIndex from '../../src/code-basics/union-types'

test('lastIndex', () => {
  const str = 'jestTest'

  expect(lastIndex(str, 'j')).toBe(0)
  expect(lastIndex(str, 't')).toBe(7)
  expect(lastIndex(str, 'e')).toBe(5)
  expect(lastIndex(str, 'p')).toBeNull()
})
