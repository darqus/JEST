import { isPropertyExist, type Person, } from '../../src/helpers/isPropertyExist'

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

describe('isPropertyExist', () => {
  it('should return true if the property exists in the object', () => {
    expect(isPropertyExist(person, 'name')).toBe(true)
  })

  it('should return false if the property does not exist in the object', () => {
    expect(isPropertyExist(person, 'address')).toBe(false)
  })

  it('should return false if the object is null', () => {
    expect(isPropertyExist(null, 'name')).toBe(false)
  })

  it('should return false if the object is undefined', () => {
    expect(isPropertyExist(undefined, 'name')).toBe(false)
  })
})
