// const MAGIC_STRINGS = ['000000000000000', '00000000000000' ,'999999999999999']
const RE_MAGIC_MATH_EXPRESSION = /[0,9]{14,15}/

/**
 * Checks if the given number is a magic math expression.
 *
 * @param {number} prop - The number to be checked.
 * @return {boolean} True if the number is a magic math expression, false otherwise.
 */
export const isMagicMathExpression = (prop: number): boolean =>
  RE_MAGIC_MATH_EXPRESSION.test(prop.toString())
