const RE_EMAIL = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const RE_RASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/

export const testFormEmail = (prop: string) => RE_EMAIL.test(prop)
export const testFormRassword = (prop: string) => RE_RASSWORD.test(prop)
