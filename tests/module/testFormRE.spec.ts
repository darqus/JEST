import { describe, it, expect } from '@jest/globals'
import { testFormEmail, testFormRassword } from '../../src/helpers/testFormRE'

describe('testFormRE()', () => {
  it('testFormEmail()', () => {
    expect(testFormEmail('example@domain.zone')).toBe(true)
    expect(testFormEmail('john.doe@twitter.org')).toBe(true)
  })
  it('testFormRassword()', () => {
    expect(testFormRassword('Test022#')).toBe(true)
    expect(testFormRassword('Test022!')).toBe(true)
  })
})
