// https://code-basics.com/ru/languages/typescript/lessons/nullable

// Null и Undefined 27/53

/* Задание

Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением до второго числа после запятой. Если пришел null или undefined должна вернуться '$0.00'.

formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'
 */

/* const formatPrice = (price?: number | null): string => {
  if (price === null || price === undefined) {
    return '$0.00'
  }

  return `$${price.toFixed(2)}`
} */
const formatPrice = (price?: number | null): string =>
  price === null || price === undefined ? '$0.00' : `$${price.toFixed(2)}`
// END

export default formatPrice
