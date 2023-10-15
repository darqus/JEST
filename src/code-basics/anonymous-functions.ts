// https://code-basics.com/ru/languages/typescript/lessons/anonymous-functions

// Анонимные функции 5/53

/* Задание

Напишите функцию, которая возвращает массив четных чисел из массива numbers. */

// BEGIN (write your solution here)
export const filterEvenNumbers = (numberList: number[]): number[] => numberList.filter((number) => number % 2 === 0)

export const filterOddNumbers = (numberList: number[]): number[] => numberList.filter((number) => number % 2 !== 0)
// END
