import bcrypt from 'bcrypt'
import envParsed from '../../../constants/env-parsed'

export async function hashPassword(password: string) {
    return await bcrypt.hash(password, envParsed.BCRYPT_SALT_ROUNDS)
}

export async function verifyPassword(
    plainPassword: string,
    hashedPassword: string
) {
    return await bcrypt.compare(plainPassword, hashedPassword)
}
