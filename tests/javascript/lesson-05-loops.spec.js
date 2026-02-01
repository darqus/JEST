/**
 * Тесты для урока 5: Циклы (for, while, do...while, for...of, for...in)
 */

import { describe, expect, test } from '@jest/globals'
import {
  countObjectKeysWithForIn,
  factorialWithWhile,
  findFirstPositiveWithDoWhile,
  generateMultiplicationTable,
  sumArrayWithForOf,
  sumWithFor,
} from '../../src/javascript/lesson-05-loops.js'

describe('sumWithFor', () => {
  test('should return correct sum for positive n', () => {
    expect(sumWithFor(1)).toBe(1)
    expect(sumWithFor(5)).toBe(15)
    expect(sumWithFor(10)).toBe(55)
  })

  test('should return 0 for n = 0', () => {
    expect(sumWithFor(0)).toBe(0)
  })

  test('should handle larger numbers', () => {
    expect(sumWithFor(100)).toBe(5050)
  })
})

describe('factorialWithWhile', () => {
  test('should return correct factorial for positive numbers', () => {
    expect(factorialWithWhile(1)).toBe(1)
    expect(factorialWithWhile(5)).toBe(120)
    expect(factorialWithWhile(6)).toBe(720)
  })

  test('should return 1 for 0', () => {
    expect(factorialWithWhile(0)).toBe(1)
  })

  test('should return 1 for 1', () => {
    expect(factorialWithWhile(1)).toBe(1)
  })

  test('should handle larger numbers', () => {
    expect(factorialWithWhile(10)).toBe(3628800)
  })
})

describe('findFirstPositiveWithDoWhile', () => {
  test('should find first positive number from the end', () => {
    expect(findFirstPositiveWithDoWhile([1, 2, 3, 4, 5])).toBe(5)
    expect(findFirstPositiveWithDoWhile([-1, -2, 3, -4, 5])).toBe(5)
    expect(findFirstPositiveWithDoWhile([1, -2, -3, -4, -5])).toBe(1)
  })

  test('should return null for empty array', () => {
    expect(findFirstPositiveWithDoWhile([])).toBeNull()
  })

  test('should return null when no positive numbers', () => {
    expect(findFirstPositiveWithDoWhile([-1, -2, -3])).toBeNull()
    expect(findFirstPositiveWithDoWhile([0, -5, -10])).toBeNull()
  })

  test('should handle single element array', () => {
    expect(findFirstPositiveWithDoWhile([5])).toBe(5)
    expect(findFirstPositiveWithDoWhile([-5])).toBeNull()
  })

  test('should handle array with zeros', () => {
    expect(findFirstPositiveWithDoWhile([0, 0, 1])).toBe(1)
    expect(findFirstPositiveWithDoWhile([0, 0, 0])).toBeNull()
  })
})

describe('sumArrayWithForOf', () => {
  test('should return correct sum of array elements', () => {
    expect(sumArrayWithForOf([1, 2, 3, 4, 5])).toBe(15)
    expect(sumArrayWithForOf([10, 20, 30])).toBe(60)
  })

  test('should return 0 for empty array', () => {
    expect(sumArrayWithForOf([])).toBe(0)
  })

  test('should handle single element array', () => {
    expect(sumArrayWithForOf([42])).toBe(42)
  })

  test('should handle negative numbers', () => {
    expect(sumArrayWithForOf([-1, -2, -3])).toBe(-6)
    expect(sumArrayWithForOf([-5, 10, -3])).toBe(2)
  })

  test('should handle zeros', () => {
    expect(sumArrayWithForOf([0, 0, 0])).toBe(0)
    expect(sumArrayWithForOf([0, 5, 0])).toBe(5)
  })
})

describe('countObjectKeysWithForIn', () => {
  test('should count own keys correctly', () => {
    expect(countObjectKeysWithForIn({ a: 1, b: 2, c: 3 })).toBe(3)
    expect(countObjectKeysWithForIn({ name: 'John', age: 30 })).toBe(2)
  })

  test('should return 0 for empty object', () => {
    expect(countObjectKeysWithForIn({})).toBe(0)
  })

  test('should ignore inherited properties', () => {
    const parent = { inherited: 'value' }
    const child = Object.create(parent)
    child.own = 'property'
    child.another = 'value'

    expect(countObjectKeysWithForIn(child)).toBe(2)
  })

  test('should handle nested objects', () => {
    expect(countObjectKeysWithForIn({ a: { b: 1 }, c: 2 })).toBe(2)
  })

  test('should handle various value types', () => {
    expect(countObjectKeysWithForIn({ a: null, b: undefined, c: 0, d: '' })).toBe(4)
  })
})

describe('generateMultiplicationTable', () => {
  test('should generate correct 3x3 table', () => {
    const expected = [
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]
    expect(generateMultiplicationTable(3)).toEqual(expected)
  })

  test('should generate correct 5x5 table', () => {
    const table = generateMultiplicationTable(5)
    expect(table).toHaveLength(5)
    expect(table[0]).toEqual([1, 2, 3, 4, 5])
    expect(table[4]).toEqual([5, 10, 15, 20, 25])
  })

  test('should generate correct 1x1 table', () => {
    expect(generateMultiplicationTable(1)).toEqual([[1]])
  })

  test('should generate correct 2x2 table', () => {
    const expected = [
      [1, 2],
      [2, 4],
    ]
    expect(generateMultiplicationTable(2)).toEqual(expected)
  })

  test('should handle larger tables', () => {
    const table = generateMultiplicationTable(10)
    expect(table).toHaveLength(10)
    expect(table[9][9]).toBe(100)
    expect(table[4][4]).toBe(25)
  })
})
