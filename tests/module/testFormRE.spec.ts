import { describe, it, expect, } from '@jest/globals'

import { testFormEmail, testFormRassword, } from '../../src/helpers/testFormRE'

describe('testFormRE()', () => {
  it('testFormEmail()', () => {
    expect(testFormEmail('example')).toBeFalsy()
    expect(testFormEmail('example@domain.zone')).toBeTruthy()
    expect(testFormEmail('example@domain.z')).toBeFalsy()
    expect(testFormEmail('john.doe.twitter.org')).toBeFalsy()
    expect(testFormEmail('john.doe@twitter.org')).toBeTruthy()
  })
  it('testFormRassword()', () => {
    expect(testFormRassword('Te0@')).toBeFalsy()
    expect(testFormRassword('Testtttttttttttttttttttttttttttttt0@')).toBeFalsy()
    expect(testFormRassword('Test022!')).toBeTruthy()
    expect(testFormRassword('Test022@')).toBeTruthy()
    expect(testFormRassword('Test022#')).toBeTruthy()
    expect(testFormRassword('Test022$')).toBeTruthy()
    expect(testFormRassword('Test022%')).toBeTruthy()
    expect(testFormRassword('Test022^')).toBeTruthy()
    expect(testFormRassword('Test022&')).toBeTruthy()
    expect(testFormRassword('Test022*')).toBeTruthy()
  })
})
