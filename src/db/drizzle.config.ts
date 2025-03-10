import { defineConfig } from 'drizzle-kit'

const isProduction = process.env.ENV === 'production'
export default defineConfig({
    out: `./migrations/${isProduction ? 'production' : 'development'}`,
    schema: './src/db/schema/*',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!
    },
    verbose: true,
    strict: true
})
