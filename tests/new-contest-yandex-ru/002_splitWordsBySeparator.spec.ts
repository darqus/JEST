import { splitWordsBySeparator } from '../../src/new-contest-yandex-ru/002_splitWordsBySeparator'

test('splitWordsBySeparator', () => {
  const result1 = splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.')

  expect(result1).toEqual(['one', 'two', 'three', 'four', 'five', 'six'])

  const result2 = splitWordsBySeparator(['1/', '/2', '/'], '/')

  expect(result2).toEqual(['1', '2'])
})
