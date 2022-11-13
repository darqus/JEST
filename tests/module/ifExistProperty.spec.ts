import { describe, it, expect } from '@jest/globals'
import { ifExistProperty } from '../../src/helpers/ifExistProperty'

const PERSON = {
  name: 'John Doe',
  salary: 1000,
}

describe('ifExistProperty()', () => {
  it('ifExistProperty()', () => {
    expect(ifExistProperty(PERSON, 'name')).toEqual(true)
    expect(ifExistProperty(PERSON, 'salary')).toEqual(true)
    expect(ifExistProperty(PERSON, 'email')).toEqual(false)
  })
})
