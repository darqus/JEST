import { describe, it, expect } from '@jest/globals'
import { testFormEmail, testFormRassword } from '../../src/helpers/testFormRE'

describe('testFormRE()', () => {
  it('testFormEmail()', () => {
    expect(testFormEmail('example@domain.zone')).toBe(true)
    expect(testFormEmail('example@domain.z')).toBe(false)
    expect(testFormEmail('john.doe.twitter.org')).toBe(false)
    expect(testFormEmail('john.doe@twitter.org')).toBe(true)
  })
  it('testFormRassword()', () => {
    expect(testFormRassword('Te0@')).toBe(false)
    expect(testFormRassword('Testtttttttttttttttttttttttttttttt0@')).toBe(false)
    expect(testFormRassword('Test022!')).toBe(true)
    expect(testFormRassword('Test022@')).toBe(true)
    expect(testFormRassword('Test022#')).toBe(true)
    expect(testFormRassword('Test022$')).toBe(true)
    expect(testFormRassword('Test022%')).toBe(true)
    expect(testFormRassword('Test022^')).toBe(true)
    expect(testFormRassword('Test022&')).toBe(true)
    expect(testFormRassword('Test022*')).toBe(true)
  })
})
