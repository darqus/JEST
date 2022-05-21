import { checkForMagicMathJS } from '../../src/helpers/checkForMagicMathJS'

describe('checkForMagicMathJS()', () => {
  it('checkForMagicMathJS()', () => {
    expect(checkForMagicMathJS('0.04000000000000001')).toEqual('0.04')
    expect(checkForMagicMathJS('0.020000000000000004')).toEqual('0.02')
  })
})
