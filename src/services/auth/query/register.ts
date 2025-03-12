import { eq } from 'drizzle-orm'
import db from '../../../db'
import { usersTable } from '../../../db/schema/users'
import { TRegisterSchema } from '../types/register'

export async function registerUserQuery(userInfo: TRegisterSchema['body']) {
    const [registeredUser] = await db
        .insert(usersTable)
        .values(userInfo)
        .returning({
            user_id: usersTable.user_id,
            consent: usersTable.consent,
            email: usersTable.email,
            name: usersTable.name,
            role: usersTable.role,
            isVerified: usersTable.isVerified,
            timezone: usersTable.timezone
        })
    return registeredUser
}
export async function getUserByEmail(email: string) {
    return await db.query.usersTable.findFirst({
        where: eq(usersTable.email, email)
    })
}
