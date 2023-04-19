export const getItem = (key: string | number) => {
  try {
    const result = JSON.parse(
      localStorage.getItem(key.toString()) ?? ''
    ) as Record<string, unknown> | null

    return result
  } catch (e) {
    console.error('Error getting data from localStorage', e)

    return null
  }
}

export const setItem = (key: string, value: unknown | null) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error('Error setting data to localStorage', e)
  }
}

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch (e) {
    console.error('Error removing data from localStorage', e)
  }
}
