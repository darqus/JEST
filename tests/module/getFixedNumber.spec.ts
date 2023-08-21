import { describe, it, expect, } from '@jest/globals'

import { getFixedNumber, } from '../../src/helpers/getFixedNumber'

describe('getFixedNumber()', () => {
  it('should return the input value if it is already an integer', () => {
    const input = 5
    const result = getFixedNumber(input)

    expect(result).toBe(input)
  })

  it('should round the input value to two decimal places if it is not an integer', () => {
    const input = 3.14159
    const result = getFixedNumber(input)

    expect(result).toBe(3.14)
  })

  it('should round the input value to two decimal places if it has more than two decimal places', () => {
    const input = 3.14999
    const result = getFixedNumber(input)

    expect(result).toBe(3.15)
  })

  it('should round the input value to two decimal places if it is negative', () => {
    const input = -3.14159
    const result = getFixedNumber(input)

    expect(result).toBe(-3.14)
  })

  it('more', () => {
    expect(getFixedNumber(0)).toEqual(0)
    expect(getFixedNumber(0.0)).toEqual(0)
    expect(getFixedNumber(-0)).toEqual(-0)
    expect(getFixedNumber(1)).toEqual(1)
    expect(getFixedNumber(1.0)).toEqual(1)
    expect(getFixedNumber(-1.0)).toEqual(-1)
    expect(getFixedNumber(0.1 * 0.2)).toEqual(0.02)
    expect(getFixedNumber(-0.1 * 0.4)).toEqual(-0.04)
    expect(getFixedNumber(-2.10000000000004)).toEqual(-2.1)
    expect(getFixedNumber(-2.19000000000004)).toEqual(-2.19)
    expect(getFixedNumber(-2.19500000000004)).toEqual(-2.2)
    expect(getFixedNumber(-2.19900000000004)).toEqual(-2.2)
  })
})
