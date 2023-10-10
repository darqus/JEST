export type Person = {
  name: string
  salary: number
}

// eslint-disable-next-line no-prototype-builtins
export const isPropertyExist = (object: Person, property: string): boolean => object.hasOwnProperty(property)
