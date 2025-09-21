import { createCounter, } from '../../src/new-contest-yandex-ru/001_createCounter'

test('createCounter: starts from 5', () => {
  const counter = createCounter(5)

  expect(counter.increment()).toBe(6)
  expect(counter.reset()).toBe(5)
  expect(counter.decrement()).toBe(4)
})

test('createCounter: starts from 0', () => {
  const counter = createCounter(0)

  expect(counter.increment()).toBe(1)
  expect(counter.increment()).toBe(2)
  expect(counter.increment()).toBe(3)
  expect(counter.decrement()).toBe(2)
  expect(counter.reset()).toBe(0)
  expect(counter.decrement()).toBe(-1)
})

test('createCounter: starts from 100', () => {
  const counter = createCounter(100)

  expect(counter.decrement()).toBe(99)
  expect(counter.decrement()).toBe(98)
  expect(counter.reset()).toBe(100)
  expect(counter.increment()).toBe(101)
  expect(counter.increment()).toBe(102)
})
