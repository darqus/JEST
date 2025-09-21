import isPlainObject from '../../src/code-basics/unknown'

describe('isPlainObject', () => {
  it('should return true for a plain object', () => {
    const obj = { a: 1, b: 2 }

    expect(isPlainObject(obj)).toBe(true)
  })

  it('should return false for an array', () => {
    const arr = [ 1, 2, 3 ]

    expect(isPlainObject(arr)).toBe(false)
  })

  it('should return false for null', () => {
    const obj = null

    expect(isPlainObject(obj)).toBe(false)
  })

  it('should return false for a string', () => {
    const obj = 'hello'

    expect(isPlainObject(obj)).toBe(false)
  })
})
