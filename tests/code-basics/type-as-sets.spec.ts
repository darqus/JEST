import type CustomType from '../../src/code-basics/type-as-sets'

test('customType', () => {
  const numberValue: CustomType = 1

  expect(numberValue).toBe(1)

  const nullValue: CustomType = null

  expect(nullValue).toBeNull()

  const undefinedValue: CustomType = undefined

  expect(undefinedValue).toBeUndefined()
})
