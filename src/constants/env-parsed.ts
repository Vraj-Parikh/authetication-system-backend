import { z } from 'zod'

const envSchema = z.object({
    ENV: z.string(),
    PORT: z.number(),
    DATABASE_URL: z.string()
})

const envInitial = {
    ENV: process.env.ENV,
    PORT: parseInt(process.env.PORT!),
    DATABASE_URL: process.env.DATABASE_URL
}

const { success, data } = envSchema.safeParse(envInitial)

if (!success) {
    process.exit(1)
}

const envParsed = data
export default envParsed
