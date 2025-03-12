import { v4 as uuidv4 } from 'uuid'

export function generateRandomId() {
    return uuidv4()
}

export function generateOtp(length: number) {
    if (length <= 1) {
        throw new Error('Invalid length value')
    }
    const randomOtp =
        Math.pow(10, length - 1) +
        Math.floor(Math.random() * Math.pow(10, length - 1))
    return String(randomOtp)
}

export function isTimeZoneValid(tz: string) {
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
        throw new Error('Time zones are not available in this environment')
    }
    try {
        Intl.DateTimeFormat(undefined, { timeZone: tz })
        return true
    } catch {
        return false
    }
}

console.log(generateOtp(6))
