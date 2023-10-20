/**
 * Memoize a function by caching its return values.
 * @param fn The function to be memoized.
 * @returns The memoized version of the function.
 */
export const memo = <T extends (...args: any[]) => any>(
  fn: T
): ((...args: Parameters<T>) => ReturnType<T>) => {
  const cache: Record<string, ReturnType<T>> = {}

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)

    if (key in cache) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return cache[key]
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = fn(...args)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cache[key] = result

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result
  }
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
