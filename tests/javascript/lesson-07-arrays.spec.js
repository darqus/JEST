/**
 * Тесты для урока 7: Массивы (создание, методы, итерация)
 */

import { describe, expect, test } from '@jest/globals'
import {
  checkArrayMethods,
  createArrayMethods,
  findInArray,
  flattenAndJoinArrays,
  sortAndReverseArray,
  transformArray,
} from '../../src/javascript/lesson-07-arrays.js'

describe('createArrayMethods', () => {
  test('should return correct results for all array operations', () => {
    const result = createArrayMethods()

    expect(result.pushResult).toEqual([1, 2, 3, 4])
    expect(result.popResult).toBe(4)
    expect(result.shiftResult).toBe(1)
    expect(result.unshiftResult).toEqual([0, 2, 3])
    expect(result.spliceResult).toEqual([0, 5, 6, 3])
  })

  test('should return object with all required properties', () => {
    const result = createArrayMethods()

    expect(result).toHaveProperty('pushResult')
    expect(result).toHaveProperty('popResult')
    expect(result).toHaveProperty('shiftResult')
    expect(result).toHaveProperty('unshiftResult')
    expect(result).toHaveProperty('spliceResult')
  })
})

describe('transformArray', () => {
  test('should double all numbers with map', () => {
    const result = transformArray([1, 2, 3, 4])

    expect(result.doubled).toEqual([2, 4, 6, 8])
  })

  test('should filter even numbers', () => {
    const result = transformArray([1, 2, 3, 4, 5, 6])

    expect(result.evens).toEqual([2, 4, 6])
  })

  test('should calculate sum with reduce', () => {
    const result = transformArray([1, 2, 3, 4, 5])

    expect(result.sum).toBe(15)
  })

  test('should return empty doubled array for empty input', () => {
    const result = transformArray([])

    expect(result.doubled).toEqual([])
    expect(result.evens).toEqual([])
    expect(result.sum).toBe(0)
  })

  test('should handle negative numbers', () => {
    const result = transformArray([-2, -1, 0, 1, 2])

    expect(result.doubled).toEqual([-4, -2, 0, 2, 4])
    expect(result.evens).toEqual([-2, 0, 2])
    expect(result.sum).toBe(0)
  })

  test('should handle single element array', () => {
    const result = transformArray([5])

    expect(result.doubled).toEqual([10])
    expect(result.evens).toEqual([])
    expect(result.sum).toBe(5)
  })
})

describe('findInArray', () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]

  test('should find user by id', () => {
    const result = findInArray(users, 2)

    expect(result.user).toEqual({ id: 2, name: 'Bob' })
    expect(result.index).toBe(1)
  })

  test('should return first user', () => {
    const result = findInArray(users, 1)

    expect(result.user).toEqual({ id: 1, name: 'Alice' })
    expect(result.index).toBe(0)
  })

  test('should return last user', () => {
    const result = findInArray(users, 3)

    expect(result.user).toEqual({ id: 3, name: 'Charlie' })
    expect(result.index).toBe(2)
  })

  test('should return undefined and -1 for non-existent id', () => {
    const result = findInArray(users, 999)

    expect(result.user).toBeUndefined()
    expect(result.index).toBe(-1)
  })

  test('should handle empty array', () => {
    const result = findInArray([], 1)

    expect(result.user).toBeUndefined()
    expect(result.index).toBe(-1)
  })

  test('should find only first match', () => {
    const duplicateUsers = [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
      { id: 1, name: 'Third' },
    ]
    const result = findInArray(duplicateUsers, 1)

    expect(result.user).toEqual({ id: 1, name: 'First' })
    expect(result.index).toBe(0)
  })
})

describe('sortAndReverseArray', () => {
  test('should sort array in ascending order', () => {
    const result = sortAndReverseArray([3, 1, 4, 1, 5, 9, 2, 6])

    expect(result.ascending).toEqual([1, 1, 2, 3, 4, 5, 6, 9])
  })

  test('should sort array in descending order', () => {
    const result = sortAndReverseArray([3, 1, 4, 1, 5, 9, 2, 6])

    expect(result.descending).toEqual([9, 6, 5, 4, 3, 2, 1, 1])
  })

  test('should reverse array', () => {
    const result = sortAndReverseArray([1, 2, 3, 4, 5])

    expect(result.reversed).toEqual([5, 4, 3, 2, 1])
  })

  test('should not mutate original array', () => {
    const original = [3, 1, 4, 1, 5]
    sortAndReverseArray(original)

    expect(original).toEqual([3, 1, 4, 1, 5])
  })

  test('should handle empty array', () => {
    const result = sortAndReverseArray([])

    expect(result.ascending).toEqual([])
    expect(result.descending).toEqual([])
    expect(result.reversed).toEqual([])
  })

  test('should handle single element array', () => {
    const result = sortAndReverseArray([42])

    expect(result.ascending).toEqual([42])
    expect(result.descending).toEqual([42])
    expect(result.reversed).toEqual([42])
  })

  test('should handle array with negative numbers', () => {
    const result = sortAndReverseArray([-5, 3, -10, 0, 8])

    expect(result.ascending).toEqual([-10, -5, 0, 3, 8])
    expect(result.descending).toEqual([8, 3, 0, -5, -10])
    expect(result.reversed).toEqual([8, 0, -10, 3, -5])
  })
})

describe('flattenAndJoinArrays', () => {
  test('should flatten nested arrays and join with comma', () => {
    const result = flattenAndJoinArrays([1, [2, 3], 4, [5, 6]], ',')

    expect(result).toBe('1,2,3,4,5,6')
  })

  test('should join with custom separator', () => {
    const result = flattenAndJoinArrays([1, [2, 3], 4], '-')

    expect(result).toBe('1-2-3-4')
  })

  test('should join with space separator', () => {
    const result = flattenAndJoinArrays(['a', ['b', 'c']], ' ')

    expect(result).toBe('a b c')
  })

  test('should handle empty array', () => {
    const result = flattenAndJoinArrays([], ',')

    expect(result).toBe('')
  })

  test('should handle array without nesting', () => {
    const result = flattenAndJoinArrays([1, 2, 3], '|')

    expect(result).toBe('1|2|3')
  })

  test('should handle deeply nested arrays (flat only flattens one level)', () => {
    const result = flattenAndJoinArrays([1, [2, [3, 4]]], ',')

    expect(result).toBe('1,2,3,4')
  })

  test('should handle empty string separator', () => {
    const result = flattenAndJoinArrays([1, [2, 3]], '')

    expect(result).toBe('123')
  })
})

describe('checkArrayMethods', () => {
  test('should correctly check includes', () => {
    const result = checkArrayMethods([1, 2, 3, 4, 5])

    expect(result.hasFive).toBe(true)
  })

  test('should return false for includes when element not present', () => {
    const result = checkArrayMethods([1, 2, 3, 4])

    expect(result.hasFive).toBe(false)
  })

  test('should correctly check some for positive numbers', () => {
    const result = checkArrayMethods([-5, -3, 0, 2, -1])

    expect(result.hasPositive).toBe(true)
  })

  test('should return false for some when no positive numbers', () => {
    const result = checkArrayMethods([-5, -3, 0, -1])

    expect(result.hasPositive).toBe(false)
  })

  test('should correctly check every for all positive', () => {
    const result = checkArrayMethods([1, 2, 3, 4, 5])

    expect(result.allPositive).toBe(true)
  })

  test('should return false for every when not all positive', () => {
    const result = checkArrayMethods([1, 2, -3, 4, 5])

    expect(result.allPositive).toBe(false)
  })

  test('should handle empty array', () => {
    const result = checkArrayMethods([])

    expect(result.hasFive).toBe(false)
    expect(result.hasPositive).toBe(false)
    expect(result.allPositive).toBe(true) // every returns true for empty array
  })

  test('should handle array with zero', () => {
    const result = checkArrayMethods([0, 1, 2])

    expect(result.hasFive).toBe(false)
    expect(result.hasPositive).toBe(true)
    expect(result.allPositive).toBe(false) // 0 is not > 0
  })

  test('should handle all negative numbers', () => {
    const result = checkArrayMethods([-1, -2, -3])

    expect(result.hasFive).toBe(false)
    expect(result.hasPositive).toBe(false)
    expect(result.allPositive).toBe(false)
  })
})
