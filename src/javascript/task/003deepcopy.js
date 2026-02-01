function deepClone(obj, visited = new WeakMap()) {
  // Обработка примитивов и null
  if (obj === null || typeof obj !== 'object') return obj

  // Защита от циклических ссылок
  if (visited.has(obj)) return visited.get(obj)

  // Клонирование Date
  if (obj instanceof Date) return new Date(obj.getTime())

  // Клонирование RegExp
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)

  // Клонирование Map
  if (obj instanceof Map) {
    const clonedMap = new Map()
    visited.set(obj, clonedMap)
    obj.forEach((value, key) => {
      clonedMap.set(deepClone(key, visited), deepClone(value, visited))
    })
    return clonedMap
  }

  // Клонирование Set
  if (obj instanceof Set) {
    const clonedSet = new Set()
    visited.set(obj, clonedSet)
    obj.forEach((value) => {
      clonedSet.add(deepClone(value, visited))
    })
    return clonedSet
  }

  // Клонирование Array и обычных Object
  if (Array.isArray(obj)) {
    const clonedArray = []
    visited.set(obj, clonedArray)
    for (let i = 0; i < obj.length; i++) {
      clonedArray[i] = deepClone(obj[i], visited)
    }
    return clonedArray
  }

  // Обычный объект
  const clonedObj = {}
  visited.set(obj, clonedObj)
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key], visited)
    }
  }

  return clonedObj
}

const original = {
  a: 1,
  b: { c: 2 },
  d: [3, 4],
  e: new Date(),
  f: /test/g,
  g: new Map([['key', 'value']]),
}

const copy = deepClone(original)
copy.b.c = 999
console.log(original.b.c) // 2 — оригинал не изменился

// самый лаконичный встроенный метод
const original1 = { a: 1, b: { c: 2 } }
const deepCopy1 = structuredClone(original1)

deepCopy1.b.c = 999
console.log(original1.b.c) // 2 — оригинал не изменился
