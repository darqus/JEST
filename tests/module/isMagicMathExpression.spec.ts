import { describe, it, expect } from '@jest/globals'
import { isMagicMathExpression } from '../../src/helpers/isMagicMathExpression'

const MAGIC_MATH_EXPRESSIONS = [
  0.1 * 0.1, // 0.010000000000000002
  0.1 * 0.2, // 0.020000000000000004
  0.1 * 0.3, // 0.03
  0.1 * 0.4, // 0.04000000000000001
  0.1 * 0.5, // 0.05
  0.1 * 0.6, // 0.06
  0.1 * 0.7, // 0.06999999999999999
  0.1 * 0.8, // 0.08000000000000002
  0.1 * 0.9, // 0.09000000000000001
  0.1 * 0.11, // 0.011000000000000001
  0.1 * 0.12, // 0.012
  0.1 * 0.13, // 0.013000000000000001
  0.1 * 0.29, // 0.028999999999999998
]

MAGIC_MATH_EXPRESSIONS[0]

describe('isMagicMathExpression()', () => {
  it('isMagicMathExpression()', () => {
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[0])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[1])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[2])).toBe(false)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[3])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[4])).toBe(false)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[5])).toBe(false)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[6])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[7])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[8])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[9])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[10])).toBe(false)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[11])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[12])).toBe(true)
  })
})
