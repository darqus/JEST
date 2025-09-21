type KeyValueStorage = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

const resolveStorage = (): KeyValueStorage | null => {
  const maybe = (globalThis as unknown as { localStorage?: KeyValueStorage }).localStorage

  return maybe ?? null
}

export const getItem = (key: string | number): Record<string, unknown> | null => {
  const storage = resolveStorage()

  if (!storage) {
    return null
  }

  const raw = storage.getItem(key.toString())

  if (raw == null) {
    return null
  }

  try {
    return JSON.parse(raw) as Record<string, unknown> | null
  } catch {
    return null
  }
}

export const setItem = (key: string, value: unknown | null): void => {
  const storage = resolveStorage()

  if (!storage) {
    return
  }

  storage.setItem(key, JSON.stringify(value))
}

export const removeItem = (key: string): void => {
  const storage = resolveStorage()

  if (!storage) {
    return
  }

  storage.removeItem(key)
}
