// https://code-basics.com/ru/languages/typescript/lessons/optional-parameters-in-callbacks

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
