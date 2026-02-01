/**
 * Урок 4: Условные операторы (if/else, switch, тернарный оператор)
 *
 * Этот файл содержит практические задачи для изучения условных операторов в JavaScript:
 * - if/else if/else - для проверки условий
 * - switch - для множественного выбора
 * - Тернарный оператор (? :) - для кратких условий
 * - Комбинированное использование условных операторов
 */

/**
 * Задача 1: Определение знака числа
 *
 * Используя if/else if/else определи знак числа:
 * - 'positive' для положительных чисел (> 0)
 * - 'negative' для отрицательных чисел (< 0)
 * - 'zero' для нуля (=== 0)
 *
 * @param {number} number - Число для проверки
 * @returns {string} Строка, описывающая знак числа
 */
const checkNumberSign = (number) => {
  if (number > 0) {
    return 'positive'
  } else if (number < 0) {
    return 'negative'
  } else {
    return 'zero'
  }
}

/**
 * Задача 2: Определение оценки по баллам
 *
 * Используя if/else верни оценку на основе числового балла:
 * - 90-100 = 'A' (отлично)
 * - 80-89 = 'B' (хорошо)
 * - 70-79 = 'C' (удовлетворительно)
 * - 60-69 = 'D' (плохо)
 * - < 60 = 'F' (неудовлетворительно)
 *
 * @param {number} score - Числовой балл (0-100)
 * @returns {string} Буквенная оценка
 */
const getGradeDescription = (score) => {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

/**
 * Задача 3: Название дня недели по номеру
 *
 * Используя switch верни название дня недели по номеру:
 * - 1 = 'Monday'
 * - 2 = 'Tuesday'
 * - 3 = 'Wednesday'
 * - 4 = 'Thursday'
 * - 5 = 'Friday'
 * - 6 = 'Saturday'
 * - 7 = 'Sunday'
 * - Для остальных значений верни 'Invalid day'
 *
 * @param {number} dayNumber - Номер дня недели (1-7)
 * @returns {string} Название дня недели или 'Invalid day'
 */
const getDayName = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      return 'Invalid day'
  }
}

/**
 * Задача 4: Определение сезона по месяцу
 *
 * Используя switch без break для группировки случаев,
 * верни сезон по номеру месяца:
 * - 12, 1, 2 = 'Winter' (зима)
 * - 3, 4, 5 = 'Spring' (весна)
 * - 6, 7, 8 = 'Summer' (лето)
 * - 9, 10, 11 = 'Autumn' (осень)
 *
 * @param {number} month - Номер месяца (1-12)
 * @returns {string} Название сезона
 */
const getSeason = (month) => {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'Winter'
    case 3:
    case 4:
    case 5:
      return 'Spring'
    case 6:
    case 7:
    case 8:
      return 'Summer'
    case 9:
    case 10:
    case 11:
      return 'Autumn'
    default:
      return 'Invalid month'
  }
}

/**
 * Задача 5: Поиск максимума из трёх чисел
 *
 * Используя вложенные тернарные операторы найди максимальное
 * из трёх чисел.
 *
 * Тернарный оператор: condition ? valueIfTrue : valueIfFalse
 *
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @param {number} c - Третье число
 * @returns {number} Максимальное из трёх чисел
 */
const findMaxTernary = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c)

/**
 * Задача 6: Проверка доступа
 *
 * Комбинированное использование условных операторов:
 * проверь, может ли пользователь получить доступ.
 *
 * Правила доступа:
 * - Доступ разрешён, если возраст >= 18
 * - Или если возраст >= 16 И есть разрешение (hasPermission === true)
 *
 * @param {number} age - Возраст пользователя
 * @param {boolean} hasPermission - Есть ли разрешение
 * @returns {boolean} true если доступ разрешён, иначе false
 */
const checkEligibility = (age, hasPermission) => age >= 18 || (age >= 16 && hasPermission === true)

export {
  checkEligibility,
  checkNumberSign,
  findMaxTernary,
  getDayName,
  getGradeDescription,
  getSeason,
}
