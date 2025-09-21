import { jest, describe, it, expect } from '@jest/globals'
import { Memo, memoize, } from '../../src/helpers/memoize'

describe('memoize', () => {
  it('should return the same result for the same arguments', () => {
    const add = (a: number, b: number) => a + b
    const memoizedAdd = memoize(add)

    const result1 = memoizedAdd(2, 3)
    const result2 = memoizedAdd(2, 3)

    expect(result1).toBe(result2)
  })

  it('should cache results for different arguments', () => {
    const multiply = (a: number, b: number) => a * b
    const memoizedMultiply = memoize(multiply)

    const result1 = memoizedMultiply(2, 3)
    const result2 = memoizedMultiply(4, 5)

    expect(result1).not.toBe(result2)
  })
})

describe('Memo', () => {
  it('should memoize function calls', () => {
    const fn = jest.fn((x: number, y: number) => x + y)
    const newMemo = new Memo(fn)

    expect(newMemo.memoized(2, 3)).toBe(5)
    expect(fn).toHaveBeenCalledWith(2, 3) // original function should be called

    expect(newMemo.memoized(2, 3)).toBe(5)
    expect(fn).toHaveBeenCalledTimes(1) // original function should not be called again

    expect(newMemo.memoized(4, 5)).toBe(9)
    expect(fn).toHaveBeenCalledWith(4, 5) // original function should be called with different arguments

    expect(newMemo.memoized(4, 5)).toBe(9)
    expect(fn).toHaveBeenCalledTimes(2) // original function should not be called again
  })
})