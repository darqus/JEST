export const isMatchesStringFromPhrase = (phrase: string, string: string) =>
  phrase
    .toLowerCase()
    .split(' ')
    .some((_it) => _it.startsWith(string.toLowerCase()))

const getFirstLettersOfWord = (phrase: string, string: string) =>
  !phrase && !string
    ? ''
    : phrase
      .split(' ')
      .find((_it: string) =>
        _it.toLowerCase().startsWith(string.toLowerCase())
      )
      .substring(0, string.length)

export const getHighlightedStringFromPhrase = (
  phrase: string,
  string: string
) => {
  let result: string[] = []

  if (!phrase && !string) {
    result = []
  }

  const firstLettersOfWord: string = getFirstLettersOfWord(phrase, string)
  const slpittedPhrase: string[] = phrase.split(firstLettersOfWord)

  result = [ slpittedPhrase[0], firstLettersOfWord, slpittedPhrase[1] ]

  return result
}

export const getIDfromApiUrl = (url: string) => +url.split('/').reverse()[1]
