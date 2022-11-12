import { describe, it, expect } from '@jest/globals'
import { isMagicMathExpression } from '../../src/helpers/isMagicMathExpression'

const MAGIC_MATH_EXPRESSIONS = [
  0.1 * 0.2, // 0.020000000000000004
  0.1 * 0.4, // 0.04000000000000001
  0.1 * 0.8, // 0.08000000000000002
  0.1 * 0.9, // 0.09000000000000001
]

MAGIC_MATH_EXPRESSIONS[0]

describe('isMagicMathExpression()', () => {
  it('isMagicMathExpression()', () => {
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[0])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[1])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[2])).toBe(true)
    expect(isMagicMathExpression(MAGIC_MATH_EXPRESSIONS[3])).toBe(true)
  })
})
