import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
const schema = {}
const db = drizzle({ client: pool, schema })

export default db
