// type TArrayUnknown = unknown[]
type TArrayAny = any[]

export const removeFromArray = (arr: TArrayAny, ...items: TArrayAny): TArrayAny => arr.filter(item => !items.includes(item))

export const createUniqueArray = (arr: TArrayAny): TArrayAny => [ ...new Set(arr), ]

export const insertToArray = (arr: TArrayAny, item: unknown, inBefore?: boolean): TArrayAny => inBefore ? [ item, ...arr, ] : [ ...arr, item, ]

export const findIndexInArray = (arr: TArrayAny, callback: (value: unknown, index: number, obj: TArrayAny) => unknown): number => arr.findIndex(callback)

export const getTotalPrice = (arr: TArrayAny): number => arr.reduce((prev: number, { price, quantity, }: { price: number, quantity: number }) => prev + price * quantity, 0)
