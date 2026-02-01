/**
 * Урок 5: Циклы (for, while, do...while, for...of, for...in)
 *
 * Этот файл содержит практические задачи для изучения циклов в JavaScript:
 * - for - классический цикл с счётчиком
 * - while - цикл с предусловием
 * - do...while - цикл с постусловием
 * - for...of - для итерации по итерируемым объектам
 * - for...in - для перебора ключей объекта
 * - Вложенные циклы для работы с многомерными структурами
 */

/**
 * Задача 1: Сумма чисел от 1 до n
 *
 * Используя цикл for, посчитай сумму чисел от 1 до n.
 *
 * @param {number} n - Верхняя граница диапазона (включительно)
 * @returns {number} Сумма чисел от 1 до n
 */
const sumWithFor = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

/**
 * Задача 2: Факториал числа
 *
 * Используя цикл while, вычисли факториал числа n.
 * Факториал n! = n * (n-1) * (n-2) * ... * 1
 * 0! = 1
 *
 * @param {number} n - Число для вычисления факториала
 * @returns {number} Факториал числа n
 */
const factorialWithWhile = (n) => {
  let result = 1
  let i = n
  while (i > 1) {
    result *= i
    i--
  }
  return result
}

/**
 * Задача 3: Поиск первого положительного числа с конца
 *
 * Используя do...while, найди первое положительное число в массиве,
 * начиная с конца массива.
 *
 * @param {number[]} numbers - Массив чисел
 * @returns {number | null} Первое положительное число с конца или null
 */
const findFirstPositiveWithDoWhile = (numbers) => {
  if (numbers.length === 0) {
    return null
  }

  let index = numbers.length - 1
  let found = null

  do {
    if (numbers[index] > 0) {
      found = numbers[index]
    }
    index--
  } while (found === null && index >= 0)

  return found
}

/**
 * Задача 4: Сумма элементов массива
 *
 * Используя for...of, посчитай сумму всех элементов массива.
 *
 * @param {number[]} numbers - Массив чисел
 * @returns {number} Сумма элементов массива
 */
const sumArrayWithForOf = (numbers) => {
  let sum = 0
  for (const num of numbers) {
    sum += num
  }
  return sum
}

/**
 * Задача 5: Подсчёт собственных ключей объекта
 *
 * Используя for...in, посчитай количество собственных ключей объекта,
 * исключая унаследованные свойства из прототипа.
 *
 * @param {object} obj - Объект для подсчёта ключей
 * @returns {number} Количество собственных ключей объекта
 */
const countObjectKeysWithForIn = (obj) => {
  let count = 0
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      count++
    }
  }
  return count
}

/**
 * Задача 6: Таблица умножения
 *
 * Используя вложенные циклы for, создай таблицу умножения
 * размером size x size.
 *
 * @param {number} size - Размер таблицы умножения
 * @returns {number[][]} Двумерный массив с таблицей умножения
 */
const generateMultiplicationTable = (size) => {
  const table = []
  for (let i = 1; i <= size; i++) {
    const row = []
    for (let j = 1; j <= size; j++) {
      row.push(i * j)
    }
    table.push(row)
  }
  return table
}

export {
  countObjectKeysWithForIn,
  factorialWithWhile,
  findFirstPositiveWithDoWhile,
  generateMultiplicationTable,
  sumArrayWithForOf,
  sumWithFor,
}
