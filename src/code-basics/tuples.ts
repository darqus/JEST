// https://code-basics.com/ru/languages/typescript/lessons/tuples

// Кортежи (Tuples) 24/53

/* Задание

Создайте и экспортируйте тип Point, который описывает точку в пространстве, состоящую из трех координат: x, y, z.

Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение. Две точки совпадают, если совпадают все их координаты:

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false */

// BEGIN (write your solution here)
export type Point = [number, number, number]

/* const isTheSamePoint = (firstPoint: Point, secondPoint: Point) => {
  return firstPoint[0] === secondPoint[0] && firstPoint[1] === secondPoint[1] && firstPoint[2] === secondPoint[2]
} */
const isTheSamePoint = (firstPoint: Point, secondPoint: Point) => firstPoint.every((el, i) => el === secondPoint[i])
// END

export default isTheSamePoint
