// https://code-basics.com/ru/languages/typescript/lessons/any

// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

// Тип Any 10/53

/* Задание

Реализуйте функцию getParams(), которая принимает на вход строку запроса (query string) и возвращает параметры в виде объекта:

getParams('per=10&page=5');
// { per: '10', page: '5' }
getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' } */

/**
 * Parses the given paramsString and returns an object with the parsed parameters.
 *
 * @param paramsString - The string containing the parameters.
 * @returns An object with the parsed parameters.
 */
/* const getParams = (paramsString: string): Record<string, string> =>
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
