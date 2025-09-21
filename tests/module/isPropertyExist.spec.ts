import { type Person, isPropertyExist } from '../../src/helpers/isPropertyExist'

const person: Person = {
  name: 'John',
  salary: 1000,
}

describe('isPropertyExist()', () => {
  test('isPropertyExist()', () => {
    expect(isPropertyExist(person, 'name')).toBe(true)
    expect(isPropertyExist(person, 'salary')).toBe(true)
    expect(isPropertyExist(person, 'email')).toBe(false)
  })
})
