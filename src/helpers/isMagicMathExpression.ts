// const MAGIC_STRINGS = ['000000000000000', '00000000000000']
const RE_MAGIC_MATH_EXPRESSION = /[0]{14,15}/

export const isMagicMathExpression = (prop: number) =>
  RE_MAGIC_MATH_EXPRESSION.test(prop.toString())
