import { isEmailValid, isPasswordValid, } from '../../src/helpers/testFormRE'

describe('isEmailValid', () => {
  it('should return true for a valid email address', () => {
    expect(isEmailValid('example@domain.zone')).toBeTruthy()
    expect(isEmailValid('john.doe@twitter.org')).toBeTruthy()
    expect(isEmailValid('john.doe1@twitter1.org')).toBeTruthy()
  })

  it('should return false for an invalid email address', () => {
    expect(isEmailValid('not-an-email')).toBeFalsy()
    expect(isEmailValid('example@domain.z')).toBeFalsy()
    expect(isEmailValid('john.doe.twitter.org')).toBeFalsy()
    expect(isEmailValid('john@doe@twitter.org')).toBeFalsy()
    expect(isEmailValid('john@doe.111')).toBeFalsy()
  })
})

describe('isPasswordValid', () => {
  it('should return true for valid password', () => {
    expect(isPasswordValid('Test022!')).toBeTruthy()
    expect(isPasswordValid('Test022@')).toBeTruthy()
    expect(isPasswordValid('Test022#')).toBeTruthy()
    expect(isPasswordValid('Test022$')).toBeTruthy()
    expect(isPasswordValid('Test022%')).toBeTruthy()
    expect(isPasswordValid('Test022^')).toBeTruthy()
    expect(isPasswordValid('Test022&')).toBeTruthy()
    expect(isPasswordValid('Test022*')).toBeTruthy()
    // Add more test cases for valid password
  })

  it('should return false for invalid password', () => {
    expect(isPasswordValid('')).toBeFalsy()
    expect(isPasswordValid('123456789')).toBeFalsy()
    expect(isPasswordValid('Te0@')).toBeFalsy()
    expect(isPasswordValid('Testtttttttttttttttttttttttttttttt0@')).toBeFalsy()
    // Add more test cases for invalid password
  })
})
