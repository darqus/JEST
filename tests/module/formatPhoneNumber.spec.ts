import {
  isNumber,
  formatPhoneNumber,
  unformatPhoneNumber,
} from '../../src/helpers/formatPhoneNumbers'

describe('isNumber', () => {
  test('should return true if the value is a number', () => {
    expect(isNumber(10)).toBe(true)
  })

  test('should return false if the value is not a number', () => {
    expect(isNumber('10')).toBe(false)
  })

  test('should return false if the value is a Date object', () => {
    expect(isNumber(new Date())).toBe(false)
  })
})

describe('formatPhoneNumber', () => {
  test('should format the phone number correctly', () => {
    const phoneNumber = '79930920771'
    const formattedNumber = formatPhoneNumber(phoneNumber)

    expect(formattedNumber).toBe('+7 (993) 092-07-71')
  })

  // Add more test cases as needed
})

describe('unformatPhoneNumber', () => {
  test('should remove all non-digit characters from the input', () => {
    const formattedPhoneNumber = '+7 (123) 456-7890'
    const unformatted = unformatPhoneNumber(formattedPhoneNumber)

    expect(unformatted).toBe('71234567890')
  })

  // Add more test cases as needed
})
