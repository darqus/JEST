// https://code-basics.com/ru/languages/typescript/lessons/destructuring

// Деструктуризация 17/53

/* Задание

Реализуйте функцию lessonsCount(), которая принимает на вход курс и возвращает количество лекций внутри него:

const course = { lessons: ['intro', 'lala'] };
lessonsCount(course); // 2

Используйте внутри деструктуризацию, чтобы извлечь уроки прямо в параметрах функции. */

// BEGIN (write your solution here)
const lessonsCount = ({ lessons }: { lessons: string[] }) => lessons.length
// END

export default lessonsCount
