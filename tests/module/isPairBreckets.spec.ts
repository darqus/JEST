import { isPairBreckets } from '../../src/helpers/isPairBreckets'

describe('isPairBreckets()', () => {
  it('isPairBreckets()', () => {
    expect(isPairBreckets('()')).toEqual(true)
    expect(isPairBreckets('{()()[]}')).toEqual(true)
    expect(isPairBreckets('{[(])}')).toEqual(false)
  })
})
