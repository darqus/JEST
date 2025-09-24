// https://new.contest.yandex.ru/contests/78574/problem?id=522056%2F2025_04_15%2FHiJvfempgP

/**
 * Функция, которая запрашивает данные с помощью fetcher
 * и повторяет запрос в случае ошибки. Запросы повторяются
 * до тех пор, пока не будет получен успешный ответ
 * или пока не будут исчерпаны все попытки.
 *
 * @param {function} fetcher - функция, которая возвращает Promise
 * @param {number} count - максимальное количество попыток
 */

type Fetcher = () => Promise<unknown>

type FetchWithAutoRetryFn = (fetcher: Fetcher, count: number) => Promise<unknown>

export const fetchWithAutoRetry: FetchWithAutoRetryFn = async (fetcher, count) => {
  let lastError: unknown

  // Приводим count к неотрицательному целому числу
  const retries = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0

  // Выполняем не более count + 1 попыток
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Важно последовательно ожидать результат, без параллельных запусков
      const result = await fetcher()
      return result
    } catch (err) {
      lastError = err
      // если это была последняя попытка — пробрасываем последнюю ошибку
      if (attempt === retries) {
        throw lastError
      }
      // иначе пробуем ещё раз
    }
  }

  // Теоретически недостижимо, но для полноты типов
  throw lastError ?? new Error('Unknown error')
}
