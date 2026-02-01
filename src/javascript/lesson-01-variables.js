/**
 * Урок 1: Переменные и типы данных
 *
 * Этот файл содержит практические задачи для изучения переменных и типов данных в JavaScript.
 * Каждая функция - заглушка, которую нужно реализовать.
 */

/**
 * Задача 1: Объявление переменных
 *
 * Объяви переменные тремя разными способами:
 * - varVariable - используя var (старая переменная, функциональная область видимости)
 * - letVariable - используя let (современная переменная, блочная область видимости)
 * - constVariable - используя const (константа, нельзя переопределить)
 *
 * Присвой каждой переменной разные значения (например, строку, число, boolean).
 *
 * @returns {Object} Объект с тремя свойствами: varVariable, letVariable, constVariable
 */
const declareVariables = () => {
  // TODO: Объяви переменные var, let, const и верни их в объекте
  var varVariable = true
  let letVariable = 0
  const constVariable = 'test'
  return { varVariable, letVariable, constVariable }
}

/**
 * Задача 2: Проверка типов данных
 *
 * Используй оператор typeof для определения типа переданного значения.
 * typeof возвращает строку: 'string', 'number', 'boolean', 'undefined', 'object', 'function', 'bigint', 'symbol'
 *
 * @param {*} value - Любое значение для проверки типа
 * @returns {string} Строка с названием типа (например, 'string', 'number')
 */
const checkTypes = (value) => {
  // TODO: Верни тип значения с помощью typeof
  const returnedType = typeof value
  return returnedType
}

/**
 * Задача 3: Сравнение переменных
 *
 * Сравни два значения двумя способами:
 * - looseEquality (==) - нестрогое сравнение с приведением типов
 * - strictEquality (===) - строгое сравнение без приведения типов
 *
 * Например: 5 == '5' вернет true, а 5 === '5' вернет false
 *
 * @param {*} a - Первое значение для сравнения
 * @param {*} b - Второе значение для сравнения
 * @returns {Object} Объект с двумя свойствами:
 *   - looseEquality: результат сравнения a == b
 *   - strictEquality: результат сравнения a === b
 */
const compareVariables = (a, b) => {
  // TODO: Верни объект с результатами сравнений == и ===
  const looseEquality = a == b
  const strictEquality = a === b

  return { looseEquality, strictEquality }
}

/**
 * Задача 4: Преобразование типов
 *
 * Продемонстрируй явное преобразование типов:
 * - stringToNumber: преобразуй строку '42' в число
 * - numberToString: преобразуй число 100 в строку
 * - valueToBoolean: преобразуй строку 'hello' в boolean
 * - falsyToBoolean: преобразуй пустую строку '' в boolean
 *
 * Используй функции: Number(), String(), Boolean()
 *
 * @returns {Object} Объект с четырьмя свойствами:
 *   - stringToNumber: число 42
 *   - numberToString: строка '100'
 *   - valueToBoolean: true
 *   - falsyToBoolean: false
 */
const typeConversions = () => {
  // TODO: Выполни явное преобразование типов и верни результаты
  const stringToNumber = Number(42)
  const numberToString = String(100)
  const valueToBoolean = Boolean('hello')
  const falsyToBoolean = Boolean('')

  return { stringToNumber, numberToString, valueToBoolean, falsyToBoolean }
}

/**
 * Задача 5: Шаблонные строки
 *
 * Используй шаблонные строки (template literals) с обратными кавычками ``
 * для создания приветственного сообщения.
 *
 * Формат: "Привет, {name}! Тебе {age} лет."
 *
 * @param {string} name - Имя человека
 * @param {number} age - Возраст человека
 * @returns {string} Приветственное сообщение
 */
const templateString = (name, age) => {
  // TODO: Используй шаблонную строку для формирования приветствия
  const greeting = `Привет, ${name}! Тебе ${age} лет.`

  return greeting
}

export { checkTypes, compareVariables, declareVariables, templateString, typeConversions }
