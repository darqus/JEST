import type CustomType from '../../src/code-basics/type-as-sets'

test('CustomType', () => {
  const numberValue: CustomType = 1

  expect(numberValue).toBe(1)

  const nullValue: CustomType = null

  expect(nullValue).toBe(null)

  const undefinedValue: CustomType = undefined

  expect(undefinedValue).toBe(undefined)
})
