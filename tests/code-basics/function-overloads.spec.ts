import sayHello from '../../src/code-basics/function-overloads'

test('function', () => {
  expect(sayHello('John')).toBe('Hi John! Happy New Year!')
  expect(sayHello(2023, 'Mila')).toBe('Hi Mila! Happy New Year 2023!')
})
