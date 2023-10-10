import filterEvenNumbers from '../../src/code-basics/anonymous-functions'

describe('filterEvenNumbers', () => {
  it('should return an empty array when the input set is empty', () => {
    const input: number[] = []
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual([])
  })

  it('should return an empty array when the input set contains only odd numbers', () => {
    const input: number[] = [ 1, 3, 5, ]
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual([])
  })

  it('should return the input set when the input set contains only even numbers', () => {
    const input: number[] = [ 2, 4, 6, ]
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual(input)
  })

  it('should return only the even numbers when the input set contains both odd and even numbers', () => {
    const input: number[] = [ 1, 2, 3, 4, 5, 6, ]
    const output: number[] = filterEvenNumbers(input)

    expect(output).toEqual([ 2, 4, 6, ])
  })
})
