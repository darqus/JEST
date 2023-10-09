// https://code-basics.com/ru/languages/typescript/lessons/never

// BEGIN (write your solution here)
const fail = (): never => {
  throw new Error('error')
}
// END

export default fail
