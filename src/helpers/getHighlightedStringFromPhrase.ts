export const getHighlightedStringFromPhrase = (phrase: string, string: string) => {
  if (!phrase && !string) return

  const firtLettersOfWord = phrase
    ?.split(' ')
    ?.find((it) => it.toLowerCase().startsWith(string.toLowerCase()))
    ?.substring(0, string?.length) as string

  const slpittedPhrase = phrase.split(firtLettersOfWord)

  const result = [slpittedPhrase[0], firtLettersOfWord, slpittedPhrase[1]]

  return result
}
