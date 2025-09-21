// https://code-basics.com/ru/languages/typescript/lessons/type-annotations

// Аннотации типов 21/53

/* Задание

Реализуйте функцию uniq(), которая убирает дубликаты из массива. Функция принимает на вход массив чисел и строк. Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента. Порядок значений результата определяется порядком их появления в массиве.

uniq([9, 9, 3, 8, 8]); // [9, 3, 8]
uniq(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
uniq([1, 1, 3, 'oops!']); // [1, 3, 'oops!'] */

// BEGIN (write your solution here)

export type ArrayOfNumberAndString = Array<number | string>

/**
 * Removes duplicates from an array of numbers and strings.
 *
 * @param {ArrayOfNumberAndString} array - The array to remove duplicates from.
 * @return {ArrayOfNumberAndString} The array with duplicates removed.
 */
const removeDuplicates = (array: ArrayOfNumberAndString): ArrayOfNumberAndString => {
  const uniqueArray: ArrayOfNumberAndString = []

  return array.reduce(
    (result, currentItem) => (result.includes(currentItem) ? result : [ ...result, currentItem ]),
    uniqueArray
  )
}

/* const uniq = (array: ArrayOfNumberAndString): ArrayOfNumberAndString => [ ...new Set(array), ] */
// END

export default removeDuplicates
