// https://code-basics.com/ru/languages/typescript/lessons/type-aliases

// Псевдонимы типов (Type Aliases) 9/53

/* Задание

Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше. Если пользователи являются ровесниками, то возвращается null:

const user1 = { name: 'Petr', age: 8 }; */

export type User = {
  name: string
  age: number
}

const getOlderUser = (user1: User, user2: User) => {
  const age1 = user1.age
  const age2 = user2.age

  return age1 === age2 ? null : age1 > age2 ? user1 : user2
}

// END

export default getOlderUser
