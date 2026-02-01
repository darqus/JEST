/**
 * Урок 6: Функции (объявление, выражения, стрелочные функции, параметры)
 *
 * Этот файл содержит практические задачи для изучения функций в JavaScript:
 * - Function Declaration - классическое объявление функции
 * - Function Expression - функциональное выражение
 * - Arrow Functions - стрелочные функции
 * - Default Parameters - параметры по умолчанию
 * - Rest Parameters - оставшиеся параметры
 * - Higher-Order Functions - функции высшего порядка и замыкания
 */

/**
 * Задача 1: Function Declaration
 *
 * Создай функцию через function declaration, которая приветствует по имени.
 * Function declaration имеет имя и может быть вызвана до объявления (hoisting).
 *
 * @param {string} name - Имя для приветствия
 * @returns {Function} Функция, которая возвращает приветственное сообщение
 */
const createFunctionDeclaration = (name) => {
  function greet() {
    return `Hello, ${name}!`
  }

  return greet
}

/**
 * Задача 2: Function Expression
 *
 * Создай функцию через function expression для сложения двух чисел.
 * Function expression создаёт функцию и присваивает её переменной.
 *
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Результат сложения
 */
const createFunctionExpression = (a, b) => {
  const add = function (x, y) {
    return x + y
  }

  return add(a, b)
}

/**
 * Задача 3: Arrow Function
 *
 * Создай стрелочную функцию для возведения числа в степень.
 * Стрелочные функции имеют краткий синтаксис и не имеют своего this.
 *
 * @param {number} base - Основание степени
 * @param {number} exponent - Показатель степени
 * @returns {number} Результат возведения в степень
 */
const createArrowFunction = (base, exponent) => {
  const power = (b, e) => b ** e

  return power(base, exponent)
}

/**
 * Задача 4: Default Parameters
 *
 * Используй параметры по умолчанию для создания приветствия.
 * Если greeting не передан, используется значение по умолчанию.
 *
 * @param {string} name - Имя для приветствия
 * @param {string} [greeting='Hello'] - Приветствие (по умолчанию 'Hello')
 * @returns {string} Строка приветствия
 */
const useDefaultParameters = (name, greeting = 'Hello') => `${greeting}, ${name}!`

/**
 * Задача 5: Rest Parameters
 *
 * Используй rest параметры для сбора оставшихся аргументов в массив.
 * Rest parameters позволяют принять произвольное количество аргументов.
 *
 * @param {string} first - Первый элемент
 * @param {...string} rest - Оставшиеся элементы
 * @returns {{first: string, rest: string[], count: number}} Объект с первым элементом,
 *   массивом оставшихся и их количеством
 */
const useRestParameters = (first, ...rest) => ({
  first,
  rest,
  count: rest.length,
})

/**
 * Задача 6: Higher-Order Function (Closure)
 *
 * Создай функцию высшего порядка, возвращающую функцию-множитель.
 * Замыкание позволяет возвращённой функции "запомнить" factor.
 *
 * @param {number} factor - Множитель
 * @returns {Function} Функция, умножающая число на factor
 */
const createMultiplier = (factor) => (number) => number * factor

export {
  createArrowFunction,
  createFunctionDeclaration,
  createFunctionExpression,
  createMultiplier,
  useDefaultParameters,
  useRestParameters,
}
