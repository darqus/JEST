interface IPerson {
  name: string
  salary: number
}

export const ifExistProperty = (obj: IPerson, prop: string) => prop in obj
