# Курс: Основы JavaScript

> Полный курс для изучения JavaScript с нуля до уверенного владения языком

Автор: Команда разработки
Обновлено: 01.02.2026

---

## 📋 Содержание курса

1. [Модуль 1: Основы JavaScript](#модуль-1-основы-javascript)
2. [Модуль 2: Функции](#модуль-2-функции)
3. [Модуль 3: Массивы и объекты](#модуль-3-массивы-и-объекты)
4. [Модуль 4: Асинхронность](#модуль-4-асинхронность)
5. [Модуль 5: Работа с DOM и событиями](#модуль-5-работа-с-dom-и-событиями)
6. [Модуль 6: ES6+ возможности](#модуль-6-es6-возможности)

---

## Модуль 1: Основы JavaScript

### Цель модуля

Освоить базовые концепции языка: переменные, типы данных, операторы и управляющие конструкции.

### Темы для изучения

#### 1.1 Переменные (var, let, const)

| Ключевое слово | Область видимости | Переопределение | Поднятие       |
| -------------- | ----------------- | --------------- | -------------- |
| `var`          | Функциональная    | Да              | Да (undefined) |
| `let`          | Блочная           | Нет             | Нет (TDZ)      |
| `const`        | Блочная           | Нет             | Нет (TDZ)      |

**Ключевые моменты:**

- Всегда используй `const` по умолчанию
- Используй `let` только когда переменная будет перезаписана
- Избегай `var` в современном коде

**Практические задачи:**

1. **Задача: Подсчет очков**

   ```javascript
   // Создай переменные для хранения:
   // - playerName (константа)
   // - score (переменная, начальное значение 0)
   // - isGameActive (переменная, true)

   // Реализуй функцию addPoints(points), которая увеличивает score
   // При попытке изменить playerName должна быть ошибка
   ```

2. **Задача: Область видимости**

   ```javascript
   // Что выведет код? Объясни почему.
   const x = 10
   if (true) {
     const x = 20
     console.log(x) // ?
   }
   console.log(x) // ?
   ```

#### 1.2 Типы данных

**Примитивные типы (7 штук):**

- `string` — строки
- `number` — числа (включая Infinity, NaN)
- `boolean` — true/false
- `null` — отсутствие значения
- `undefined` — неинициализированное значение
- `symbol` — уникальный идентификатор
- `bigint` — большие числа

**Сложные типы:**

- `object` — объекты, массивы, функции, даты и т.д.

**Специальное значение:**

- `NaN` — Not-a-Number (тип number!)

**Практические задачи:**

1. **Задача: Определение типов**

   ```javascript
   // Определи тип каждого значения:
   const items = [
     'hello',
     42,
     42n,
     true,
     null,
     undefined,
     Symbol('id'),
     {},
     [],
     function () {},
     NaN,
   ]
   // Ожидаемый результат: массив типов
   ```

2. **Задача: Преобразование типов**

   ```javascript
   // Что вернет каждое выражение?
   console.log('5' + 3) // ?
   console.log('5' - 3) // ?
   console.log(5 + true) // ?
   console.log(5 * '2') // ?
   console.log('5' * '2') // ?
   console.log('' + 0) // ?
   ```

#### 1.3 Операторы

**Арифметические:** `+`, `-`, `*`, `/`, `%`, `**`
**Сравнения:** `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`
**Логические:** `&&`, `||`, `!`
**Присваивания:** `=`, `+=`, `-=`, `*=`, `/=`
**Тернарный:** `condition ? value1 : value2`
**Нулевого слияния:** `??`
**Опциональной цепочки:** `?.`

**Практические задачи:**

1. **Задача: Калькулятор скидок**

   ```javascript
   // Напиши функцию calculateFinalPrice(originalPrice, discountPercent, hasCoupon)
   // - Если hasCoupon === true, добавь дополнительную скидку 5%
   // - Итоговая цена не может быть меньше 0
   // Верни округленное до 2 знаков число
   ```

2. **Задача: Логические операторы**

   ```javascript
   // Что выведет код?
   const a = 0
   const b = 'JavaScript'
   const c = null

   console.log(a || b || c) // ?
   console.log(a && b && c) // ?
   console.log(a ?? b ?? c) // ?
   ```

#### 1.4 Условные конструкции

**if/else:**

```javascript
if (condition) {
  // код
} else if (anotherCondition) {
  // код
} else {
  // код
}
```

**switch:**

```javascript
switch (expression) {
  case value1:
    // код
    break
  case value2:
    // код
    break
  default:
  // код
}
```

**Тернарный оператор:**

```javascript
const result = condition ? valueIfTrue : valueIfFalse
```

**Практические задачи:**

1. **Задача: Определение дня недели**

   ```javascript
   // Напиши функцию getDayName(dayNumber), где 1 = "Понедельник", 7 = "Воскресенье"
   // Используй switch
   // Для неверного числа верни "Неверный день"
   ```

2. **Задача: Оценка экзамена**

   ```javascript
   // Напиши функцию getGrade(score):
   // 90-100: "Отлично"
   // 70-89:  "Хорошо"
   // 50-69:  "Удовлетворительно"
   // < 50:   "Неудовлетворительно"
   // Используй if/else и тернарный оператор
   ```

#### 1.5 Циклы

**for:**

```javascript
for (let i = 0; i < 10; i++) {
  // код
}
```

**while:**

```javascript
while (condition) {
  // код
}
```

**do...while:**

```javascript
do {
  // код
} while (condition)
```

**for...of (для итерируемых):**

```javascript
for (const item of array) {
  // код
}
```

**for...in (для ключей объекта):**

```javascript
for (const key in object) {
  // код
}
```

**Практические задачи:**

1. **Задача: Таблица умножения**

   ```javascript
   // Напиши функцию multiplicationTable(n), которая выводит таблицу умножения от 1 до n
   // Используй вложенный for
   ```

2. **Задача: Факториал**

   ```javascript
   // Напиши функцию factorial(n), которая вычисляет факториал числа
   // Используй while
   // Дополнительно: реализуй через for
   ```

3. **Задача: Сумма чисел в массиве**

   ```javascript
   // Напиши функцию sumArray(numbers) тремя способами:
   // - с for
   // - с for...of
   // - с forEach (в следующем модуле)
   ```

---

## Модуль 2: Функции

### Цель модуля

Научиться создавать и использовать функции, понять области видимости и замыкания.

### Темы для изучения

#### 2.1 Объявление функций

**Function Declaration:**

```javascript
function greet(name) {
  return `Привет, ${name}!`
}

// Можно вызывать до объявления (поднятие)
```

**Function Expression:**

```javascript
const greet = function (name) {
  return `Привет, ${name}!`
}

// Нельзя вызывать до объявления
```

**Named Function Expression:**

```javascript
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1)
}
```

**Практические задачи:**

1. **Задача: Разница в поднятии**

   ```javascript
   // Что выведет код? Объясни.
   console.log(func1()) // ?
   console.log(func2()) // ?

   function func1() {
     return 'Function Declaration'
   }

   const func2 = function () {
     return 'Function Expression'
   }
   ```

2. **Задача: Рекурсивный обход**

   ```javascript
   // Напиши функцию sumNestedArray(arr), которая суммирует все числа,
   // включая вложенные массивы
   // sumNestedArray([1, [2, 3], [4, [5, 6]]]) === 21
   ```

#### 2.2 Стрелочные функции

**Синтаксис:**

```javascript
// Краткая форма (неявный return)
const add = (a, b) => a + b

// С блоком (явный return)
const multiply = (a, b) => {
  return a * b
}

// Один параметр (без скобок)
const square = (x) => x * x

// Без параметров
const getRandom = () => Math.random()

// Возврат объекта
const createUser = (name, age) => ({ name, age })
```

**Особенности:**

- Нет своего `this` (берет из внешнего контекста)
- Нет `arguments`
- Нельзя использовать как конструктор
- Нет `prototype`

**Практические задачи:**

1. **Задача: Конвертер единиц**

   ```javascript
   // Создай объект converters со стрелочными функциями:
   // - celsiusToFahrenheit
   // - kilometersToMiles
   // - kilogramsToPounds
   // Используй сокращенную запись
   ```

2. **Задача: Контекст this**

   ```javascript
   const obj = {
     name: 'Объект',
     regularFunc: function () {
       console.log(this.name)
     },
     arrowFunc: () => {
       console.log(this.name)
     },
   }

   obj.regularFunc() // ?
   obj.arrowFunc() // ? (в браузере/Node разные результаты)
   ```

#### 2.3 Параметры и аргументы

**Параметры по умолчанию:**

```javascript
function greet(name = 'Гость', greeting = 'Привет') {
  return `${greeting}, ${name}!`
}
```

**Rest параметры:**

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}
```

**Деструктуризация параметров:**

```javascript
function displayUser({ name, age, email = 'не указан' }) {
  console.log(`${name}, ${age} лет, ${email}`)
}
```

**Практические задачи:**

1. **Задача: Форматирование даты**

   ```javascript
   // Напиши функцию formatDate({ day, month, year }, separator = ".")
   // formatDate({ day: 1, month: 2, year: 2024 }) → "1.2.2024"
   // formatDate({ day: 1, month: 2, year: 2024 }, "/") → "1/2/2024"
   ```

2. **Задача: Универсальный калькулятор**

   ```javascript
   // Напиши функцию calculate(operation, ...numbers)
   // operation: 'sum', 'multiply', 'max', 'min'
   // calculate('sum', 1, 2, 3, 4) → 10
   // calculate('max', 5, 2, 8, 1) → 8
   ```

#### 2.4 Область видимости и замыкания

**Области видимости:**

- Глобальная
- Функциональная
- Блочная (let/const)
- Модульная

**Замыкания:**

```javascript
function makeCounter() {
  let count = 0

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  }
}

const counter = makeCounter()
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2
console.log(counter.getCount()) // 2
```

**Практические задачи:**

1. **Задача: Приватные переменные**

   ```javascript
   // Создай функцию createBankAccount(initialBalance)
   // Методы: deposit(amount), withdraw(amount), getBalance()
   // Баланс должен быть недоступен напрямую
   ```

2. **Задача: Фабрика функций**

   ```javascript
   // Напиши функцию createMultiplier(factor)
   // const double = createMultiplier(2);
   // const triple = createMultiplier(3);
   // double(5) → 10
   // triple(5) → 15
   ```

#### 2.5 Callback функции

**Основы:**

```javascript
function processArray(array, callback) {
  const result = []
  for (const item of array) {
    result.push(callback(item))
  }
  return result
}

const doubled = processArray([1, 2, 3], (x) => x * 2)
// [2, 4, 6]
```

**Практические задачи:**

1. **Задача: Асинхронная обработка (имитация)**

   ```javascript
   // Напиши функцию fetchData(url, onSuccess, onError)
   // Если url содержит "error", вызови onError
   // Иначе вызови onSuccess с данными
   ```

2. **Задача: Композиция функций**

   ```javascript
   // Напиши функцию compose(...functions)
   // const add5 = x => x + 5;
   // const multiply2 = x => x * 2;
   // const composed = compose(add5, multiply2);
   // composed(3) → 11 (3 * 2 + 5)
   ```

---

## Модуль 3: Массивы и объекты

### Цель модуля

Освоить работу со сложными типами данных: создание, методы, деструктуризацию.

### Темы для изучения

#### 3.1 Создание и методы массивов

**Создание:**

```javascript
const arr1 = []
const arr2 = new Array(5) // [empty × 5]
const arr3 = Array.from('hello') // ['h', 'e', 'l', 'l', 'o']
const arr4 = Array.of(1, 2, 3) // [1, 2, 3]
```

**Основные методы:**

| Метод                                  | Описание                   | Изменяет? |
| -------------------------------------- | -------------------------- | --------- |
| `push(...items)`                       | Добавляет в конец          | Да        |
| `pop()`                                | Удаляет с конца            | Да        |
| `unshift(...items)`                    | Добавляет в начало         | Да        |
| `shift()`                              | Удаляет с начала           | Да        |
| `splice(start, deleteCount, ...items)` | Универсальный              | Да        |
| `slice(start, end)`                    | Копия части                | Нет       |
| `concat(...arrays)`                    | Объединение                | Нет       |
| `indexOf(item)`                        | Индекс элемента            | Нет       |
| `includes(item)`                       | Проверка наличия           | Нет       |
| `find(fn)`                             | Первый подходящий          | Нет       |
| `findIndex(fn)`                        | Индекс первого подходящего | Нет       |
| `sort(fn)`                             | Сортировка                 | Да        |
| `reverse()`                            | Реверс                     | Да        |
| `join(separator)`                      | В строку                   | Нет       |

**Практические задачи:**

1. **Задача: Реализация стека**

   ```javascript
   // Создай объект stack с методами:
   // push(item), pop(), peek(), isEmpty(), size()
   // Используй массив внутри
   ```

2. **Задача: Удаление дубликатов**

   ```javascript
   // Напиши функцию unique(array)
   // Без использования Set
   // unique([1, 2, 2, 3, 3, 3]) → [1, 2, 3]
   ```

#### 3.2 Деструктуризация

**Массивы:**

```javascript
const [first, second] = [1, 2, 3]
const [a, , c] = [1, 2, 3] // пропуск
const [x, y = 10] = [5] // значение по умолчанию
const [head, ...tail] = [1, 2, 3] // rest
```

**Объекты:**

```javascript
const { name, age } = { name: 'Иван', age: 25 }
const { name: userName } = { name: 'Иван' } // переименование
const { country = 'Россия' } = { name: 'Иван' } // значение по умолчанию
const {
  address: { city },
} = { address: { city: 'Москва' } } // вложенность
```

**Практические задачи:**

1. **Задача: Обмен переменных**

   ```javascript
   // Поменяй значения a и b местами без временной переменной
   let a = 5
   let b = 10
   // Твой код
   console.log(a, b) // 10, 5
   ```

2. **Задача: Извлечение данных API**

   ```javascript
   const response = {
     data: {
       user: {
         id: 1,
         name: 'Иван',
         contacts: {
           email: 'ivan@example.com',
           phone: '+7...',
         },
       },
     },
     status: 200,
   }
   // Извлеки name, email используя деструктуризацию
   ```

#### 3.3 Spread/Rest операторы

**Spread (распаковка):**

```javascript
// Массивы
const arr1 = [1, 2]
const arr2 = [...arr1, 3, 4] // [1, 2, 3, 4]

// Объекты
const obj1 = { a: 1 }
const obj2 = { ...obj1, b: 2 } // { a: 1, b: 2 }

// Аргументы функции
const numbers = [1, 2, 3]
Math.max(...numbers) // 3
```

**Rest (сбор):**

```javascript
// В деструктуризации
const [first, ...rest] = [1, 2, 3, 4] // rest: [2, 3, 4]

// В параметрах
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}
```

**Практические задачи:**

1. **Задача: Глубокое копирование (1 уровень)**

   ```javascript
   // Напиши функцию shallowClone(obj)
   // Используй spread
   // Создай копию без связи с оригиналом (1-й уровень)
   ```

2. **Задача: Слияние конфигураций**

   ```javascript
   const defaultConfig = {
     theme: 'light',
     fontSize: 14,
     notifications: true,
   }

   const userConfig = {
     theme: 'dark',
     fontSize: 16,
   }

   // Создай mergedConfig с приоритетом userConfig
   ```

#### 3.4 Методы массивов высшего порядка

**forEach:**

```javascript
items.forEach((item, index, array) => {
  console.log(item)
})
```

**map:**

```javascript
const doubled = numbers.map((n) => n * 2)
```

**filter:**

```javascript
const evens = numbers.filter((n) => n % 2 === 0)
```

**reduce:**

```javascript
const sum = numbers.reduce((acc, n) => acc + n, 0)
```

**find/findIndex:**

```javascript
const user = users.find((u) => u.id === 5)
const index = users.findIndex((u) => u.id === 5)
```

**some/every:**

```javascript
const hasNegative = numbers.some((n) => n < 0)
const allPositive = numbers.every((n) => n > 0)
```

**flat/flatMap:**

```javascript
const flat = [
  [1, 2],
  [3, 4],
].flat() // [1, 2, 3, 4]
const mapped = items.flatMap((x) => [x, x * 2])
```

**Практические задачи:**

1. **Задача: Группировка по категории**

   ```javascript
   const products = [
     { name: 'Яблоко', category: 'Фрукты', price: 50 },
     { name: 'Морковь', category: 'Овощи', price: 30 },
     { name: 'Банан', category: 'Фрукты', price: 60 },
   ]
   // Сгруппируй по category используя reduce
   // Результат: { Фрукты: [...], Овощи: [...] }
   ```

2. **Задача: Цепочка методов**

   ```javascript
   const users = [
     { name: 'Иван', age: 25, active: true },
     { name: 'Мария', age: 17, active: true },
     { name: 'Петр', age: 30, active: false },
     { name: 'Анна', age: 20, active: true },
   ]
   // Найди средний возраст активных пользователей старше 18
   ```

3. **Задача: Собственный map**

   ```javascript
   // Реализуй функцию myMap(array, callback)
   // Без использования встроенного map
   // Должна работать как нативный map
   ```

---

## Модуль 4: Асинхронность

### Цель модуля

Понять асинхронное программирование и Event Loop.

### Темы для изучения

#### 4.1 Callbacks

**Проблема "Callback Hell":**

```javascript
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        console.log(d)
      })
    })
  })
})
```

**Практические задачи:**

1. **Задача: Пирамида**

   ```javascript
   // Рефактори код, используя именованные функции
   readFile('a.txt', function (err, data) {
     if (err) throw err
     parse(data, function (err, parsed) {
       if (err) throw err
       transform(parsed, function (err, result) {
         if (err) throw err
         save(result, function (err) {
           if (err) throw err
           console.log('Готово!')
         })
       })
     })
   })
   ```

#### 4.2 Promises

**Создание:**

```javascript
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(value)
  } else {
    reject(error)
  }
})
```

**Цепочки:**

```javascript
fetch('/api/user')
  .then((response) => response.json())
  .then((user) => fetch(`/api/posts/${user.id}`))
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error))
  .finally(() => console.log('Завершено'))
```

**Promise.all:**

```javascript
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error))
```

**Promise.race:**

```javascript
Promise.race([promise1, promise2]).then((winner) => console.log(winner))
```

**Promise.allSettled:**

```javascript
Promise.allSettled([promise1, promise2]).then((results) => {
  // [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]
})
```

**Практические задачи:**

1. **Задача: Параллельное выполнение**

   ```javascript
   // Загрузи данные из 3 URL параллельно
   // Если один упал — не проваливай все
   // Используй Promise.allSettled
   ```

2. **Задача: Задержка**

   ```javascript
   // Напиши функцию delay(ms), которая возвращает Promise
   // Использование: delay(1000).then(() => console.log('Прошла секунда'))
   ```

3. **Задача: Повторные попытки**

   ```javascript
   // Напиши функцию fetchWithRetry(url, maxAttempts)
   // При ошибке делает maxAttempts попыток с задержкой 1с
   ```

#### 4.3 Async/Await

**Синтаксис:**

```javascript
async function getUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`)
    if (!response.ok) {
      throw new Error('Не удалось загрузить')
    }
    const user = await response.json()
    return user
  } catch (error) {
    console.error(error)
    throw error
  }
}
```

**Параллельное выполнение:**

```javascript
async function loadData() {
  const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()])
  return { users, posts }
}
```

**Практические задачи:**

1. **Задача: Последовательное выполнение**

   ```javascript
   // Есть массив URL
   // Загрузи их последовательно (не параллельно!)
   // Сохрани результаты в массив
   ```

2. **Задача: Обработка ошибок**

   ```javascript
   // Напиши функцию safeFetch(url)
   // Возвращает { data: ..., error: null } или { data: null, error: ... }
   // Не выбрасывает исключений
   ```

3. **Задача: Таймаут**

   ```javascript
   // Напиши функцию fetchWithTimeout(url, timeoutMs)
   // Если запрос длится дольше timeoutMs — отмени и верни ошибку
   // Используй Promise.race
   ```

#### 4.4 Event Loop

**Концепции:**

1. **Call Stack** — стек вызовов (синхронный код)
2. **Web APIs** — API браузера (setTimeout, fetch, DOM)
3. **Callback Queue** — очередь callback'ов
4. **Microtask Queue** — очередь микрозадач (Promise.then)

**Порядок выполнения:**

1. Выполняется весь синхронный код
2. Выполняются все микрозадачи
3. Одна макрозадача
4. Повтор с пункта 2

**Пример:**

```javascript
console.log('1')

setTimeout(() => console.log('2'), 0)

Promise.resolve().then(() => console.log('3'))

console.log('4')

// Вывод: 1, 4, 3, 2
```

**Практические задачи:**

1. **Задача: Предскажи порядок**

   ```javascript
   console.log('Start')

   setTimeout(() => console.log('Timeout 1'), 0)

   Promise.resolve().then(() => {
     console.log('Promise 1')
     Promise.resolve().then(() => console.log('Promise 2'))
   })

   setTimeout(() => console.log('Timeout 2'), 0)

   console.log('End')

   // Что выведется и в каком порядке?
   ```

2. **Задача: Блокировка Event Loop**

   ```javascript
   // Почему этот код блокирует страницу?
   // Как исправить?
   const bigArray = new Array(1000000).fill(0)

   bigArray.forEach((item) => {
     // тяжелая операция
   })
   ```

---

## Модуль 5: Работа с DOM и событиями

### Цель модуля

Научиться манипулировать DOM и обрабатывать события.

### Темы для изучения

#### 5.1 DOM — Document Object Model

**Поиск элементов:**

```javascript
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('.class')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')
```

**Изменение элементов:**

```javascript
element.textContent = 'Текст'
element.innerHTML = '<b>HTML</b>'
element.setAttribute('class', 'active')
element.classList.add('active')
element.classList.remove('active')
element.classList.toggle('active')
element.style.color = 'red'
```

**Создание и удаление:**

```javascript
const div = document.createElement('div')
div.textContent = 'Новый элемент'

parent.appendChild(div)
parent.removeChild(div)
parent.replaceChild(newChild, oldChild)
parent.insertBefore(newChild, referenceChild)

// Современные методы
parent.append(element1, element2)
parent.prepend(element)
element.before(anotherElement)
element.after(anotherElement)
element.remove() // удаляет сам себя
```

**Практические задачи:**

1. **Задача: Список задач (структура)**

   ```javascript
   // Создай функцию createTodoItem(text)
   // Возвращает HTMLElement: <li class="todo-item">
   //   <span class="todo-text">${text}</span>
   //   <button class="todo-delete">Удалить</button>
   // </li>
   ```

2. **Задача: Таблица из данных**

   ```javascript
   // Есть массив объектов users
   // Сгенерируй HTML-таблицу и вставь в #table-container
   ```

#### 5.2 События

**Назначение обработчиков:**

```javascript
// Inline (не рекомендуется)
;<button onclick="handleClick()">Click</button>

// Свойство DOM (только один обработчик)
element.onclick = function () {}

// addEventListener (рекомендуется)
element.addEventListener('click', handler)
element.addEventListener('click', handler2)

element.removeEventListener('click', handler)
```

**Объект события:**

```javascript
element.addEventListener('click', (event) => {
  event.target // элемент, на котором произошло событие
  event.currentTarget // элемент, на котором висит обработчик
  event.preventDefault() // отмена действия по умолчанию
  event.stopPropagation() // остановка всплытия
})
```

**Делегирование:**

```javascript
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    // Удалить элемент
  }
})
```

**Типы событий:**

| Категория     | События                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Мышь          | `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseenter`, `mouseleave`, `contextmenu` |
| Клавиатура    | `keydown`, `keyup`, `keypress`                                                                      |
| Формы         | `submit`, `input`, `change`, `focus`, `blur`                                                        |
| Документ      | `DOMContentLoaded`, `load`, `beforeunload`, `unload`                                                |
| Скролл/resize | `scroll`, `resize`                                                                                  |

**Практические задачи:**

1. **Задача: Модальное окно**

   ```javascript
   // Реализуй открытие/закрытие модального окна
   // - Открытие по кнопке
   // - Закрытие по крестику
   // - Закрытие по клику вне окна
   // - Закрытие по Escape
   ```

2. **Задача: Валидация формы**

   ```javascript
   // Валидация email, пароля (мин. 8 символов)
   // Показывай ошибки под полями
   // Предотвращай отправку при ошибках
   ```

3. **Задача: Drag and Drop**

   ```javascript
   // Реализуй перетаскивание элементов между двумя списками
   // Используй события: dragstart, dragover, drop
   ```

#### 5.3 Browser Storage

**localStorage:**

```javascript
// Хранит данные бессрочно
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()

// Для объектов
localStorage.setItem('user', JSON.stringify(user))
const user = JSON.parse(localStorage.getItem('user'))
```

**sessionStorage:**

```javascript
// Хранит данные до закрытия вкладки
sessionStorage.setItem('key', 'value')
```

**cookies:**

```javascript
document.cookie = 'name=value; expires=...; path=/'
```

**Практические задачи:**

1. **Задача: Тема оформления**

   ```javascript
   // Сохраняй выбранную тему (light/dark) в localStorage
   // При загрузке страницы применяй сохраненную тему
   ```

2. **Задача: Корзина покупок**

   ```javascript
   // Сохраняй корзину в localStorage
   // При обновлении страницы восстанавливай содержимое
   ```

---

## Модуль 6: ES6+ возможности

### Цель модуля

Изучить современные возможности JavaScript.

### Темы для изучения

#### 6.1 Шаблонные строки

```javascript
const name = 'Мир'
const greeting = `Привет, ${name}!`

// Многострочность
const html = `
  <div>
    <h1>Заголовок</h1>
  </div>
`

// Тегированные шаблоны
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => result + str + (values[i] ? `<b>${values[i]}</b>` : ''),
    ''
  )
}

const result = highlight`Привет, ${name}!` // "Привет, <b>Мир</b>!"
```

#### 6.2 Модули (import/export)

**Export:**

```javascript
// named export
export const PI = 3.14
export function calculate() {}
export class Calculator {}

// или в конце
export { PI, calculate, Calculator }

// default export
export default function main() {}

// alias
export { calculate as calc }
```

**Import:**

```javascript
// named import
import { PI, calculate } from './math.js'

// default import
import main from './main.js'

// все импорты
import * as math from './math.js'

// alias
import { calculate as calc } from './math.js'

// динамический import
const module = await import('./module.js')
```

**Практические задачи:**

1. **Задача: Структура модулей**

   ```javascript
   // Создай модуль utils.js с:
   // - функцией debounce
   // - функцией throttle
   // - константой API_URL
   // Экспортируй именованно

   // В main.js импортируй и используй
   ```

#### 6.3 Классы

```javascript
class Animal {
  // Приватное поле
  #secret = 'секрет'

  // Статическое поле
  static count = 0

  constructor(name) {
    this.name = name
    Animal.count++
  }

  // Метод
  speak() {
    console.log(`${this.name} издает звук`)
  }

  // Геттер
  get info() {
    return `${this.name}`
  }

  // Сеттер
  set nickname(value) {
    this._nickname = value
  }

  // Статический метод
  static getCount() {
    return Animal.count
  }
}

// Наследование
class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }

  speak() {
    console.log(`${this.name} лает`)
  }
}
```

**Практические задачи:**

1. **Задача: Класс для API**

   ```javascript
   // Создай класс ApiClient
   // - базовый URL
   // - методы get, post, put, delete
   // - обработка ошибок
   // - приватный метод _fetch
   ```

2. **Задача: Наследование фигур**

   ```javascript
   // Базовый класс Shape с методом getArea()
   // Классы Circle, Rectangle, Triangle
   // Каждый вычисляет площадь по-своему
   ```

#### 6.4 Optional Chaining и Nullish Coalescing

**Optional Chaining (`?.`):**

```javascript
const userCity = user?.address?.city // undefined вместо ошибки
const firstItem = array?.[0]
const result = obj?.method?.()
```

**Nullish Coalescing (`??`):**

```javascript
const value = null ?? 'default' // 'default'
const value2 = 0 ?? 'default' // 0 (не 'default' как с ||)
const value3 = '' ?? 'default' // '' (не 'default')
```

**Logical Assignment:**

```javascript
obj.prop ??= 'default' // если null/undefined, присвоить
obj.prop &&= value // если truthy, присвоить
obj.prop ||= 'default' // если falsy, присвоить
```

**Практические задачи:**

1. **Задача: Безопасный доступ**

   ```javascript
   // Перепиши без проверок:
   const street = user && user.address && user.address.street

   // Используя ?.
   ```

#### 6.5 Другие возможности ES6+

**Symbol:**

```javascript
const id = Symbol('id')
const obj = {
  [id]: 123,
}
```

**BigInt:**

```javascript
const big = 123456789012345678901234567890n
const result = big + 10n
```

**Генераторы:**

```javascript
function* generator() {
  yield 1
  yield 2
  yield 3
}

const gen = generator()
console.log(gen.next().value) // 1
```

**Прокси:**

```javascript
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'Нет такого свойства'
  },
}

const proxy = new Proxy({}, handler)
```

**Map и Set:**

```javascript
const map = new Map()
map.set('key', 'value')

const set = new Set([1, 2, 2, 3]) // {1, 2, 3}
```

**Практические задачи:**

1. **Задача: Итератор диапазона**

   ```javascript
   // Создай функцию range(start, end), возвращающую итерируемый объект
   // for (const num of range(1, 5)) { console.log(num); } // 1, 2, 3, 4, 5
   ```

2. **Задача: Прокси для валидации**

   ```javascript
   // Создай прокси, который не позволяет установить
   // отрицательное значение для age
   ```

---

## 📝 Общие практические проекты

### Проект 1: ToDo List

**Функционал:**

- Добавление задач
- Отметка выполненных
- Удаление
- Фильтрация (все/активные/выполненные)
- Сохранение в localStorage

**Используемые техники:**

- DOM манипуляции
- События
- Массивы (filter, map)
- localStorage
- Модули (опционально)

### Проект 2: Погодное приложение

**Функционал:**

- Запрос к API погоды
- Отображение текущей погоды
- Прогноз на 5 дней
- Поиск по городу
- Сохранение избранных городов

**Используемые техники:**

- async/await
- fetch API
- Обработка ошибок
- localStorage
- DOM

### Проект 3: Калькулятор

**Функционал:**

- Базовые операции (+, -, \*, /)
- История операций
- Сохранение истории

**Используемые техники:**

- Классы
- Модули
- События
- localStorage

---

## 📚 Рекомендуемые ресурсы

### Документация

- [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)

### Практика

- [Codewars](https://www.codewars.com/)
- [LeetCode](https://leetcode.com/)
- [JavaScript30](https://javascript30.com/)

### Инструменты

- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

## ✅ Чек-лист прохождения курса

### Модуль 1

- [ ] Различаю var, let, const
- [ ] Знаю все примитивные типы данных
- [ ] Понимаю разницу между == и ===
- [ ] Могу использовать все виды циклов
- [ ] Решил все практические задачи

### Модуль 2

- [ ] Отличаю declaration от expression
- [ ] Использую стрелочные функции
- [ ] Понимаю this в разных контекстах
- [ ] Создаю замыкания
- [ ] Использую callback-функции

### Модуль 3

- [ ] Знаю методы массивов
- [ ] Использую деструктуризацию
- [ ] Применяю spread/rest
- [ ] Владею методами высшего порядка

### Модуль 4

- [ ] Понимаю Promises
- [ ] Использую async/await
- [ ] Понимаю Event Loop
- [ ] Обрабатываю ошибки в асинхронном коде

### Модуль 5

- [ ] Манипулирую DOM
- [ ] Обрабатываю события
- [ ] Использую делегирование
- [ ] Работаю с localStorage

### Модуль 6

- [ ] Использую модули
- [ ] Создаю классы
- [ ] Применяю современный синтаксис

---

## 🎯 Следующие шаги

После прохождения этого курса рекомендуется изучить:

1. **TypeScript** — типизация для JavaScript
2. **Фреймворки:** React, Vue, Angular
3. **Node.js** — JavaScript на сервере
4. **Тестирование:** Jest, Cypress
5. **Сборка:** Webpack, Vite, Parcel

---

_Удачи в изучении JavaScript! 🚀_
