// https://code-basics.com/ru/languages/typescript/lessons/multi-dimensional-arrays

// Многомерные массивы 22/53

/* Задание

Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов. Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.

const field1 = getField(1);
console.log(field1);
// [[null]]

const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]] */

// BEGIN (write your solution here)
type Field = null

// type Row = (null | null[])
type Row = Field | Field[]

// type Fields = null | null[][]
// type Fields = Array<null | null[]>
type Fields = Row[]

/**
 * Generates a game field for tic-tac-toe.
 *
 * @param dimension The dimension of the field.
 * @returns The generated game field.
 */
const getField = (dimension: number): Fields => {
  const fields: Fields = []

  for (let i = 0; i < dimension; i++) {
    const row: Row = []

    for (let j = 0; j < dimension; j++) {
      row.push(null)
    }

    fields.push(row)
  }

  return fields
}
// END

export default getField
