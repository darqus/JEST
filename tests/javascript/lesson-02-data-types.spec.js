/**
 * Тесты для урока 2: Типы данных и операторы typeof, instanceof
 */

import { describe, expect, test } from '@jest/globals'
import {
  checkType,
  compareTypes,
  convertType,
  getPrimitiveTypes,
  getTypeDetails,
  isReferenceType,
} from '../../src/javascript/lesson-02-data-types.js'

describe('getPrimitiveTypes', () => {
  test('should return an object with all primitive types', () => {
    const result = getPrimitiveTypes()

    expect(result).toHaveProperty('string')
    expect(result).toHaveProperty('number')
    expect(result).toHaveProperty('boolean')
    expect(result).toHaveProperty('null')
    expect(result).toHaveProperty('undefined')
    expect(result).toHaveProperty('symbol')
    expect(result).toHaveProperty('bigint')
  })

  test('should have correct types for each property', () => {
    const result = getPrimitiveTypes()

    expect(typeof result.string).toBe('string')
    expect(typeof result.number).toBe('number')
    expect(typeof result.boolean).toBe('boolean')
    expect(result.null).toBeNull()
    expect(result.undefined).toBeUndefined()
    expect(typeof result.symbol).toBe('symbol')
    expect(typeof result.bigint).toBe('bigint')
  })
})

describe('checkType', () => {
  test('should return "string" for string value', () => {
    expect(checkType('hello')).toBe('string')
  })

  test('should return "number" for numeric value', () => {
    expect(checkType(42)).toBe('number')
  })

  test('should return "boolean" for boolean value', () => {
    expect(checkType(true)).toBe('boolean')
    expect(checkType(false)).toBe('boolean')
  })

  test('should return "object" for null (JS quirk)', () => {
    expect(checkType(null)).toBe('object')
  })

  test('should return "undefined" for undefined value', () => {
    expect(checkType(undefined)).toBe('undefined')
  })

  test('should return "symbol" for symbol value', () => {
    expect(checkType(Symbol('test'))).toBe('symbol')
  })

  test('should return "bigint" for bigint value', () => {
    expect(checkType(123n)).toBe('bigint')
  })

  test('should return "object" for object value', () => {
    expect(checkType({})).toBe('object')
  })

  test('should return "function" for function value', () => {
    expect(checkType(() => {})).toBe('function')
  })
})

describe('isReferenceType', () => {
  test('should return false for primitive types', () => {
    expect(isReferenceType('string')).toBe(false)
    expect(isReferenceType(42)).toBe(false)
    expect(isReferenceType(true)).toBe(false)
    expect(isReferenceType(null)).toBe(false)
    expect(isReferenceType(undefined)).toBe(false)
    expect(isReferenceType(Symbol('test'))).toBe(false)
    expect(isReferenceType(123n)).toBe(false)
  })

  test('should return true for object', () => {
    expect(isReferenceType({})).toBe(true)
    expect(isReferenceType({ a: 1 })).toBe(true)
  })

  test('should return true for array', () => {
    expect(isReferenceType([])).toBe(true)
    expect(isReferenceType([1, 2, 3])).toBe(true)
  })

  test('should return true for function', () => {
    expect(isReferenceType(() => {})).toBe(true)
    expect(isReferenceType(function () {})).toBe(true)
  })

  test('should return true for Date', () => {
    expect(isReferenceType(new Date())).toBe(true)
  })

  test('should return true for RegExp', () => {
    expect(isReferenceType(/regex/)).toBe(true)
  })
})

describe('compareTypes', () => {
  test('should return sameType true for same types', () => {
    const result = compareTypes(5, 10)

    expect(result.sameType).toBe(true)
    expect(result.typeA).toBe('number')
    expect(result.typeB).toBe('number')
  })

  test('should return sameType false for different types', () => {
    const result = compareTypes(5, '5')

    expect(result.sameType).toBe(false)
    expect(result.typeA).toBe('number')
    expect(result.typeB).toBe('string')
  })

  test('should handle null and undefined correctly', () => {
    const result = compareTypes(null, undefined)

    expect(result.sameType).toBe(false)
    expect(result.typeA).toBe('object')
    expect(result.typeB).toBe('undefined')
  })

  test('should return object with all required properties', () => {
    const result = compareTypes('a', 'b')

    expect(result).toHaveProperty('sameType')
    expect(result).toHaveProperty('typeA')
    expect(result).toHaveProperty('typeB')
  })
})

describe('getTypeDetails', () => {
  test('should return correct type for string', () => {
    const result = getTypeDetails('hello')

    expect(result.type).toBe('string')
    expect(result.isArray).toBe(false)
    expect(result.isNull).toBe(false)
    expect(result.isDate).toBe(false)
  })

  test('should identify array correctly', () => {
    const result = getTypeDetails([1, 2, 3])

    expect(result.type).toBe('object')
    expect(result.isArray).toBe(true)
    expect(result.isNull).toBe(false)
    expect(result.isDate).toBe(false)
  })

  test('should identify null correctly', () => {
    const result = getTypeDetails(null)

    expect(result.type).toBe('object')
    expect(result.isArray).toBe(false)
    expect(result.isNull).toBe(true)
    expect(result.isDate).toBe(false)
  })

  test('should identify Date correctly', () => {
    const result = getTypeDetails(new Date())

    expect(result.type).toBe('object')
    expect(result.isArray).toBe(false)
    expect(result.isNull).toBe(false)
    expect(result.isDate).toBe(true)
  })

  test('should handle plain object', () => {
    const result = getTypeDetails({ a: 1 })

    expect(result.type).toBe('object')
    expect(result.isArray).toBe(false)
    expect(result.isNull).toBe(false)
    expect(result.isDate).toBe(false)
  })

  test('should return object with all required properties', () => {
    const result = getTypeDetails('test')

    expect(result).toHaveProperty('type')
    expect(result).toHaveProperty('isArray')
    expect(result).toHaveProperty('isNull')
    expect(result).toHaveProperty('isDate')
  })
})

describe('convertType', () => {
  test('should convert to string correctly', () => {
    expect(convertType(42, 'string')).toBe('42')
    expect(convertType(true, 'string')).toBe('true')
    expect(convertType(null, 'string')).toBe('null')
  })

  test('should convert to number correctly', () => {
    expect(convertType('42', 'number')).toBe(42)
    expect(convertType(true, 'number')).toBe(1)
    expect(convertType(false, 'number')).toBe(0)
  })

  test('should convert to boolean correctly', () => {
    expect(convertType(1, 'boolean')).toBe(true)
    expect(convertType(0, 'boolean')).toBe(false)
    expect(convertType('hello', 'boolean')).toBe(true)
    expect(convertType('', 'boolean')).toBe(false)
  })

  test('should throw error for unsupported target type', () => {
    expect(() => convertType('test', 'bigint')).toThrow('Unsupported target type: bigint')
  })

  test('should handle edge cases for number conversion', () => {
    expect(Number.isNaN(convertType('not a number', 'number'))).toBe(true)
    expect(convertType('', 'number')).toBe(0)
  })
})
