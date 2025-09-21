import last from '../../src/code-basics/type-narrowing'

test('last', () => {
  expect(last('John')).toBe('n')
  expect(last('')).toBe('')
  expect(last(1)).toBe(1)
  expect(last(134)).toBe(4)
})

describe('last', () => {
  test('should return the last character of a string', () => {
    expect(last('hello')).toBe('o')
    expect(last('code')).toBe('e')
  })

  test('should return the last digit of a number', () => {
    expect(last(123)).toBe(3)
    expect(last(4567)).toBe(7)
  })

  test('should return the input value if it is a single character', () => {
    expect(last('a')).toBe('a')
    expect(last(9)).toBe(9)
  })
})
