import formatPrice from '../../src/code-basics/nullable'

test('formatPrice', () => {
  expect(formatPrice()).toBe('$0.00')
  expect(formatPrice(null)).toBe('$0.00')
  expect(formatPrice(200)).toBe('$200.00')
  expect(formatPrice(3.145)).toBe('$3.15')
})
