// https://code-basics.com/ru/languages/typescript/lessons/rest-spread

// Rest и Spread 18/53

/* Задание

Определите функцию max(), которая отличается от примера из урока только тем, что у нее первый параметр обязательный.

Например:

max(1,2,3);
max(234); */

// BEGIN (write your solution here)
const max = (num: number, ...numbers: number[]): number => {
  const set = [ num, ...numbers, ]

  return Math.max(...set)
}
// END

export default max
