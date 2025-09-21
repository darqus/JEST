import forEach from '../../src/code-basics/void'

describe('forEach', () => {
  const result: number[] = []

  test('should forEach [] equal []', () => {
    forEach([], (n: number) => result.push(n))
    expect(result).toEqual([])
  })

  test('should forEach [ 3, 9, ] equal [ 4, 10, ]', () => {
    const result2: number[] = []

    forEach([3, 9], (n: number) => result2.push(n + 1))
    expect(result2).toEqual([4, 10])
  })

  test('should forEach [ 8, 9, ] equal [ 8, 10, ]', () => {
    const result3: number[] = []

    forEach([8, 9], (n: number, i) => result3.push(n + i))
    expect(result3).toEqual([8, 10])
  })
})
