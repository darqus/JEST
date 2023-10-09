// https://code-basics.com/ru/languages/typescript/lessons/rest-spread#editor

// BEGIN (write your solution here)
export const max = (num: number, ...numbers: number[]): number => {
  const set = [ num, ...numbers, ]

  return Math.max(...set)
}
// END
