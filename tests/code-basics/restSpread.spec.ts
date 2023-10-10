import max from '../../src/code-basics/restSpread'

describe('max', () => {
  it('should return the maximum number when given multiple numbers', () => {
    expect(max(1, 2, 3)).toEqual(3)
    expect(max(10, 5, 8, 2)).toEqual(10)
    expect(max(0, -1, 5, 3, 2)).toEqual(5)
  })

  it('should return the same number when only given one number', () => {
    expect(max(1)).toEqual(1)
    expect(max(10)).toEqual(10)
    expect(max(0)).toEqual(0)
  })
})
