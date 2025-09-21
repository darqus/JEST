const EMAIL_RE_PART = {
  USERNAME: /^[^\s@]/,
  AT: '+@',
  DOMAIN: /[^\s@]/,
  DOT: '+.',
  ZONE: /[A-Za-z]{2,4}$/,
}

const RE_EMAIL = new RegExp(
  `${EMAIL_RE_PART.USERNAME.source}${EMAIL_RE_PART.AT}${EMAIL_RE_PART.DOMAIN.source}${EMAIL_RE_PART.DOT}${EMAIL_RE_PART.ZONE.source}`
)

const isEmailValid = (email: string): boolean => RE_EMAIL.test(email)

const PASSWORD_DETAILS = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 20,
  DIGIT_LENGTH: 1,
  SPC_LENGTH: 1,
  SPC_CHAR: '!@#$%^&*',
}

const PASSWORD_RE_PART = {
  HAS_LETTER: /^(?=.*[A-Z][a-z])/,
  HAS_DIGIT: new RegExp(`(?=.*\\d){${PASSWORD_DETAILS.DIGIT_LENGTH},}`),
  HAS_SPECIAL_CHAR: new RegExp(
    `(?=.*[${PASSWORD_DETAILS.SPC_CHAR}]){${PASSWORD_DETAILS.SPC_LENGTH},}`
  ),
  IS_VALID: new RegExp(
    `[A-Za-z\\d${PASSWORD_DETAILS.SPC_CHAR}]{${PASSWORD_DETAILS.MIN_LENGTH},${PASSWORD_DETAILS.MAX_LENGTH}}$`
  ),
}

const RE_RASSWORD = new RegExp(
  `${PASSWORD_RE_PART.HAS_LETTER.source}${PASSWORD_RE_PART.HAS_DIGIT.source}${PASSWORD_RE_PART.HAS_SPECIAL_CHAR.source}${PASSWORD_RE_PART.IS_VALID.source}`
)

const isPasswordValid = (password: string): boolean => RE_RASSWORD.test(password)

export { isEmailValid, isPasswordValid }
