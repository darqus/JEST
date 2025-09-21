/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(doThing) {
  const theCache = new Map()

  return (p1, p2) => {
    let theKey, theRes

    return theCache.has((theKey = `${p1}-${p2}`))
      ? theCache.get(theKey)
      : (theCache.set(theKey, (theRes = doThing(p1, p2))), theRes)
  }
}
