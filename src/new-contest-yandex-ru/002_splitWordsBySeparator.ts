// https://new.contest.yandex.ru/contests/78574/problem?id=2044747%2F2025_04_28%2Fpmr4ILhSO9

/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
export const splitWordsBySeparator = (words: string[], separator: string): string[] =>
  words.flatMap((word) => word.split(separator)).filter((word) => word !== '')
