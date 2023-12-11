/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * Memoizes a function to cache its results based on the input arguments.
 * @param fn - The function to memoize.
 * @returns The memoized function.
 */
export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = fn(...args)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
