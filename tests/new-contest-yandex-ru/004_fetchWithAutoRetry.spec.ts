import { fetchWithAutoRetry } from '../../src/new-contest-yandex-ru/004_fetchWithAutoRetry'

// Helper from the task description
const createFetcherMock = (responses: Array<{ error?: string; data?: unknown }>) => {
  let counter = 0
  let isLoading = false

  return async () => {
    if (isLoading) {
      throw new Error('429 Too Many Requests')
    }

    const response = responses[counter % responses.length]
    isLoading = true

    // Keep it asynchronous without relying on timer typings
    await Promise.resolve()

    isLoading = false
    counter++

    return response.error
      ? Promise.reject(new Error(response.error))
      : Promise.resolve(response.data)
  }
}

test('example 1: success within 5 retries returns first success', async () => {
  const fetcher = createFetcherMock([
    { error: '504 Gateway Timeout' },
    { error: '503 Service Unavailable' },
    { error: '502 Bad Gateway' },
    { error: '500 Internal Server Error' },
    { data: 'Hello, world!' },
    { data: 'Yandex' },
  ])

  await expect(fetchWithAutoRetry(fetcher, 5)).resolves.toBe('Hello, world!')
})

test('example 2: only 3 retries -> throws last error (500)', async () => {
  const fetcher = createFetcherMock([
    { error: '504 Gateway Timeout' },
    { error: '503 Service Unavailable' },
    { error: '502 Bad Gateway' },
    { error: '500 Internal Server Error' },
    { data: 'Hello, world!' },
    { data: 'Yandex' },
  ])

  await expect(fetchWithAutoRetry(fetcher, 3)).rejects.toThrow('500 Internal Server Error')
})

test('example 3: success on second attempt resolves with data', async () => {
  const fetcher = createFetcherMock([
    { error: '504 Gateway Timeout' },
    { data: 'Hello, world!' },
    { error: '503 Service Unavailable' },
    { error: '502 Bad Gateway' },
    { error: '500 Internal Server Error' },
    { data: 'Yandex' },
  ])

  await expect(fetchWithAutoRetry(fetcher, 5)).resolves.toBe('Hello, world!')
})
