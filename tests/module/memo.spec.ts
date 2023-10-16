import { memo, } from '../../src/helpers/memo'

describe('memo', () => {
  it('should return the same result for the same arguments', () => {
    const add = (a: number, b: number) => a + b
    const memoizedAdd = memo(add)

    const result1 = memoizedAdd(2, 3)
    const result2 = memoizedAdd(2, 3)

    expect(result1).toBe(result2)
  })

  it('should cache results for different arguments', () => {
    const multiply = (a: number, b: number) => a * b
    const memoizedMultiply = memo(multiply)

    const result1 = memoizedMultiply(2, 3)
    const result2 = memoizedMultiply(4, 5)

    expect(result1).not.toBe(result2)
  })
})
