// https://code-basics.com/ru/languages/typescript/lessons/void

// BEGIN (write your solution here)
const forEach = (set: number[], callback: (n: number, index: number) => void): void => {
  set.forEach((n, index) => { callback(n, index) })
}
// END

export default forEach
