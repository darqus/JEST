import { describe, it, expect, } from '@jest/globals'

import { removeFromArray, createUniqueArray, insertToArray, findIndexInArray, getTotalPrice, } from '../../src/helpers/arrayMethods'

describe('arrayMethods()', () => {
  it('removeFromArray()', () => {
    expect(removeFromArray([ 0, 2, 4, 5, ], 2)).toEqual([ 0, 4, 5, ])
    expect(removeFromArray([ 0, 2, 4, 5, ], 2, 4)).toEqual([ 0, 5, ])
  })

  it('createUniqueArray()', () => {
    expect(createUniqueArray([ 0, 0, 0, 2, 2, ])).toEqual([ 0, 2, ])
    expect(createUniqueArray([ 1, 1, 2, 5, ])).toEqual([ 1, 2, 5, ])
  })

  it('insertToArray()', () => {
    expect(insertToArray([ 0, 0, ], 1)).toEqual([ 0, 0, 1, ])
    expect(insertToArray([ 1, 2, 5, ], 6)).toEqual([ 1, 2, 5, 6, ])
    expect(insertToArray([ 1, 2, 5, ], 6, true)).toEqual([ 6, 1, 2, 5, ])
  })

  it('findIndexInArray()', () => {
    expect(findIndexInArray([ 1, 2, 5, ], (item) => item === 5)).toEqual(2)
  })

  it('getTotalPrice()', () => {
    expect(getTotalPrice([
      {
        id: 1,
        name: 'Лопата',
        price: 1000,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Удочка',
        price: 1200,
        quantity: 2,
      },
      {
        id: 3,
        name: 'Ведро',
        price: 500,
        quantity: 3,
      },
      {
        id: 4,
        name: 'Мороженое',
        price: 100,
        quantity: 8,
      },
    ])).toEqual(5700)
  })
})
