// https://code-basics.com/ru/languages/typescript/lessons/function-as-parameter

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

const filter = (numbers: number[], isMatch: (n: number) => boolean): number[] => numbers.filter(isMatch)

// END

export default filter
