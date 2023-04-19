const RE_EMAIL = /^[\w\-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

const PWD_MAP = {
  MIN: 6,
  MAX: 20,
  SPC: '!@#$%^&*',
}

const RE_RASSWORD = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${PWD_MAP.SPC}])[A-Za-z\\d${PWD_MAP.SPC}]{${PWD_MAP.MIN},${PWD_MAP.MAX}}$`
)

export const testFormEmail = (prop: string) => RE_EMAIL.test(prop)

export const testFormRassword = (prop: string) => RE_RASSWORD.test(prop)
