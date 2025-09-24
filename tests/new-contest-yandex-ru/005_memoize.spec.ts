import { jest } from '@jest/globals'

import { memoize } from '../../src/new-contest-yandex-ru/005_memoize'

describe('memoize', () => {
  test('caches by arguments (primitives)', () => {
    const fn = jest.fn((a: number, b: number) => a + b)
    const memoized = memoize(fn)

    expect(memoized(1, 2)).toBe(3)
    expect(memoized(1, 2)).toBe(3)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('treats objects with same fields/values as equal', () => {
    const fn = jest.fn((o: { a: number; b: number }) => o.a + o.b)
    const memoized = memoize(fn)

    const a1 = { a: 1, b: 2 }
    const a2 = { a: 1, b: 2 } // different reference, same shape/values

    expect(memoized(a1)).toBe(3)
    expect(memoized(a2)).toBe(3)
    // JSON.stringify produces identical keys for a1 and a2 given same field order
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('array order matters', () => {
    const fn = jest.fn((arr: number[]) => arr.reduce((s, x) => s + x, 0))
    const memoized = memoize(fn)

    expect(memoized([1, 2])).toBe(3)
    expect(memoized([2, 1])).toBe(3)
    // different order => different cache key
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
