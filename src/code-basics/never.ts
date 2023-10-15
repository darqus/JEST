// https://code-basics.com/ru/languages/typescript/lessons/never

// Тип never (возврат из функции) 15/53

/* Задание

Реализуйте функцию fail(), которая выбрасывает любое исключение. Пропишете ее возвращаемый тип явно. */

// BEGIN (write your solution here)
const fail = (message: string): never => {
  throw new Error(message)
}
// END

export default fail
