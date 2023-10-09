import { describe, it, expect, } from '@jest/globals'

import lessonsCount from '../../src/code-basics/destructuring'

describe('lessonsCount', () => {
  it('should return 0 when lessons array is empty', () => {
    expect(lessonsCount({ lessons: [], })).toBe(0)
  })

  it('should return the number of lessons when lessons array is not empty', () => {
    expect(lessonsCount({ lessons: [ 'lesson1', 'lesson2', 'lesson3', ], })).toBe(3)
  })
})
