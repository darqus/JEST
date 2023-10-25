/**
 * Reverses a given word.
 *
 * @param word - The word to be reversed.
 * @returns The reversed word.
 */
export const reverse = (word: string): string =>
  word.split('')
    .reduceRight((acc: string[], item) => {
      acc.push(item)

      return acc
    }, []).join('')

/* export const reverse = (word: string): string => {
  // Split the word into an array of characters
  const reversed = word.split('')
    // Use reduceRight to iterate over the array in reverse order
    .reduceRight((acc: string[], item) => {
      // Push each character onto the accumulator array
      acc.push(item)

      return acc
    }, [])

  // Join the characters in the array back into a string
  return reversed.join('')
} */

/* export const reverse = (word: string) => {
  const wordArray = word.split('')
  const last = wordArray.length - 1

  const reversed = []

  for (let i = last; i > -1; i--) {
    reversed.push(wordArray[i])
  }

  return reversed.join('')
} */
