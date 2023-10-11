import removeDuplicates, { type ArrayOfNumberAndString, } from '../../src/code-basics/type-annotations'

test('removeDuplicates', () => {
  expect(removeDuplicates([])).toEqual([])
  expect(removeDuplicates([ 2, 3, -100, -100, -100, ])).toEqual([ 2, 3, -100, ])
  expect(removeDuplicates([ 'as', 'good', 'as', 'it', 'gets', ])).toEqual([
    'as',
    'good',
    'it',
    'gets',
  ])
  expect(removeDuplicates([ 1, 1, 3, 'oops!', ])).toEqual([ 1, 3, 'oops!', ])
})

describe('removeDuplicates', () => {
  it('should remove duplicates from an array of numbers', () => {
    const input = [ 1, 2, 3, 2, 4, 5, 3, ]
    const expected = [ 1, 2, 3, 4, 5, ]

    expect(removeDuplicates(input)).toEqual(expected)
  })

  it('should remove duplicates from an array of strings', () => {
    const input = [ 'apple', 'banana', 'orange', 'banana', 'kiwi', ]
    const expected = [ 'apple', 'banana', 'orange', 'kiwi', ]

    expect(removeDuplicates(input)).toEqual(expected)
  })

  it('should remove duplicates from an array of numbers and strings', () => {
    const input = [ 1, 'apple', 2, 'banana', 'apple', 3, 'orange', 2, ]
    const expected = [ 1, 'apple', 2, 'banana', 3, 'orange', ]

    expect(removeDuplicates(input)).toEqual(expected)
  })

  it('should return an empty array when given an empty array', () => {
    const input: ArrayOfNumberAndString = []
    const expected: ArrayOfNumberAndString = []

    expect(removeDuplicates(input)).toEqual(expected)
  })
})
