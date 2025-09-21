import { filterEvenNumbers, filterOddNumbers } from '../../src/code-basics/anonymous-functions'

describe('filterEvenNumbers', () => {
  test('should return an empty array when the input set is empty', () => {
    const input: number[] = []
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual([])
  })

  test('should return an empty array when the input set contains only odd numbers', () => {
    const input: number[] = [1, 3, 5]
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual([])
  })

  test('should return the input set when the input set contains only even numbers', () => {
    const input: number[] = [2, 4, 6]
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual(input)
  })

  test('should return only the even numbers when the input set contains both odd and even numbers', () => {
    const input: number[] = [1, 2, 3, 4, 5, 6]
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual([2, 4, 6])
  })
})

describe('filterOddNumbers', () => {
  test('should return an array with only odd numbers', () => {
    const input = [1, 2, 3, 4, 5]
    const expectedOutput = [1, 3, 5]

    const result = filterOddNumbers(input)

    expect(result).toEqual(expectedOutput)
  })

  test('should return an empty array if the input is empty', () => {
    const input: number[] = []
    const expectedOutput: number[] = []

    const result = filterOddNumbers(input)

    expect(result).toEqual(expectedOutput)
  })

  test('should return an empty array if there are no odd numbers in the input', () => {
    const input = [2, 4, 6, 8, 10]
    const expectedOutput: number[] = []

    const result = filterOddNumbers(input)

    expect(result).toEqual(expectedOutput)
  })
})
