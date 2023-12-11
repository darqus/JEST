/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * @param {Function} fn
 * @return {Function}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function memoize (doThing) {
  const theCache = new Map()

  return (
    (p1, p2) => {
      let theKey, theRes

      return theCache.has((theKey = `${p1}-${p2}`))
        ? theCache.get(theKey)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        : (theCache.set(theKey, theRes = doThing(p1, p2)), theRes)
    }
  )
}
