// https://code-basics.com/ru/languages/typescript/lessons/objects

/* Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:

// Определите тип исходя из структуры объекта
const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};
isComplete(course); // false */

// BEGIN (write your solution here)
type Cource = {
  name: string
  lessons: string[]
}

const isComplete = (o: Cource): boolean => o.lessons.length >= 4
// END

export default isComplete
