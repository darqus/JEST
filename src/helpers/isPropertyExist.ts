export type Person = {
  name: string
  salary: number
}

export const isPropertyExist = (object: Person, property: string): boolean => property in object
