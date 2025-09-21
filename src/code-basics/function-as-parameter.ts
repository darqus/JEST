// https://code-basics.com/ru/languages/typescript/lessons/function-as-parameter

// Функции как параметры 12/53

/* Задание

Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат. Последний будет использоваться для проверки каждого числа на соответствие требованиям:

const numbers = [1, -5, 2, 3, 4, 133];
filter(numbers, (n) => n > 3); // [4, 133]
filter(numbers, (n) => n % 2 == 0); // [2, 4]

Параметры функции:

  1. Массив чисел
  2. Анонимная функция, которая принимает на вход число и возвращает логическое значение */

// BEGIN (write your solution here)

/* const filter = (set: number[], predicate: (n: number) => boolean): number[] => {
  const result: number[] = []

  for (let i = 0; i < set.length; i++) {
    const number = set[i]

    if (predicate(number)) {
      result.push(number)
    }
  }

  return result
} */

const filter = (numbers: number[], isMatch: (n: number) => boolean): number[] =>
  numbers.filter(isMatch)

// END

export default filter
