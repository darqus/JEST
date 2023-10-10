// https://code-basics.com/ru/languages/typescript/lessons/function-overloads

/* Задание

Реализуйте функцию newYearCongratulate(), которая аналогична примеру на Kotlin из теории:

sayHello('John'); // Hi John! Happy New Year!
sayHello(2023, 'Mila'); // Hi Mila! Happy New Year 2023! */

// BEGIN (write your solution here)
function newYearCongratulate (name: string): string

function newYearCongratulate (year: number, name: string): string

function newYearCongratulate (param1: number | string, param2?: string): string {
  return typeof param1 === 'number'
    ? `Hi ${param2}! Happy New Year ${param1}!`
    : `Hi ${param1}! Happy New Year!`
}

// END

export default newYearCongratulate
