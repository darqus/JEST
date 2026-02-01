/**
 * Тесты для урока 4: Условные операторы (if/else, switch, тернарный оператор)
 */

import { describe, expect, test } from '@jest/globals'
import {
  checkEligibility,
  checkNumberSign,
  findMaxTernary,
  getDayName,
  getGradeDescription,
  getSeason,
} from '../../src/javascript/lesson-04-conditional.js'

describe('checkNumberSign', () => {
  test('should return "positive" for positive numbers', () => {
    expect(checkNumberSign(1)).toBe('positive')
    expect(checkNumberSign(100)).toBe('positive')
    expect(checkNumberSign(0.5)).toBe('positive')
  })

  test('should return "negative" for negative numbers', () => {
    expect(checkNumberSign(-1)).toBe('negative')
    expect(checkNumberSign(-100)).toBe('negative')
    expect(checkNumberSign(-0.5)).toBe('negative')
  })

  test('should return "zero" for zero', () => {
    expect(checkNumberSign(0)).toBe('zero')
    expect(checkNumberSign(-0)).toBe('zero')
  })
})

describe('getGradeDescription', () => {
  test('should return "A" for scores 90-100', () => {
    expect(getGradeDescription(90)).toBe('A')
    expect(getGradeDescription(95)).toBe('A')
    expect(getGradeDescription(100)).toBe('A')
  })

  test('should return "B" for scores 80-89', () => {
    expect(getGradeDescription(80)).toBe('B')
    expect(getGradeDescription(85)).toBe('B')
    expect(getGradeDescription(89)).toBe('B')
  })

  test('should return "C" for scores 70-79', () => {
    expect(getGradeDescription(70)).toBe('C')
    expect(getGradeDescription(75)).toBe('C')
    expect(getGradeDescription(79)).toBe('C')
  })

  test('should return "D" for scores 60-69', () => {
    expect(getGradeDescription(60)).toBe('D')
    expect(getGradeDescription(65)).toBe('D')
    expect(getGradeDescription(69)).toBe('D')
  })

  test('should return "F" for scores below 60', () => {
    expect(getGradeDescription(59)).toBe('F')
    expect(getGradeDescription(50)).toBe('F')
    expect(getGradeDescription(0)).toBe('F')
    expect(getGradeDescription(-10)).toBe('F')
  })
})

describe('getDayName', () => {
  test('should return correct day names for valid inputs', () => {
    expect(getDayName(1)).toBe('Monday')
    expect(getDayName(2)).toBe('Tuesday')
    expect(getDayName(3)).toBe('Wednesday')
    expect(getDayName(4)).toBe('Thursday')
    expect(getDayName(5)).toBe('Friday')
    expect(getDayName(6)).toBe('Saturday')
    expect(getDayName(7)).toBe('Sunday')
  })

  test('should return "Invalid day" for invalid inputs', () => {
    expect(getDayName(0)).toBe('Invalid day')
    expect(getDayName(8)).toBe('Invalid day')
    expect(getDayName(-1)).toBe('Invalid day')
    expect(getDayName(100)).toBe('Invalid day')
  })
})

describe('getSeason', () => {
  test('should return "Winter" for December, January, February', () => {
    expect(getSeason(12)).toBe('Winter')
    expect(getSeason(1)).toBe('Winter')
    expect(getSeason(2)).toBe('Winter')
  })

  test('should return "Spring" for March, April, May', () => {
    expect(getSeason(3)).toBe('Spring')
    expect(getSeason(4)).toBe('Spring')
    expect(getSeason(5)).toBe('Spring')
  })

  test('should return "Summer" for June, July, August', () => {
    expect(getSeason(6)).toBe('Summer')
    expect(getSeason(7)).toBe('Summer')
    expect(getSeason(8)).toBe('Summer')
  })

  test('should return "Autumn" for September, October, November', () => {
    expect(getSeason(9)).toBe('Autumn')
    expect(getSeason(10)).toBe('Autumn')
    expect(getSeason(11)).toBe('Autumn')
  })

  test('should return "Invalid month" for invalid inputs', () => {
    expect(getSeason(0)).toBe('Invalid month')
    expect(getSeason(13)).toBe('Invalid month')
    expect(getSeason(-1)).toBe('Invalid month')
  })
})

describe('findMaxTernary', () => {
  test('should find maximum when first number is largest', () => {
    expect(findMaxTernary(10, 5, 3)).toBe(10)
    expect(findMaxTernary(100, 50, 25)).toBe(100)
  })

  test('should find maximum when second number is largest', () => {
    expect(findMaxTernary(5, 10, 3)).toBe(10)
    expect(findMaxTernary(25, 100, 50)).toBe(100)
  })

  test('should find maximum when third number is largest', () => {
    expect(findMaxTernary(3, 5, 10)).toBe(10)
    expect(findMaxTernary(25, 50, 100)).toBe(100)
  })

  test('should handle equal numbers', () => {
    expect(findMaxTernary(5, 5, 3)).toBe(5)
    expect(findMaxTernary(5, 3, 5)).toBe(5)
    expect(findMaxTernary(3, 5, 5)).toBe(5)
    expect(findMaxTernary(5, 5, 5)).toBe(5)
  })

  test('should handle negative numbers', () => {
    expect(findMaxTernary(-1, -5, -3)).toBe(-1)
    expect(findMaxTernary(-10, -5, -20)).toBe(-5)
  })

  test('should handle mixed positive and negative numbers', () => {
    expect(findMaxTernary(-10, 5, 0)).toBe(5)
    expect(findMaxTernary(0, -5, 10)).toBe(10)
  })
})

describe('checkEligibility', () => {
  test('should grant access for adults (age >= 18)', () => {
    expect(checkEligibility(18, false)).toBe(true)
    expect(checkEligibility(25, false)).toBe(true)
    expect(checkEligibility(100, false)).toBe(true)
    expect(checkEligibility(18, true)).toBe(true)
  })

  test('should grant access for teens (16-17) with permission', () => {
    expect(checkEligibility(16, true)).toBe(true)
    expect(checkEligibility(17, true)).toBe(true)
  })

  test('should deny access for teens (16-17) without permission', () => {
    expect(checkEligibility(16, false)).toBe(false)
    expect(checkEligibility(17, false)).toBe(false)
  })

  test('should deny access for children (age < 16)', () => {
    expect(checkEligibility(15, true)).toBe(false)
    expect(checkEligibility(15, false)).toBe(false)
    expect(checkEligibility(10, true)).toBe(false)
    expect(checkEligibility(0, true)).toBe(false)
  })

  test('should handle boundary ages correctly', () => {
    expect(checkEligibility(16, true)).toBe(true)
    expect(checkEligibility(16, false)).toBe(false)
    expect(checkEligibility(17, true)).toBe(true)
    expect(checkEligibility(17, false)).toBe(false)
    expect(checkEligibility(18, false)).toBe(true)
    expect(checkEligibility(18, true)).toBe(true)
  })
})
