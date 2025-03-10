import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

const isProduction = process.env.ENV === 'production'
export default defineConfig({
    out: `./migrations/${isProduction ? 'production' : 'development'}`,
    schema: './src/db/drizzle-connect.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
})
