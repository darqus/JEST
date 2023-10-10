import { type Person, isPropertyExist, } from '../../src/helpers/isPropertyExist'

const person: Person = {
  name: 'John',
  salary: 1000,
}

describe('isPropertyExist()', () => {
  it('isPropertyExist()', () => {
    expect(isPropertyExist(person, 'name')).toEqual(true)
    expect(isPropertyExist(person, 'salary')).toEqual(true)
    expect(isPropertyExist(person, 'email')).toEqual(false)
  })
})
