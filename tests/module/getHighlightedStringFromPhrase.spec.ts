import { getHighlightedStringFromPhrase } from '../../src/helpers/getHighlightedStringFromPhrase'

describe('getHighlightedStringFromPhrase()', () => {
  test('getHighlightedStringFromPhrase()', () => {
    expect(getHighlightedStringFromPhrase('Luke Skywalker', 'sk')).toEqual([
      'Luke ',
      'Sk',
      'ywalker',
    ])
    expect(getHighlightedStringFromPhrase('Luke Skywalker Obiwan', 'ob')).toEqual([
      'Luke Skywalker ',
      'Ob',
      'iwan',
    ])
  })
})
