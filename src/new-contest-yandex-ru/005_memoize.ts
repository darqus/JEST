// https://new.contest.yandex.ru/contests/78574/problem?id=2044747%2F2025_05_27%2FHmWJTFXPLb

// Значения, которые могут быть сериализованы JSON.stringify согласно условиям задачи
type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue }

type MemoizableFn<A extends ReadonlyArray<JsonValue>, R> = (...args: A) => R

export const memoize = <A extends ReadonlyArray<JsonValue>, R>(
  fn: MemoizableFn<A, R>
): ((...args: A) => R) => {
  const cache = new Map<string, R>()

  return (...args: A): R => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key) as R
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

/*
Чистая JS-версия для онлайн-проверяющей системы:

export const memoize = (fn) => {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}
*/
