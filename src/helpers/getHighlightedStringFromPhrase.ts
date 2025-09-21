/**
 * Returns the first letters of a word in a given phrase that match a search string.
 *
 * @param {string} phrase - The phrase to search within.
 * @param {string} searchString - The string to search for in the phrase.
 * @returns {string | undefined} - The first letters of the matching word, or undefined if no match is found.
 */
const getFirstLetters = (phrase: string, searchString: string): string | undefined => {
  const words: string[] = phrase.split(' ')
  const matchingWord: string | undefined = words.find((word: string) =>
    word.toLowerCase().startsWith(searchString.toLowerCase())
  )

  return matchingWord ? matchingWord.substring(0, searchString.length) : undefined
}

/**
 * Generates a highlighted string from a given phrase and string.
 *
 * @param {string} phrase - The phrase to search for in the string.
 * @param {string} string - The string to search within.
 * @returns {string[]} An array containing the highlighted string.
 */
export const getHighlightedStringFromPhrase = (phrase: string, string: string): string[] => {
  const firstLetters: string = getFirstLetters(phrase, string)
  const splittedPhrase: string[] = phrase.split(firstLetters)
  const result: string[] = [splittedPhrase[0], firstLetters, splittedPhrase[1]]

  return result
}
