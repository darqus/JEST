/**
 * Returns a fixed number. If the input value is already an integer, it is returned as is.
 * Otherwise, the input value is rounded to two decimal places.
 *
 * @param {number} value - The input value to be fixed.
 * @return {number} - The fixed number.
 */
export const getFixedNumber = (value: number): number =>
  Number.isInteger(value) ? value : Math.round((value + Number.EPSILON) * 100) / 100
