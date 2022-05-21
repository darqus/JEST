// const MAGIC_STRING = '000000000000000'
const MAGIC_STRING = '00000000000000'

export const checkForMagicMathJS = (prop: string = '') => prop.includes(MAGIC_STRING)
? (+prop.slice(0, -1)).toString() : prop
