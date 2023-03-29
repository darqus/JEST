export const getFixedNumber = (value: number) =>
  Number.isInteger(value)
    ? value
    : Math.round((value + Number.EPSILON) * 100) / 100
