import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { usersTable } from './users'

export const userRefreshTokenTable = pgTable('user_refresh_token', {
    user_id: uuid('user_id')
        .primaryKey()
        .references(() => usersTable.user_id),
    refreshToken: varchar('refresh_token').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
})
