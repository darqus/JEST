import last from '../../src/code-basics/type-narrowing'

test('last', () => {
  expect(last('John')).toBe('n')
  expect(last('')).toBe('')
  expect(last(1)).toBe(1)
  expect(last(134)).toBe(4)
})

describe('last', () => {
  it('should return the last character of a string', () => {
    expect(last('hello')).toEqual('o')
    expect(last('code')).toEqual('e')
  })

  it('should return the last digit of a number', () => {
    expect(last(123)).toEqual(3)
    expect(last(4567)).toEqual(7)
  })

  it('should return the input value if it is a single character', () => {
    expect(last('a')).toEqual('a')
    expect(last(9)).toEqual(9)
  })
})
