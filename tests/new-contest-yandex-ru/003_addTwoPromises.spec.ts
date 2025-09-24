import { addTwoPromises } from '../../src/new-contest-yandex-ru/003_addTwoPromises'

test('addTwoPromises', async () => {
  const result1 = await addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  expect(result1).toBe(4)

  const result2 = await addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  expect(result2).toBe(4)
})
