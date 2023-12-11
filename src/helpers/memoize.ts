/**
 * Memoizes a function to cache its results based on the input arguments.
 * @param doThing The function to be memoized.
 * @returns The memoized function.
 */
export function memoize (doThing: (...args: any[]) => any): (...args: any[]) => any {
  // Create a cache to store the results of the function
  const theCache = new Map()

  // Return the memoized function
  return (
    /**
     * The memoized function that takes the input arguments and returns the result.
     * @param p1 The first parameter.
     * @param p2 The second parameter.
     * @returns The result of the function.
     */
    (p1: number, p2: number) => {
      let theKey: string, theRes: unknown

      // Check if the result for the input arguments is already cached
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return theCache.has((theKey = `${p1}-${p2}`))
        ? theCache.get(theKey) // Return the cached result if it exists
        : (theCache.set(theKey, (theRes = doThing(p1, p2))), theRes) // Compute the result and cache it
    }
  )
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
