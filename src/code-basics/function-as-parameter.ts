// https://code-basics.com/ru/languages/typescript/lessons/function-as-parameter

// BEGIN (write your solution here)

const filter = (set: number[], predicate: (n: number) => boolean): number[] => {
  const result: number[] = []

  for (let i = 0; i < set.length; i++) {
    const number = set[i]

    if (predicate(number)) {
      result.push(number)
    }
  }

  return result
}
// END

export default filter
