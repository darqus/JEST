export const isNumber = (value: string | number | Date): value is number => typeof value === 'number' && isFinite(value)

export const formatPhoneNumber = (phoneNumber: string): string => `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9)}`

export const unformatPhoneNumber = (formattedPhoneNumber: string): string => formattedPhoneNumber.replace(/\D/g, '')
