// https://code-basics.com/ru/languages/typescript/lessons/union-types

// Объединения (Union Types) 26/53

/* Задание

Реализуйте функцию lastIndex(str, char), которая возвращает индекс последнего вхождения символа в строку или null, если такого символа нет.

const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null */

// BEGIN (write your solution here)
/* const lastIndex = (str: string, char: string): number | null => str.lastIndexOf(char) === -1 ? null : str.lastIndexOf(char) */

/**
 * Returns the last index of a character in a string.
 *
 * @param str - The string to search in.
 * @param char - The character to search for.
 * @returns The last index of the character in the string, or null if the character is not found.
 */
const lastIndex = (str: string, char: string): number | null => {
  const index = str.lastIndexOf(char)

  return index === -1 ? null : index
}
// END

export default lastIndex
