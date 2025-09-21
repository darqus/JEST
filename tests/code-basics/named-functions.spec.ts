import getHiddenCard from '../../src/code-basics/named-functions'

test('getHiddenCard', () => {
  expect(getHiddenCard('1234123412341234')).toBe('****1234')
  expect(getHiddenCard('1234123412344321')).toBe('****4321')
  expect(getHiddenCard('1234123412344321', 2)).toBe('**4321')
  expect(getHiddenCard('1234123412341234', 12)).toBe('************1234')
})
