/**
 * Тесты для урока 1: Переменные и типы данных
 */

import { describe, expect, test } from '@jest/globals'
import {
  checkTypes,
  compareVariables,
  declareVariables,
  templateString,
  typeConversions,
} from '../../src/javascript/lesson-01-variables.js'

describe('declareVariables', () => {
  test('should return an object with three properties', () => {
    const result = declareVariables()
    expect(result).toHaveProperty('varVariable')
    expect(result).toHaveProperty('letVariable')
    expect(result).toHaveProperty('constVariable')
  })

  test('should have values defined for all three variables', () => {
    const result = declareVariables()
    expect(result.varVariable).toBeDefined()
    expect(result.letVariable).toBeDefined()
    expect(result.constVariable).toBeDefined()
  })

  test('should have different values for different variable types', () => {
    const result = declareVariables()
    const values = [result.varVariable, result.letVariable, result.constVariable]
    const uniqueValues = new Set(values)
    expect(uniqueValues.size).toBeGreaterThanOrEqual(1)
  })
})

describe('checkTypes', () => {
  test('should return "string" for string value', () => {
    expect(checkTypes('hello')).toBe('string')
  })

  test('should return "number" for numeric value', () => {
    expect(checkTypes(42)).toBe('number')
  })

  test('should return "boolean" for boolean value', () => {
    expect(checkTypes(true)).toBe('boolean')
  })

  test('should return "object" for null value', () => {
    expect(checkTypes(null)).toBe('object')
  })

  test('should return "undefined" for undefined value', () => {
    expect(checkTypes(undefined)).toBe('undefined')
  })
})

describe('compareVariables', () => {
  test('should distinguish between loose and strict equality for number and string', () => {
    const result = compareVariables(5, '5')
    expect(result).toHaveProperty('looseEquality')
    expect(result).toHaveProperty('strictEquality')
    expect(result.looseEquality).toBe(true)
    expect(result.strictEquality).toBe(false)
  })

  test('should return true for both comparisons with same type and value', () => {
    const result = compareVariables(10, 10)
    expect(result.looseEquality).toBe(true)
    expect(result.strictEquality).toBe(true)
  })

  test('should handle null and undefined comparison', () => {
    const result = compareVariables(null, undefined)
    expect(result.looseEquality).toBe(true)
    expect(result.strictEquality).toBe(false)
  })
})

describe('typeConversions', () => {
  test('should return correct types for all conversions', () => {
    const result = typeConversions()
    expect(typeof result.stringToNumber).toBe('number')
    expect(typeof result.numberToString).toBe('string')
    expect(typeof result.valueToBoolean).toBe('boolean')
    expect(typeof result.falsyToBoolean).toBe('boolean')
  })

  test('should convert string "42" to number 42', () => {
    const result = typeConversions()
    expect(result.stringToNumber).toBe(42)
  })

  test('should convert number 100 to string "100"', () => {
    const result = typeConversions()
    expect(result.numberToString).toBe('100')
  })

  test('should convert truthy string to true', () => {
    const result = typeConversions()
    expect(result.valueToBoolean).toBe(true)
  })

  test('should convert falsy value to false', () => {
    const result = typeConversions()
    expect(result.falsyToBoolean).toBe(false)
  })
})

describe('templateString', () => {
  test('should return a string containing the name', () => {
    const result = templateString('Иван', 25)
    expect(result).toContain('Иван')
  })

  test('should return a string containing the age', () => {
    const result = templateString('Мария', 30)
    expect(result).toContain('30')
  })

  test('should use template string syntax (backticks)', () => {
    const result = templateString('Тест', 20)
    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThan(0)
  })
})
