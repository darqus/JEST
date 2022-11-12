import { isPairBrackets } from '../../src/helpers/isPairBrackets'

describe('isPairBrackets()', () => {
  it('isPairBrackets()', () => {
    expect(isPairBrackets('()')).toEqual(true)
    expect(isPairBrackets('{()()[]}')).toEqual(true)
    expect(isPairBrackets('{[(])}')).toEqual(false)
  })
})
