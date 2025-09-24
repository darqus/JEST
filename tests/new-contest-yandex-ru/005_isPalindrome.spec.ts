import { isPalindrome } from '../../src/new-contest-yandex-ru/005_isPalindrome'

describe('isPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true)
  })

  test('should return true for a palindrome with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true)
  })

  test('should return true for a palindrome with punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false)
  })

  test('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true)
  })

  test('should return true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true)
  })

  test('should return true for a palindrome with numbers', () => {
    expect(isPalindrome('12321')).toBe(true)
  })

  test('should return true for a string with only spaces and punctuation', () => {
    expect(isPalindrome(' ,.?!')).toBe(true)
  })

  test('should return false for a longer non-palindrome string', () => {
    expect(isPalindrome('not a palindrome')).toBe(false)
  })

  test('should return true for a palindrome with numbers and letters', () => {
    expect(isPalindrome("121 madam i'm adam 121")).toBe(true)
  })

  test('should return true for a palindrome with multiple spaces', () => {
    expect(isPalindrome('a   b a')).toBe(true)
  })

  test('should return true for a palindrome with leading and trailing spaces', () => {
    expect(isPalindrome('  madam  ')).toBe(true)
  })

  test('should return true for "Do geese see God?"', () => {
    expect(isPalindrome('Do geese see God?')).toBe(true)
  })

  test('should return false for "Hello, world!"', () => {
    expect(isPalindrome('Hello, world!')).toBe(false)
  })

  test('should return true for "Madam, I’m Adam"', () => {
    expect(isPalindrome('Madam, I’m Adam')).toBe(true)
  })
})
