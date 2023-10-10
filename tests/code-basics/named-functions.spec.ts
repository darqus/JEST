import getHiddenCard from '../../src/code-basics/named-functions'

test('getHiddenCard', () => {
  expect(getHiddenCard('1234123412341234')).toEqual('****1234')
  expect(getHiddenCard('1234123412344321')).toEqual('****4321')
  expect(getHiddenCard('1234123412344321', 2)).toEqual('**4321')
  expect(getHiddenCard('1234123412341234', 12)).toEqual('************1234')
})
