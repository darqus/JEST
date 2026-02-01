/**
 * Урок 3: Операторы (арифметические, сравнения, логические)
 *
 * Этот файл содержит практические задачи для изучения операторов в JavaScript:
 * - Арифметические операторы (+, -, *, /, %, **)
 * - Операторы сравнения (==, ===, !=, !==, >, <, >=, <=)
 * - Логические операторы (&&, ||, !)
 * - Операторы присваивания (+=, -=, *=, /=, %=)
 * - Оператор нулевого слияния (??)
 * - Опциональная цепочка (?.)
 */

/**
 * Задача 1: Арифметические операции
 *
 * Выполни все арифметические операции над двумя числами:
 * - addition (+): сложение
 * - subtraction (-): вычитание
 * - multiplication (*): умножение
 * - division (/): деление
 * - remainder (%): остаток от деления
 * - exponentiation (**): возведение в степень
 *
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {Object} Объект с результатами всех операций
 */
const calculateWithArithmetic = (a, b) => ({
  addition: a + b,
  subtraction: a - b,
  multiplication: a * b,
  division: a / b,
  remainder: a % b,
  exponentiation: a ** b,
})

/**
 * Задача 2: Операторы сравнения
 *
 * Сравни два значения всеми операторами сравнения:
 * - looseEqual (==): нестрогое равенство (с приведением типов)
 * - strictEqual (===): строгое равенство (без приведения типов)
 * - looseNotEqual (!=): нестрогое неравенство
 * - strictNotEqual (!==): строгое неравенство
 * - greaterThan (>): больше
 * - lessThan (<): меньше
 * - greaterOrEqual (>=): больше или равно
 * - lessOrEqual (<=): меньше или равно
 *
 * @param {*} a - Первое значение для сравнения
 * @param {*} b - Второе значение для сравнения
 * @returns {Object} Объект с результатами всех сравнений
 */
const compareValues = (a, b) => ({
  looseEqual: a == b,
  strictEqual: a === b,
  looseNotEqual: a != b,
  strictNotEqual: a !== b,
  greaterThan: a > b,
  lessThan: a < b,
  greaterOrEqual: a >= b,
  lessOrEqual: a <= b,
})

/**
 * Задача 3: Логические операторы
 *
 * Примени логические операторы к трём булевым значениям.
 * Демонстрация различных комбинаций:
 * - and: логическое И (&&)
 * - or: логическое ИЛИ (||)
 * - notA: логическое НЕ (!) для первого значения
 * - notB: логическое НЕ (!) для второго значения
 * - complexAnd: сложная комбинация с &&
 * - complexOr: сложная комбинация с ||
 * - mixed: смешанная комбинация && и ||
 *
 * @param {boolean} a - Первое булево значение
 * @param {boolean} b - Второе булево значение
 * @param {boolean} c - Третье булево значение
 * @returns {Object} Объект с результатами логических операций
 */
const applyLogicalOperators = (a, b, c) => ({
  and: a && b,
  or: a || b,
  notA: !a,
  notB: !b,
  complexAnd: a && b && c,
  complexOr: a || b || c,
  mixed: (a && b) || c,
  anotherMixed: a || (b && c),
})

/**
 * Задача 4: Операторы присваивания
 *
 * Демонстрация операторов присваивания с вычислением:
 * - additionAssign: += (прибавление)
 * - subtractionAssign: -= (вычитание)
 * - multiplicationAssign: *= (умножение)
 * - divisionAssign: /= (деление)
 * - remainderAssign: %= (остаток от деления)
 *
 * @param {number} initialValue - Начальное значение
 * @returns {Object} Объект с результатами каждой операции присваивания
 */
const useAssignmentOperators = (initialValue) => {
  let additionAssign = initialValue
  additionAssign += 10

  let subtractionAssign = initialValue
  subtractionAssign -= 5

  let multiplicationAssign = initialValue
  multiplicationAssign *= 2

  let divisionAssign = initialValue
  divisionAssign /= 2

  let remainderAssign = initialValue
  remainderAssign %= 3

  return {
    additionAssign,
    subtractionAssign,
    multiplicationAssign,
    divisionAssign,
    remainderAssign,
  }
}

/**
 * Задача 5: Оператор нулевого слияния (??)
 *
 * Используй оператор нулевого слияния (??) для установки значения по умолчанию.
 * Оператор ?? возвращает правый операнд, только если левый равен null или undefined.
 * В отличие от ||, он не пропускает falsy значения (0, '', false).
 *
 * @param {*} value - Проверяемое значение
 * @param {*} defaultValue - Значение по умолчанию
 * @returns {*} value если оно не null и не undefined, иначе defaultValue
 */
const checkNullishCoalescing = (value, defaultValue) => value ?? defaultValue

/**
 * Задача 6: Опциональная цепочка (?.)
 *
 * Используй оператор опциональной цепочки (?.) для безопасного доступа
 * к вложенным свойствам объекта. Если промежуточное свойство равно null
 * или undefined, оператор вернет undefined вместо ошибки.
 *
 * @param {Object} obj - Объект для доступа к свойствам
 * @param {string} path - Путь к свойству через точку (например, 'user.address.city')
 * @returns {*} Значение по пути или undefined
 */
const useOptionalChaining = (obj, path) => {
  const keys = path.split('.')
  let result = obj

  for (const key of keys) {
    result = result?.[key]
  }

  return result
}

export {
  applyLogicalOperators,
  calculateWithArithmetic,
  checkNullishCoalescing,
  compareValues,
  useAssignmentOperators,
  useOptionalChaining,
}
