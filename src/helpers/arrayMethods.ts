// type TArrayUnknown = unknown[]
type TArrayAny = any[]
type TTotalPriceItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export const removeFromArray = (arr: TArrayAny, ...items: TArrayAny): TArrayAny => arr.filter(item => !items.includes(item))

export const createUniqueArray = (arr: TArrayAny): TArrayAny => [ ...new Set<any>(arr), ]

export const insertToArray = (arr: TArrayAny, item: unknown, inBefore?: boolean): TArrayAny => inBefore ? [ item, ...arr, ] : [ ...arr, item, ]

export const findIndexInArray = (arr: TArrayAny, callback: (value: unknown, index: number, obj: TArrayAny) => unknown): number => arr.findIndex(callback)

export const getTotalPrice = (arr: TArrayAny, fields: string[], initial: number): number => arr.reduce((prev: number, curr: TTotalPriceItem) => prev + curr[fields[0]] * curr[fields[1]], initial)
