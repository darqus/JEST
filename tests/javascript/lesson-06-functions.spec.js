/**
 * Тесты для урока 6: Функции (объявление, выражения, стрелочные функции, параметры)
 */

import { describe, expect, test } from '@jest/globals'
import {
  createArrowFunction,
  createFunctionDeclaration,
  createFunctionExpression,
  createMultiplier,
  useDefaultParameters,
  useRestParameters,
} from '../../src/javascript/lesson-06-functions.js'

describe('createFunctionDeclaration', () => {
  test('should return a function', () => {
    const greet = createFunctionDeclaration('World')

    expect(typeof greet).toBe('function')
  })

  test('should return correct greeting when called', () => {
    const greet = createFunctionDeclaration('Alice')

    expect(greet()).toBe('Hello, Alice!')
  })

  test('should work with different names', () => {
    const greetJohn = createFunctionDeclaration('John')
    const greetJane = createFunctionDeclaration('Jane')

    expect(greetJohn()).toBe('Hello, John!')
    expect(greetJane()).toBe('Hello, Jane!')
  })

  test('should handle empty string', () => {
    const greet = createFunctionDeclaration('')

    expect(greet()).toBe('Hello, !')
  })
})

describe('createFunctionExpression', () => {
  test('should return correct sum for positive numbers', () => {
    expect(createFunctionExpression(2, 3)).toBe(5)
    expect(createFunctionExpression(10, 20)).toBe(30)
  })

  test('should return correct sum for negative numbers', () => {
    expect(createFunctionExpression(-5, -3)).toBe(-8)
    expect(createFunctionExpression(-10, 5)).toBe(-5)
  })

  test('should return correct sum with zero', () => {
    expect(createFunctionExpression(0, 5)).toBe(5)
    expect(createFunctionExpression(0, 0)).toBe(0)
  })

  test('should handle decimal numbers', () => {
    expect(createFunctionExpression(1.5, 2.5)).toBe(4)
  })
})

describe('createArrowFunction', () => {
  test('should return correct power for positive numbers', () => {
    expect(createArrowFunction(2, 3)).toBe(8)
    expect(createArrowFunction(5, 2)).toBe(25)
  })

  test('should return 1 for exponent 0', () => {
    expect(createArrowFunction(5, 0)).toBe(1)
    expect(createArrowFunction(100, 0)).toBe(1)
  })

  test('should handle negative exponents', () => {
    expect(createArrowFunction(2, -1)).toBe(0.5)
    expect(createArrowFunction(10, -2)).toBe(0.01)
  })

  test('should handle base 0', () => {
    expect(createArrowFunction(0, 5)).toBe(0)
    expect(createArrowFunction(0, 0)).toBe(1)
  })

  test('should handle exponent 1', () => {
    expect(createArrowFunction(42, 1)).toBe(42)
  })
})

describe('useDefaultParameters', () => {
  test('should use default greeting when not provided', () => {
    expect(useDefaultParameters('World')).toBe('Hello, World!')
  })

  test('should use custom greeting when provided', () => {
    expect(useDefaultParameters('World', 'Hi')).toBe('Hi, World!')
    expect(useDefaultParameters('Alice', 'Welcome')).toBe('Welcome, Alice!')
  })

  test('should work with empty string as greeting', () => {
    expect(useDefaultParameters('World', '')).toBe(', World!')
  })

  test('should work with empty name', () => {
    expect(useDefaultParameters('')).toBe('Hello, !')
  })

  test('should handle special characters in greeting', () => {
    expect(useDefaultParameters('User', '🎉 Hello')).toBe('🎉 Hello, User!')
  })
})

describe('useRestParameters', () => {
  test('should return correct structure with multiple rest arguments', () => {
    const result = useRestParameters('first', 'second', 'third', 'fourth')

    expect(result).toEqual({
      first: 'first',
      rest: ['second', 'third', 'fourth'],
      count: 3,
    })
  })

  test('should return empty rest array when only first argument', () => {
    const result = useRestParameters('only')

    expect(result).toEqual({
      first: 'only',
      rest: [],
      count: 0,
    })
  })

  test('should handle two arguments', () => {
    const result = useRestParameters('a', 'b')

    expect(result).toEqual({
      first: 'a',
      rest: ['b'],
      count: 1,
    })
  })

  test('should handle numbers as arguments', () => {
    const result = useRestParameters(1, 2, 3)

    expect(result).toEqual({
      first: 1,
      rest: [2, 3],
      count: 2,
    })
  })

  test('should handle mixed types', () => {
    const result = useRestParameters('start', 42, true, null)

    expect(result).toEqual({
      first: 'start',
      rest: [42, true, null],
      count: 3,
    })
  })
})

describe('createMultiplier', () => {
  test('should return a function', () => {
    const multiply = createMultiplier(2)

    expect(typeof multiply).toBe('function')
  })

  test('should multiply by the given factor', () => {
    const double = createMultiplier(2)
    const triple = createMultiplier(3)

    expect(double(5)).toBe(10)
    expect(triple(5)).toBe(15)
  })

  test('should work with different numbers', () => {
    const multiplyBy10 = createMultiplier(10)

    expect(multiplyBy10(3)).toBe(30)
    expect(multiplyBy10(0)).toBe(0)
    expect(multiplyBy10(-5)).toBe(-50)
  })

  test('should handle factor of 0', () => {
    const multiplyBy0 = createMultiplier(0)

    expect(multiplyBy0(100)).toBe(0)
    expect(multiplyBy0(-50)).toBe(-0)
  })

  test('should handle negative factor', () => {
    const multiplyByNeg2 = createMultiplier(-2)

    expect(multiplyByNeg2(5)).toBe(-10)
    expect(multiplyByNeg2(-5)).toBe(10)
  })

  test('should handle decimal factor', () => {
    const multiplyByHalf = createMultiplier(0.5)

    expect(multiplyByHalf(10)).toBe(5)
  })

  test('should create independent multipliers', () => {
    const double = createMultiplier(2)
    const triple = createMultiplier(3)

    expect(double(10)).toBe(20)
    expect(triple(10)).toBe(30)
    // Ensure they don't interfere with each other
    expect(double(10)).toBe(20)
  })
})
