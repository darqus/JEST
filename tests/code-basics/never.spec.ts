import { describe, it, expect, } from '@jest/globals'

import fail from '../../src/code-basics/never'

describe('fail', () => {
  it('should throw an error', () => {
    expect(() => fail()).toThrowError('error')
  })
})
