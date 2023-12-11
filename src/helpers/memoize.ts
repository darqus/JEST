/**
 * Memoizes a function to cache its results based on the input arguments.
 * @param doThing The function to be memoized.
 * @returns The memoized function.
 */
export const memoize = <T extends (...args: any[]) => any>(doThing: T): T => {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)

    if (cache.has(key)) return cache.get(key)!

    const result = doThing(...args)

    cache.set(key, result)

    return result
  }) as T
}

export class Memo<T extends (...args: any[]) => any> {
  private cache: Record<string, ReturnType<T>> = {}

  constructor (private readonly functionToMemoize: T) {}

  public memoized (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = this.cache[key] || (this.cache[key] = this.functionToMemoize(...args))

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result
  }
}
