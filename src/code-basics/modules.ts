// https://code-basics.com/ru/languages/typescript/lessons/modules

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
