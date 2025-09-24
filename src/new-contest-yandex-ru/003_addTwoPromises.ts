// https://new.contest.yandex.ru/contests/78574/problem?id=2044747%2F2025_04_27%2FmHiDSc8CFW

/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */

type AddTwoPromisesFn = (promise1: Promise<number>, promise2: Promise<number>) => Promise<number>

export const addTwoPromises: AddTwoPromisesFn = async (promise1, promise2) => {
  const results = await Promise.allSettled([promise1, promise2])

  let sum = 0
  for (const r of results) {
    if (r.status === 'fulfilled') {
      sum += r.value
    } else {
      // Treat reason as unknown to avoid unsafe any, then narrow/convert
      const reasonUnknown = (r as { reason: unknown }).reason
      sum += typeof reasonUnknown === 'number' ? reasonUnknown : Number(reasonUnknown)
    }
  }

  return sum
}

/*
Решение на JS (объяснение):

Задача требует сложить результаты двух промисов даже если один или оба отклоняются (reject).
Если промис отклонён, используем его reason как число. Чтобы не "падать" при первом reject,
нужен Promise.allSettled — он всегда возвращает массив статусов для всех промисов.

Алгоритм:
1) Ждём оба промиса через Promise.allSettled([promise1, promise2]).
2) Для каждого результата:
   - status === 'fulfilled' → берём value
   - status === 'rejected'  → берём reason; безопасно приводим к числу через Number(reason)
3) Складываем два значения и возвращаем сумму.

Пример реализации на чистом JavaScript:

export const addTwoPromises = (promise1, promise2) => {
  return Promise.allSettled([promise1, promise2]).then((results) =>
    results.reduce((sum, r) => {
      if (r.status === 'fulfilled') {
        return sum + r.value
      }
      const reason = r.reason
      return sum + (typeof reason === 'number' ? reason : Number(reason))
    }, 0)
  )
}

Сложность: ожидание промисов идёт параллельно; память и вычисления после завершения — константные.
*/
