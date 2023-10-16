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

    if (cache[key]) {
      return cache[key]
    }

    const result = fn(...args)

    cache[key] = result

    return result
  }
}

export class Memo<T extends (...args: any[]) => any> {
  private cache: Record<string, ReturnType<T>> = {}

  constructor (private readonly fn: T) {}

  public memoized (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args)

    if (this.cache[key]) {
      return this.cache[key]
    }

    const result = this.fn(...args)

    this.cache[key] = result

    return result
  }
}
