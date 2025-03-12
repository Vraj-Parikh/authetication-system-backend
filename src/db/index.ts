import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as user from './schema/users'
import * as userRefreshToken from './schema/user-refresh-token'
import * as userDetails from './schema/user-details'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
const schema = { ...user, ...userDetails, ...userRefreshToken }
const db = drizzle({ client: pool, schema })

export default db
