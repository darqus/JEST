export const isPairBrackets = (prop: string) =>
  prop.replace(/\(\)/g, '').replace(/\[\]/g, '').replace(/\{\}/g, '') === ''
