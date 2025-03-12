import { z } from 'zod'
import { isTimeZoneValid } from '../../../utils/helper'

export const registerSchema = z.object({
    body: z.object({
        name: z.string().min(2).max(72),
        email: z.string().email(),
        timezone: z.string().refine((val) => isTimeZoneValid(val), {
            message: 'Invalid timezone'
        }),
        password: z.string().nonempty().min(8).max(24).trim(),
        consent: z.boolean()
    })
})
