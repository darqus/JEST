import { isPairedBrackets, } from '../../src/helpers/isPairedBrackets'

describe('isPairedBrackets', () => {
  it('should return true for strings with balanced paired brackets', () => {
    expect(isPairedBrackets('()')).toBe(true)
    expect(isPairedBrackets('[]')).toBe(true)
    expect(isPairedBrackets('{}')).toBe(true)
    expect(isPairedBrackets('()[]{}')).toBe(true)
    expect(isPairedBrackets('[({})]')).toBe(true)
  })

  it('should return false for strings with unbalanced paired brackets', () => {
    expect(isPairedBrackets('(')).toBe(false)
    expect(isPairedBrackets(')')).toBe(false)
    expect(isPairedBrackets('[')).toBe(false)
    expect(isPairedBrackets(']')).toBe(false)
    expect(isPairedBrackets('{')).toBe(false)
    expect(isPairedBrackets('}')).toBe(false)
    expect(isPairedBrackets('([)]')).toBe(false)
  })

  it('should return true for strings without brackets', () => {
    expect(isPairedBrackets('')).toBe(true)
    expect(isPairedBrackets('hello world')).toBe(true)
    expect(isPairedBrackets('12345')).toBe(true)
  })
})
