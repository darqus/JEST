import { reverse } from '../../src/helpers/reverse'

describe('reverse', () => {
  test('should return an empty string when given an empty string', () => {
    expect(reverse('')).toBe('')
  })

  test('should return the same string when given a single character string', () => {
    expect(reverse('a')).toBe('a')
  })

  test('should return the reversed string when given a multi-character string', () => {
    expect(reverse('hello')).toBe('olleh')
  })

  test('should handle strings with special characters', () => {
    expect(reverse('!@#$%^&*()')).toBe(')(*&^%$#@!')
  })

  test('should handle strings with numbers', () => {
    expect(reverse('12345')).toBe('54321')
  })

  test('should handle strings with whitespace', () => {
    expect(reverse('  hello  ')).toBe('  olleh  ')
  })
})
