// https://new.contest.yandex.ru/contests/78574/problem?id=522056%2F2025_05_05%2Fr5uxNkHnO1

/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 *
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */
export const createCounter = (
  init: number
): {
  increment: () => number
  decrement: () => number
  reset: () => number
} => {
  let current = init
  const initialValue = init

  return {
    increment: () => {
      current++

      return current
    },
    decrement: () => {
      current--

      return current
    },
    reset: () => {
      current = initialValue

      return current
    },
  }
}
