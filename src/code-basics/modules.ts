// https://code-basics.com/ru/languages/typescript/lessons/modules

// Система модулей 11/53

/* Задание

Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail(). Функция принимает почту и домен. Если емейл пользователя содержит указанный домен, то функция возвращает true:

Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true

Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false */

// BEGIN
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Company {
  export const isEmployeeEmail = (email: string, domain: string): boolean => email.endsWith(`@${domain}`)
}
// END

type User = {
  email: string
}

/* const authorize = (user: User | null): boolean => {
  const companyDomain = 'hexlet.io'

  const email = user?.email ?? ''

  return Company.isEmployeeEmail(email, companyDomain)
} */

const authorize = (user: User | null): boolean => Company.isEmployeeEmail(user?.email ?? '', 'hexlet.io')

export default authorize
