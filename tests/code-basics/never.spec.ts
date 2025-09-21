import fail from '../../src/code-basics/never'

describe('fail', () => {
  test('should throw an error with the provided message', () => {
    expect(() => fail('Test error message')).toThrow('Test error message')
  })
})
