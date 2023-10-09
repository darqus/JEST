// https://code-basics.com/ru/languages/typescript/lessons/unknown

// BEGIN (write your solution here)
const isPlainObject = (obj: unknown): obj is Record<string, unknown> => typeof obj === 'object' && obj !== null && !Array.isArray(obj)
// END

export default isPlainObject
