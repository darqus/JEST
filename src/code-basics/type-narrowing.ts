// https://code-basics.com/ru/languages/typescript/lessons/type-narrowing

// Сужение типа (Narrowing) 20/53

/* Задание

Реализуйте функцию last(), которая извлекает последний элемент из переданного значения. Значением может быть строка или число. Функция возвращает значение того же типа, которое было передано в качестве параметра:

// Передаем в качестве параметра строку
// Функция возвращает строку
last('hexlet'); // t

// Передаем в качестве параметра число
// Функция возвращает число
last(12345); // 5 */

// BEGIN (write your solution here)
const last = (value: string | number): string | number => {
  switch (typeof value) {
    case 'string': {
      return value.slice(-1)
    }

    default: {
      return Number(value.toString().slice(-1))
    }
  }
}
// END

export default last
