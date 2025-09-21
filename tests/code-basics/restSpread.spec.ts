import max from '../../src/code-basics/restSpread'

describe('max', () => {
  test('should return the maximum number when given multiple numbers', () => {
    expect(max(1, 2, 3)).toBe(3)
    expect(max(10, 5, 8, 2)).toBe(10)
    expect(max(0, -1, 5, 3, 2)).toBe(5)
  })

  test('should return the same number when only given one number', () => {
    expect(max(1)).toBe(1)
    expect(max(10)).toBe(10)
    expect(max(0)).toBe(0)
  })
})
