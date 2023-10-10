// https://code-basics.com/ru/languages/typescript/lessons/variables

/* Задание

Допишите тело функции repeat(), которая повторяет строку указанное количество раз. Функция должна возвращать полученный результат. Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.

repeat('hexlet', 2); // hexlethexlet
repeat('wo', 3); // wowowo */

function repeat (text: string, count: number) {
  // BEGIN (write your solution here)
  const result = []

  for (let i = 0; i < count; i++) {
    result.push(text)
  }

  return result.join('')
  // END
}

export default repeat
