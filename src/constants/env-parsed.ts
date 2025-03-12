import { z } from 'zod'

const envSchema = z.object({
    ENV: z.string().nonempty(),
    PORT: z.number(),
    BCRYPT_SALT_ROUNDS: z.number(),
    DATABASE_URL: z.string().nonempty(),
    NODEMAILER_GMAIL_PASSWORD: z.string().nonempty(),
    GMAIL_ADDRESS: z.string().nonempty()
})

const envInitial = {
    ENV: process.env.ENV,
    PORT: parseInt(process.env.PORT!),
    BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS!),
    DATABASE_URL: process.env.DATABASE_URL,
    NODEMAILER_GMAIL_PASSWORD: process.env.NODEMAILER_GMAIL_PASSWORD,
    GMAIL_ADDRESS: process.env.GMAIL_ADDRESS
}

const { success, data } = envSchema.safeParse(envInitial)

if (!success) {
    process.exit(1)
}

const envParsed = data
export default envParsed
