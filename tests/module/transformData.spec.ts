import { getHighlightedStringFromPhrase } from '../../src/helpers/transformData'

describe('isPairBrackets()', () => {
  it('isPairBrackets()', () => {
    expect(getHighlightedStringFromPhrase('Luke Skywalker', 'lu')).toEqual([
      '',
      'Lu',
      'ke Skywalker',
    ])
    expect(getHighlightedStringFromPhrase('Luke Skywalker', 'sk')).toEqual([
      'Luke ',
      'Sk',
      'ywalker',
    ])
    expect(getHighlightedStringFromPhrase('Leia Organa', 'le')).toEqual([
      '',
      'Le',
      'ia Organa',
    ])
    expect(getHighlightedStringFromPhrase('Leia Organa', 'or')).toEqual([
      'Leia ',
      'Or',
      'gana',
    ])
    expect(getHighlightedStringFromPhrase('C-3PO', 'c')).toEqual([
      '',
      'C',
      '-3PO',
    ])
    expect(getHighlightedStringFromPhrase('R2-D2', 'r')).toEqual([
      '',
      'R',
      '2-D2',
    ])
    expect(getHighlightedStringFromPhrase('R5-D4', 'r')).toEqual([
      '',
      'R',
      '5-D4',
    ])
  })
})
