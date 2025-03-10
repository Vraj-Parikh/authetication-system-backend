import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { usersTable } from './users'

export const userDetailsTable = pgTable('user_details', {
    user_id: uuid('user_id')
        .primaryKey()
        .references(() => usersTable.user_id),
    timezone: varchar('timezone').notNull(),
    resetPasswordToken: varchar('reset_password_token'),
    verificationToken: varchar('verification_token'),
    verificationCode: varchar('verification_code'),
    password: varchar('password').notNull(),
    resetPasswordExpiresAt: timestamp('reset_password_expires_at'),
    verificationExpiresAt: timestamp('verification_expires_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    lastLoginAt: timestamp('last_login_at'),
    accountConfirmedAt: timestamp('account_confirmed_at'),
    lastPasswordResetAt: timestamp('last_password_reset_at')
})

export const userPhoneNumberTable = pgTable('user_phone_number', {
    user_id: uuid('user_id')
        .primaryKey()
        .references(() => usersTable.user_id),
    isoCode: varchar('iso_code').notNull(),
    countryCode: varchar('country_code').notNull(),
    internationalNumber: varchar('internationalNumber').notNull()
})
