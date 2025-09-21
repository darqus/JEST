// https://code-basics.com/ru/languages/typescript/lessons/assignability

// Присвоение значения 30/53

/* Задание

Реализуйте объект по описанному типу Form. Поле name.value должно проходить валидацию, а поле age — нет.

console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false

 */

type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
}

const form: Form = {
  // BEGIN (write your solution here)
  name: {
    value: 'Kirill',
    validator: (val: string) => val.length > 1,
  },
  age: {
    value: 17,
    validator: (val: number) => val > 18,
  },
  // END
}

export default form
