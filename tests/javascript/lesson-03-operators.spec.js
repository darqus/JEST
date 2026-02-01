/**
 * Тесты для урока 3: Операторы (арифметические, сравнения, логические)
 */

import { describe, expect, test } from '@jest/globals'
import {
  applyLogicalOperators,
  calculateWithArithmetic,
  checkNullishCoalescing,
  compareValues,
  useAssignmentOperators,
  useOptionalChaining,
} from '../../src/javascript/lesson-03-operators.js'

describe('calculateWithArithmetic', () => {
  test('should perform all arithmetic operations correctly', () => {
    const result = calculateWithArithmetic(10, 3)

    expect(result).toHaveProperty('addition')
    expect(result).toHaveProperty('subtraction')
    expect(result).toHaveProperty('multiplication')
    expect(result).toHaveProperty('division')
    expect(result).toHaveProperty('remainder')
    expect(result).toHaveProperty('exponentiation')
  })

  test('should calculate addition correctly', () => {
    const result = calculateWithArithmetic(10, 3)
    expect(result.addition).toBe(13)
  })

  test('should calculate subtraction correctly', () => {
    const result = calculateWithArithmetic(10, 3)
    expect(result.subtraction).toBe(7)
  })

  test('should calculate multiplication correctly', () => {
    const result = calculateWithArithmetic(10, 3)
    expect(result.multiplication).toBe(30)
  })

  test('should calculate division correctly', () => {
    const result = calculateWithArithmetic(10, 2)
    expect(result.division).toBe(5)
  })

  test('should calculate remainder correctly', () => {
    const result = calculateWithArithmetic(10, 3)
    expect(result.remainder).toBe(1)
  })

  test('should calculate exponentiation correctly', () => {
    const result = calculateWithArithmetic(2, 3)
    expect(result.exponentiation).toBe(8)
  })

  test('should handle negative numbers', () => {
    const result = calculateWithArithmetic(-5, 2)
    expect(result.addition).toBe(-3)
    expect(result.multiplication).toBe(-10)
  })

  test('should handle floating point numbers', () => {
    const result = calculateWithArithmetic(5.5, 2)
    expect(result.addition).toBe(7.5)
    expect(result.division).toBe(2.75)
  })
})

describe('compareValues', () => {
  test('should return all comparison results', () => {
    const result = compareValues(5, 3)

    expect(result).toHaveProperty('looseEqual')
    expect(result).toHaveProperty('strictEqual')
    expect(result).toHaveProperty('looseNotEqual')
    expect(result).toHaveProperty('strictNotEqual')
    expect(result).toHaveProperty('greaterThan')
    expect(result).toHaveProperty('lessThan')
    expect(result).toHaveProperty('greaterOrEqual')
    expect(result).toHaveProperty('lessOrEqual')
  })

  test('should compare equal numbers correctly', () => {
    const result = compareValues(5, 5)
    expect(result.looseEqual).toBe(true)
    expect(result.strictEqual).toBe(true)
    expect(result.looseNotEqual).toBe(false)
    expect(result.strictNotEqual).toBe(false)
  })

  test('should distinguish loose from strict equality', () => {
    const result = compareValues(5, '5')
    expect(result.looseEqual).toBe(true)
    expect(result.strictEqual).toBe(false)
  })

  test('should compare different types strictly', () => {
    const result = compareValues(1, true)
    expect(result.looseEqual).toBe(true)
    expect(result.strictEqual).toBe(false)
  })

  test('should handle greater and less than correctly', () => {
    const result = compareValues(10, 5)
    expect(result.greaterThan).toBe(true)
    expect(result.lessThan).toBe(false)
    expect(result.greaterOrEqual).toBe(true)
    expect(result.lessOrEqual).toBe(false)
  })

  test('should handle equal values for >= and <=', () => {
    const result = compareValues(5, 5)
    expect(result.greaterOrEqual).toBe(true)
    expect(result.lessOrEqual).toBe(true)
  })

  test('should compare null and undefined', () => {
    const result = compareValues(null, undefined)
    expect(result.looseEqual).toBe(true)
    expect(result.strictEqual).toBe(false)
  })
})

describe('applyLogicalOperators', () => {
  test('should return all logical operation results', () => {
    const result = applyLogicalOperators(true, true, true)

    expect(result).toHaveProperty('and')
    expect(result).toHaveProperty('or')
    expect(result).toHaveProperty('notA')
    expect(result).toHaveProperty('notB')
    expect(result).toHaveProperty('complexAnd')
    expect(result).toHaveProperty('complexOr')
    expect(result).toHaveProperty('mixed')
    expect(result).toHaveProperty('anotherMixed')
  })

  test('should calculate AND correctly', () => {
    expect(applyLogicalOperators(true, true, true).and).toBe(true)
    expect(applyLogicalOperators(true, false, true).and).toBe(false)
    expect(applyLogicalOperators(false, true, true).and).toBe(false)
    expect(applyLogicalOperators(false, false, true).and).toBe(false)
  })

  test('should calculate OR correctly', () => {
    expect(applyLogicalOperators(true, true, true).or).toBe(true)
    expect(applyLogicalOperators(true, false, true).or).toBe(true)
    expect(applyLogicalOperators(false, true, true).or).toBe(true)
    expect(applyLogicalOperators(false, false, true).or).toBe(false)
  })

  test('should calculate NOT correctly', () => {
    expect(applyLogicalOperators(true, false, false).notA).toBe(false)
    expect(applyLogicalOperators(false, true, false).notA).toBe(true)
    expect(applyLogicalOperators(false, true, false).notB).toBe(false)
    expect(applyLogicalOperators(false, false, false).notB).toBe(true)
  })

  test('should calculate complex AND with three values', () => {
    expect(applyLogicalOperators(true, true, true).complexAnd).toBe(true)
    expect(applyLogicalOperators(true, true, false).complexAnd).toBe(false)
    expect(applyLogicalOperators(true, false, true).complexAnd).toBe(false)
  })

  test('should calculate complex OR with three values', () => {
    expect(applyLogicalOperators(false, false, false).complexOr).toBe(false)
    expect(applyLogicalOperators(true, false, false).complexOr).toBe(true)
    expect(applyLogicalOperators(false, false, true).complexOr).toBe(true)
  })

  test('should calculate mixed logical expressions', () => {
    expect(applyLogicalOperators(true, false, true).mixed).toBe(true)
    expect(applyLogicalOperators(true, false, false).mixed).toBe(false)
    expect(applyLogicalOperators(false, true, true).anotherMixed).toBe(true)
    expect(applyLogicalOperators(false, false, true).anotherMixed).toBe(false)
    expect(applyLogicalOperators(false, true, false).anotherMixed).toBe(false)
  })
})

describe('useAssignmentOperators', () => {
  test('should return all assignment operation results', () => {
    const result = useAssignmentOperators(10)

    expect(result).toHaveProperty('additionAssign')
    expect(result).toHaveProperty('subtractionAssign')
    expect(result).toHaveProperty('multiplicationAssign')
    expect(result).toHaveProperty('divisionAssign')
    expect(result).toHaveProperty('remainderAssign')
  })

  test('should add correctly with +=', () => {
    const result = useAssignmentOperators(10)
    expect(result.additionAssign).toBe(20)
  })

  test('should subtract correctly with -=', () => {
    const result = useAssignmentOperators(10)
    expect(result.subtractionAssign).toBe(5)
  })

  test('should multiply correctly with *=', () => {
    const result = useAssignmentOperators(10)
    expect(result.multiplicationAssign).toBe(20)
  })

  test('should divide correctly with /=', () => {
    const result = useAssignmentOperators(10)
    expect(result.divisionAssign).toBe(5)
  })

  test('should calculate remainder correctly with %=', () => {
    const result = useAssignmentOperators(10)
    expect(result.remainderAssign).toBe(1)
  })

  test('should work with different initial values', () => {
    const result = useAssignmentOperators(20)
    expect(result.additionAssign).toBe(30)
    expect(result.subtractionAssign).toBe(15)
    expect(result.multiplicationAssign).toBe(40)
    expect(result.divisionAssign).toBe(10)
    expect(result.remainderAssign).toBe(2)
  })
})

describe('checkNullishCoalescing', () => {
  test('should return value when it is not null or undefined', () => {
    expect(checkNullishCoalescing('hello', 'default')).toBe('hello')
    expect(checkNullishCoalescing(0, 'default')).toBe(0)
    expect(checkNullishCoalescing('', 'default')).toBe('')
    expect(checkNullishCoalescing(false, 'default')).toBe(false)
  })

  test('should return defaultValue when value is null', () => {
    expect(checkNullishCoalescing(null, 'default')).toBe('default')
  })

  test('should return defaultValue when value is undefined', () => {
    expect(checkNullishCoalescing(undefined, 'default')).toBe('default')
  })

  test('should keep falsy values unlike || operator', () => {
    expect(checkNullishCoalescing(0, 100)).toBe(0)
    expect(checkNullishCoalescing('', 'default')).toBe('')
    expect(checkNullishCoalescing(false, true)).toBe(false)
  })

  test('should handle numbers including NaN', () => {
    expect(checkNullishCoalescing(NaN, 'default')).toBeNaN()
    expect(checkNullishCoalescing(0, 42)).toBe(0)
    expect(checkNullishCoalescing(-0, 42)).toBe(-0)
  })
})

describe('useOptionalChaining', () => {
  test('should access nested property when path exists', () => {
    const obj = { user: { address: { city: 'Moscow' } } }
    expect(useOptionalChaining(obj, 'user.address.city')).toBe('Moscow')
  })

  test('should return undefined when intermediate property is null', () => {
    const obj = { user: null }
    expect(useOptionalChaining(obj, 'user.address.city')).toBeUndefined()
  })

  test('should return undefined when intermediate property is undefined', () => {
    const obj = { user: undefined }
    expect(useOptionalChaining(obj, 'user.address.city')).toBeUndefined()
  })

  test('should return undefined when property does not exist', () => {
    const obj = { user: {} }
    expect(useOptionalChaining(obj, 'user.address.city')).toBeUndefined()
  })

  test('should access shallow property', () => {
    const obj = { name: 'John', age: 30 }
    expect(useOptionalChaining(obj, 'name')).toBe('John')
    expect(useOptionalChaining(obj, 'age')).toBe(30)
  })

  test('should return undefined for non-existent shallow property', () => {
    const obj = { name: 'John' }
    expect(useOptionalChaining(obj, 'nonExistent')).toBeUndefined()
  })

  test('should handle deeply nested paths', () => {
    const obj = { a: { b: { c: { d: { e: 'deep' } } } } }
    expect(useOptionalChaining(obj, 'a.b.c.d.e')).toBe('deep')
  })

  test('should handle array access through optional chaining pattern', () => {
    const obj = { items: ['first', 'second'] }
    expect(useOptionalChaining(obj, 'items')).toEqual(['first', 'second'])
  })

  test('should return undefined for empty nested object', () => {
    const obj = {}
    expect(useOptionalChaining(obj, 'any.path')).toBeUndefined()
  })

  test('should handle mixed valid and invalid paths', () => {
    const obj = { user: { profile: null } }
    expect(useOptionalChaining(obj, 'user.profile.name')).toBeUndefined()
  })
})
