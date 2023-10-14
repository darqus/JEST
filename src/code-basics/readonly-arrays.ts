// https://code-basics.com/ru/languages/typescript/lessons/readonly-arrays

// Массивы только для чтения 23/53

/* Задание

Реализуйте функцию reverse(), которая переворачивает массив. Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке. Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse().

reverse([1, 2, 8]); // [8, 2, 1]
reverse([10, 33, 7, 0]); // [0, 7, 33, 10] */

// BEGIN (write your solution here)
/* const reverse = <T>(arr: readonly T[]): readonly T[] => {
  const reversed: T[] = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }

  return reversed
} */

const reverse = (array: readonly number[]): number[] => array.map((_, index) => array[array.length - 1 - index])
// END

export default reverse
