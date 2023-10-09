// https://code-basics.com/ru/languages/typescript/lessons/type-aliases

export type User = {
  name: string
  age: number
}

const getOlderUser = (user1: User, user2: User) => {
  const age1 = user1.age
  const age2 = user2.age

  if (age1 === age2) {
    return null
  }

  return age1 > age2 ? user1 : user2
}

// END

export default getOlderUser
