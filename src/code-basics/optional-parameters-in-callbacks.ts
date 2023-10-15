// https://code-basics.com/ru/languages/typescript/lessons/optional-parameters-in-callbacks

// Опциональные параметры в функциях 13/53

/* Задание

Реализуйте функцию map(). Она должна принимать на вход массив чисел и колбек, который будет использоваться для преобразования каждого числа из массива в другое число. Функция возвращает массив с новыми числами:

map([3, 9], (n) => n - 3);
// [0, 6]

map([8, 9], (n) => n + 8);
// [16, 17]

Параметры функции:

  1. Массив чисел
  2. Анонимная функция, которая принимает на вход число и возвращает число. У этой функции есть необязательный параметр — индекс элемента в массиве

map([8, 9], (n, index) => index + n);
// [8, 10] */

// BEGIN (write your solution here)
const map = (set: number[], callback: (n: number, idx?: number) => number) => {
  const result: number[] = []

  /* for (const [ i, ] of Object.entries(set)) {
    result.push(callback(set[i], +i))
  } */

  // set.forEach((n, index) => result.push(callback(n, index)))

  for (let i = 0; i < set.length; i++) {
    result.push(callback(set[i], i))
  }

  return result
}
// END

export default map
