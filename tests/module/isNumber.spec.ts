import { isNumber, } from '../../src/helpers/isNumber'

describe('isNumber', () => {
  it('should return NaN not equal NaN', () => {
    expect(isNumber(NaN)).toBe(!NaN)
  })

  it('should return true for numbers', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(0.0)).toBe(true)
    expect(isNumber(-0)).toBe(true)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(1.0)).toBe(true)
    expect(isNumber(-1.0)).toBe(true)
    expect(isNumber(0.1 * 0.2)).toBe(true)
    expect(isNumber(-0.1 * 0.4)).toBe(true)
  })

  it('should return false for non-numbers', () => {
    expect(isNumber('0')).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber('undefined')).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber('null')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber('123')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
  })
})
