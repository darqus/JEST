/**
 * Memoizes a function to cache its results based on the input arguments.
 * @param doThing The function to be memoized.
 * @returns The memoized function.
 */
export const memoize = <Args extends unknown[], R>(doThing: (...args: Args) => R) => {
  const cache = new Map<string, R>()

  return ((...args: Args): R => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = doThing(...args)

    cache.set(key, result)

    return result
  })
}

export class Memo<Args extends unknown[], R> {
  private cache: Record<string, R> = {}

  constructor (private readonly functionToMemoize: (...args: Args) => R) {}

  public memoized (...args: Args): R {
    const key = JSON.stringify(args)
    const existing = this.cache[key]

    if (existing !== undefined) {
      return existing
    }

    const computed = this.functionToMemoize(...args)

    this.cache[key] = computed

    return computed
  }
}
