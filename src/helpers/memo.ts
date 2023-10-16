/* const newCalc = (a, b) => {
  const memo = {};

  return function(a, b) {
      if (есть значение в кеше) {
          return значение
      }

      memo[`${a}|${b}`] = a + b
      return значение
  }
}

// Пример использования
const calcPlus = newCalc()
const calcPlus2 = newCalc

calcPlus(1, 2) // processing ... => 3

calcPlus(1, 2) // no processing => 3

calcPlus(0, 3) // processing ... => 3 */

/**
 * Memoize a function by caching its return values.
 * @param fn The function to be memoized.
 * @returns The memoized version of the function.
 */
export const memo = <T extends (...args: any[]) => any>(
  fn: T
): ((...args: Parameters<T>) => ReturnType<T>) => {
  const cache: Record<string, ReturnType<T>> = {}

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)

    if (cache[key]) {
      return cache[key]
    }

    const result = fn(...args)

    cache[key] = result

    return result
  }
}
