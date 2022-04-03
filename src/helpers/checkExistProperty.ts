interface IPerson {
  name: string
  salary: number
}

export const checkExistProperty = (obj: IPerson, prop: string) => prop in obj
