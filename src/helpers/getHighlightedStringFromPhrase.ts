const getFirstLettersOfWord = (phrase: string, string: string) =>
  phrase
    ?.split(' ')
    ?.find((it) => it.toLowerCase().startsWith(string.toLowerCase()))
    ?.substring(0, string?.length)

export const getHighlightedStringFromPhrase = (
  phrase: string,
  string: string
) => {
  if (!phrase && !string) return

  const firstLettersOfWord = getFirstLettersOfWord(phrase, string)
  const slpittedPhrase = phrase.split(firstLettersOfWord)
  const result = [ slpittedPhrase[0], firstLettersOfWord, slpittedPhrase[1], ]

  return result
}
