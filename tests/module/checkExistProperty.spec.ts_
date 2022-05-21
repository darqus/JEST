import { checkExistProperty } from '../../src/helpers/checkExistProperty'

const PERSON = {
  name: 'John Doe',
  salary: 1000
}

describe('checkExistProperty()', () => {
  it('checkExistProperty()', () => {
    expect(checkExistProperty(PERSON, 'name')).toEqual(true)
    expect(checkExistProperty(PERSON, 'salary')).toEqual(true)
    expect(checkExistProperty(PERSON, 'email')).toEqual(false)
  })
})
