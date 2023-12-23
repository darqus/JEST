const RE_EMAIL = /^[\w\-\\.]+@([\w-]+\.)+[[A-Za-z]{2,4}$/

const PWD_MAP = {
  MIN: 6,
  MAX: 20,
  SPC: '!@#$%^&*',
}

const RE_RASSWORD = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${PWD_MAP.SPC}])[A-Za-z\\d${PWD_MAP.SPC}]{${PWD_MAP.MIN},${PWD_MAP.MAX}}$`
)

export const isEmailValid = (email: string): boolean => RE_EMAIL.test(email)

export const isPasswordValid = (password: string): boolean => RE_RASSWORD.test(password)
