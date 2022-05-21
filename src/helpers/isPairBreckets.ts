export const isPairBreckets = (prop: string) => prop
.replace(/\(\)/g, '')
.replace(/\[\]/g, '')
.replace(/\{\}/g, '') === ''
