import { describe, it, expect, } from '@jest/globals'

import { testFormEmail, testFormRassword, } from '../../src/helpers/testFormRE'

describe('testFormEmail', () => {
  it('should return true for a valid email address', () => {
    expect(testFormEmail('example@domain.zone')).toBeTruthy()
    expect(testFormEmail('john.doe@twitter.org')).toBeTruthy()
  })

  it('should return false for an invalid email address', () => {
    expect(testFormEmail('not-an-email')).toBeFalsy()
    expect(testFormEmail('example@domain.z')).toBeFalsy()
    expect(testFormEmail('john.doe.twitter.org')).toBeFalsy()
  })
})

describe('testFormRassword', () => {
  it('should return true for valid password', () => {
    expect(testFormRassword('Test022!')).toBeTruthy()
    expect(testFormRassword('Test022@')).toBeTruthy()
    expect(testFormRassword('Test022#')).toBeTruthy()
    expect(testFormRassword('Test022$')).toBeTruthy()
    expect(testFormRassword('Test022%')).toBeTruthy()
    expect(testFormRassword('Test022^')).toBeTruthy()
    expect(testFormRassword('Test022&')).toBeTruthy()
    expect(testFormRassword('Test022*')).toBeTruthy()
    // Add more test cases for valid password
  })

  it('should return false for invalid password', () => {
    expect(testFormRassword('')).toBeFalsy()
    expect(testFormRassword('123456789')).toBeFalsy()
    expect(testFormRassword('Te0@')).toBeFalsy()
    expect(testFormRassword('Testtttttttttttttttttttttttttttttt0@')).toBeFalsy()
    // Add more test cases for invalid password
  })
})
