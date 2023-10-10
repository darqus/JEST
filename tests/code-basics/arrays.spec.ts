import filterAnagrams from '../../src/code-basics/arrays'

describe('filterAnagrams', () => {
  it('should return an array of anagrams', () => {
    const anagram = 'listen'
    const listAnagram = [ 'enlist', 'silent', 'inlets', 'banana', ]

    const result = filterAnagrams(anagram, listAnagram)

    expect(result).toEqual([ 'enlist', 'silent', 'inlets', ])
  })

  it('should return an empty array if no anagrams are found', () => {
    const anagram = 'listen'
    const listAnagram = [ 'apple', 'banana', 'cherry', ]

    const result = filterAnagrams(anagram, listAnagram)

    expect(result).toEqual([])
  })
})
