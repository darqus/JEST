/**
 * Урок 2: Типы данных и операторы typeof, instanceof
 *
 * Этот файл содержит практические задачи для изучения типов данных в JavaScript,
 * операторов typeof и instanceof, а также конвертации типов.
 */

/**
 * Задача 1: Примитивные типы данных
 *
 * Верни объект с примерами всех примитивных типов JavaScript:
 * - string: строковое значение
 * - number: числовое значение
 * - boolean: логическое значение
 * - null: нулевое значение
 * - undefined: неопределенное значение
 * - symbol: символ
 * - bigint: большое целое число
 *
 * @returns {Object} Объект со всеми примитивными типами
 */
const getPrimitiveTypes = () => ({
  string: 'Hello, World!',
  number: 42,
  boolean: true,
  null: null,
  undefined: undefined,
  symbol: Symbol('unique'),
  bigint: 9007199254740991n,
})

/**
 * Задача 2: Проверка типа с помощью typeof
 *
 * Используй оператор typeof для определения типа переданного значения.
 * typeof возвращает строку: 'string', 'number', 'boolean', 'undefined',
 * 'object', 'function', 'bigint', 'symbol'
 *
 * @param {*} value - Любое значение для проверки типа
 * @returns {string} Строка с названием типа
 */
const checkType = (value) => typeof value

/**
 * Задача 3: Проверка ссылочного типа
 *
 * Проверь, является ли значение ссылочным типом (object, array, function, date, regexp).
 * Примитивные типы (string, number, boolean, null, undefined, symbol, bigint) не являются ссылочными.
 * Обрати внимание: typeof null возвращает 'object' - это известный баг JavaScript.
 *
 * @param {*} value - Значение для проверки
 * @returns {boolean} true если значение ссылочного типа, иначе false
 */

/* решение в лоб
const isReferenceType = (value) => {
  const type = typeof value

  return value !== null && ['object', 'function'].includes(type)
} */

/* более элегантное решение
Как это работает:
Object(value) приводит значение к объекту, если оно примитивное.
Для примитивов (string, number, boolean, null, undefined, symbol, bigint) Object(value) !== value.
Для ссылочных типов (object, array, function, Date и т.д.) Object(value) === value, потому что они уже являются объектами.
✅ Таким образом, Object(value) === value возвращает true только для ссылочных типов.
✅ null и undefined корректно обрабатываются (возвращают false). */
const isReferenceType = (value) => Object(value) === value

/**
 * Задача 4: Сравнение типов двух значений
 *
 * Сравни типы двух значений и верни объект с результатами.
 * Используй typeof для определения типов.
 *
 * @param {*} a - Первое значение для сравнения
 * @param {*} b - Второе значение для сравнения
 * @returns {Object} Объект с результатами:
 *   - sameType: boolean - одинаковые ли типы
 *   - typeA: string - тип первого значения
 *   - typeB: string - тип второго значения
 */
const compareTypes = (a, b) => {
  const typeA = typeof a
  const typeB = typeof b

  return {
    sameType: typeA === typeB,
    typeA,
    typeB,
  }
}

/**
 * Задача 5: Детальная проверка типа
 *
 * Выполни детальную проверку типа с использованием typeof и instanceof.
 * Верни объект с информацией о типе значения.
 *
 * @param {*} value - Значение для проверки
 * @returns {Object} Объект с деталями:
 *   - type: string - результат typeof
 *   - isArray: boolean - является ли значение массивом
 *   - isNull: boolean - является ли значение null
 *   - isDate: boolean - является ли значение датой
 */
const getTypeDetails = (value) => ({
  type: typeof value,
  isArray: Array.isArray(value),
  isNull: value === null,
  isDate: value instanceof Date,
})

/**
 * Задача 6: Конвертация типов
 *
 * Конвертируй значение в указанный тип.
 * Поддерживаемые типы: 'string', 'number', 'boolean'
 *
 * @param {*} value - Значение для конвертации
 * @param {string} targetType - Целевой тип ('string', 'number', 'boolean')
 * @returns {*} Результат конвертации
 * @throws {Error} Если указан неподдерживаемый тип
 */
const convertType = (value, targetType) => {
  const conversions = {
    string: () => String(value),
    number: () => Number(value),
    boolean: () => Boolean(value),
  }

  const converter = conversions[targetType]

  if (converter === undefined) {
    throw new Error(`Unsupported target type: ${targetType}`)
  }

  return converter()
}

export { checkType, compareTypes, convertType, getPrimitiveTypes, getTypeDetails, isReferenceType }
