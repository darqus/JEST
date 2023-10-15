// https://code-basics.com/ru/languages/typescript/lessons/unknown

// Тип unknown 16/53

/* Задание

Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом. Эта функция считает, что массив не объект:

isPlainObject(1); // false
isPlainObject('hexlet'); // false
isPlainObject({}); // true
isPlainObject({ name: 'code-basics' }); // true
isPlainObject([1, 8]); // false */

// BEGIN (write your solution here)
const isPlainObject = (obj: unknown): obj is Record<string, unknown> => typeof obj === 'object' && obj !== null && !Array.isArray(obj)
// END

export default isPlainObject
