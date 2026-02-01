/**
 * Урок 7: Массивы (создание, методы, итерация)
 *
 * Этот файл содержит практические задачи для изучения массивов в JavaScript:
 * - Создание массивов и основные методы (push, pop, shift, unshift, splice)
 * - Методы преобразования (map, filter, reduce)
 * - Поиск в массивах (find, findIndex)
 * - Сортировка и реверс (sort, reverse)
 * - Выравнивание и объединение (flat, join)
 * - Методы проверки (includes, some, every)
 */

/**
 * Задача 1: Основные методы массива
 *
 * Создай массив и продемонстрируй основные методы манипуляции:
 * push (добавление в конец), pop (удаление с конца),
 * shift (удаление с начала), unshift (добавление в начало),
 * splice (удаление/вставка по индексу).
 *
 * @returns {{pushResult: number[], popResult: number, shiftResult: number,
 *   unshiftResult: number[], spliceResult: number[]}} Объект с результатами каждой операции
 */
const createArrayMethods = () => {
  const arr = [1, 2, 3]

  // push - добавляет элемент в конец, возвращает новую длину
  arr.push(4)
  const pushResult = [...arr]

  // pop - удаляет последний элемент, возвращает удалённый элемент
  const popResult = arr.pop()

  // shift - удаляет первый элемент, возвращает удалённый элемент
  const shiftResult = arr.shift()

  // unshift - добавляет элемент в начало, возвращает новую длину
  arr.unshift(0)
  const unshiftResult = [...arr]

  // splice - удаляет/добавляет элементы по индексу
  // Удаляем 1 элемент с индекса 1 и вставляем 5, 6
  arr.splice(1, 1, 5, 6)
  const spliceResult = [...arr]

  return {
    pushResult,
    popResult,
    shiftResult,
    unshiftResult,
    spliceResult,
  }
}

/**
 * Задача 2: Преобразование массива
 *
 * Используй методы map, filter, reduce для преобразования массива чисел:
 * - map: создаёт новый массив с удвоенными значениями
 * - filter: создаёт массив только с чётными числами
 * - reduce: вычисляет сумму всех элементов
 *
 * @param {number[]} numbers - Массив чисел для преобразования
 * @returns {{doubled: number[], evens: number[], sum: number}} Объект с результатами преобразований
 */
const transformArray = (numbers) => {
  const doubled = numbers.map((n) => n * 2)
  const evens = numbers.filter((n) => n % 2 === 0)
  const sum = numbers.reduce((acc, n) => acc + n, 0)

  return { doubled, evens, sum }
}

/**
 * Задача 3: Поиск в массиве
 *
 * Используй методы find и findIndex для поиска пользователя по id
 * в массиве объектов.
 *
 * @param {{id: number, name: string}[]} users - Массив объектов пользователей
 * @param {number} searchId - ID для поиска
 * @returns {{user: {id: number, name: string}|undefined, index: number}} Объект с найденным
 *   пользователем и его индексом
 */
const findInArray = (users, searchId) => {
  const user = users.find((u) => u.id === searchId)
  const index = users.findIndex((u) => u.id === searchId)

  return { user, index }
}

/**
 * Задача 4: Сортировка и реверс
 *
 * Используй методы sort (с компаратором) и reverse для манипуляции массивом.
 * Создай отсортированные по возрастанию и убыванию версии массива,
 * а также реверсированную версию.
 *
 * @param {number[]} items - Массив чисел для сортировки
 * @returns {{ascending: number[], descending: number[], reversed: number[]}} Объект с
 *   отсортированными массивами
 */
const sortAndReverseArray = (items) => {
  // Создаём копии для избежания мутации исходного массива
  const ascending = [...items].sort((a, b) => a - b)
  const descending = [...items].sort((a, b) => b - a)
  const reversed = [...items].reverse()

  return { ascending, descending, reversed }
}

/**
 * Задача 5: Выравнивание и объединение массивов
 *
 * Используй метод flat для выравнивания вложенных массивов
 * и join для объединения элементов в строку с разделителем.
 *
 * @param {(number|number[])[]} arrays - Массив с вложенными массивами
 * @param {string} separator - Разделитель для join
 * @returns {string} Строка с объединёнными элементами
 */
const flattenAndJoinArrays = (arrays, separator) => {
  const flattened = arrays.flat()

  return flattened.join(separator)
}

/**
 * Задача 6: Проверка массива
 *
 * Используй методы includes, some, every для проверки содержимого массива.
 *
 * @param {number[]} array - Массив чисел для проверки
 * @returns {{hasFive: boolean, hasPositive: boolean, allPositive: boolean}} Объект с
 *   результатами проверок
 */
const checkArrayMethods = (array) => {
  const hasFive = array.includes(5)
  const hasPositive = array.some((n) => n > 0)
  const allPositive = array.every((n) => n > 0)

  return { hasFive, hasPositive, allPositive }
}

export {
  checkArrayMethods,
  createArrayMethods,
  findInArray,
  flattenAndJoinArrays,
  sortAndReverseArray,
  transformArray,
}
