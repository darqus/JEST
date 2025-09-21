import { getFixedNumber } from '../../src/helpers/getFixedNumber'

describe('getFixedNumber()', () => {
  test('should return the input value if it is already an integer', () => {
    const input = 5
    const result = getFixedNumber(input)

    expect(result).toBe(input)
  })

  test('should round the input value to two decimal places if it is not an integer', () => {
    const input = 3.14159
    const result = getFixedNumber(input)

    expect(result).toBe(3.14)
  })

  test('should round the input value to two decimal places if it has more than two decimal places', () => {
    const input = 3.14999
    const result = getFixedNumber(input)

    expect(result).toBe(3.15)
  })

  test('should round the input value to two decimal places if it is negative', () => {
    const input = -3.14159
    const result = getFixedNumber(input)

    expect(result).toBe(-3.14)
  })

  test('more', () => {
    expect(getFixedNumber(0)).toBe(0)
    expect(getFixedNumber(0.0)).toBe(0)
    expect(getFixedNumber(-0)).toBe(-0)
    expect(getFixedNumber(1)).toBe(1)
    expect(getFixedNumber(1.0)).toBe(1)
    expect(getFixedNumber(-1.0)).toBe(-1)
    expect(getFixedNumber(0.1 * 0.2)).toBe(0.02)
    expect(getFixedNumber(-0.1 * 0.4)).toBe(-0.04)
    expect(getFixedNumber(-2.10000000000004)).toBe(-2.1)
    expect(getFixedNumber(-2.19000000000004)).toBe(-2.19)
    expect(getFixedNumber(-2.19500000000004)).toBe(-2.2)
    expect(getFixedNumber(-2.19900000000004)).toBe(-2.2)
  })
})
