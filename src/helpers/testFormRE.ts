const EMAIL_RE = {
  USERNAME: /^[^\s@]/,
  AT: '+@',
  DOMAIN: /[^\s@]/,
  DOT: '+.',
  ZONE: /[A-Za-z]{2,4}$/
}

const RE_EMAIL = new RegExp(`${EMAIL_RE.USERNAME.source}${EMAIL_RE.AT}${EMAIL_RE.DOMAIN.source}${EMAIL_RE.DOT}${EMAIL_RE.ZONE.source}`)

const PWD_MAP = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 20,
  DIGIT_LENGTH: 1,
  SPC_LENGTH: 1,
  SPC_CHAR: '!@#$%^&*',
}

const PASSWORD_RE = {
  HAS_LETTER: /^(?=.*[A-Z][a-z])/,
  HAS_DIGIT: new RegExp(`(?=.*\\d){${PWD_MAP.DIGIT_LENGTH},}`),
  HAS_SPECIAL_CHAR: new RegExp(`(?=.*[${PWD_MAP.SPC_CHAR}]){${PWD_MAP.SPC_LENGTH},}`),
  IS_VALID: new RegExp(`[A-Za-z\\d${PWD_MAP.SPC_CHAR}]{${PWD_MAP.MIN_LENGTH},${PWD_MAP.MAX_LENGTH}}$`)
}

const RE_RASSWORD = new RegExp(
  `${PASSWORD_RE.HAS_LETTER.source}${PASSWORD_RE.HAS_DIGIT.source}${PASSWORD_RE.HAS_SPECIAL_CHAR.source}${PASSWORD_RE.IS_VALID.source}`
)


export const isEmailValid = (email: string): boolean => RE_EMAIL.test(email)

export const isPasswordValid = (password: string): boolean => RE_RASSWORD.test(password)
