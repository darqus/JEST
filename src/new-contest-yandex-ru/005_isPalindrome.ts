// https://new.contest.yandex.ru/contests/78574/problem?id=522056%2F2025_03_25%2FYVzJqqsTmF

/**
 * @description Функция проверяет, является ли строка палиндромом
 *
 * @param {string} str - Строка, которую необходимо проверить
 * @returns {boolean} Булево значение, является ли строка палиндромом
 */

type IsPalindromeFn = (str: string) => boolean

export const isPalindrome: IsPalindromeFn = (str) => {
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  let left = 0
  let right = cleaned.length - 1

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }

  return true
}
