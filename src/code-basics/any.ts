// https://code-basics.com/ru/languages/typescript/lessons/any

/* const getParams = (paramsString: string): Record<string, any> =>
  Array.from(new URLSearchParams(paramsString)).reduce((acc, [ key, value, ]) => {
    acc[key] = value

    return acc
  }, {}) */

/**
 * Parses the given paramsString and returns an object with the parsed parameters.
 *
 * @param paramsString - The string containing the parameters.
 * @returns An object with the parsed parameters.
 */
const getParams = (paramsString: string): Record<string, string> => {
  const params = Array.from(new URLSearchParams(paramsString))
  const parsedParams: Record<string, string> = {}

  for (const [ key, value, ] of params) {
    parsedParams[key] = value
  }

  return parsedParams
}
// END

export default getParams
