import getOlderUser, { type User, } from '../../src/code-basics/type-aliases'

test('function', () => {
  const user1: User = {
    name: 'sem',
    age: 3,
  }

  const user2: User = {
    name: 'inna',
    age: 5,
  }

  const user3: User = {
    name: 'mika',
    age: 5,
  }

  expect(getOlderUser(user1, user2)).toEqual(user2)
  expect(getOlderUser(user2, user1)).toEqual(user2)

  expect(getOlderUser(user2, user3)).toBeNull()
})
