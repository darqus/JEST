export type Person = {
  name: string
  salary: number
}

export const ifExistProperty = (obj: Person, prop: string) => prop in obj
