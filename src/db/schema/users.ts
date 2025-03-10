import { boolean, pgEnum, pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const userRole = pgEnum('user_role', ['ADMIN', 'USER'])
export const usersTable = pgTable('users', {
    user_id: uuid('user_id').primaryKey().defaultRandom(),
    user_name: varchar('user_name').notNull(),
    email: varchar('email').notNull().unique(),
    password: varchar('password').notNull(),
    isVerified: boolean('is_verified').default(false).notNull(),
    role: userRole().notNull().default('USER'),
    consent: boolean('consent').default(false).notNull()
})
