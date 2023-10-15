// https://code-basics.com/ru/languages/typescript/lessons/void

// Тип Void 14/53

/* Задание

Попробуйте самостоятельно определить функцию forEach() для чисел:

forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]

Параметры функции:

  1.  Массив чисел
  2.  Анонимная функция, которая принимает на вход число и возвращает void. У этой функции есть необязательный параметр — индекс элемента в массиве

forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10 */

// BEGIN (write your solution here)
const forEach = (set: number[], callback: (n: number, index: number) => void): void => {
  set.forEach((n, index) => { callback(n, index) })
}
// END

export default forEach
