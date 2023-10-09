// https://code-basics.com/ru/languages/typescript/lessons/never

// BEGIN (write your solution here)
const fail = (message: string): never => {
  throw new Error(message)
}
// END

export default fail
