import { z } from 'zod'
import { registerSchema } from '../validations/register'

export type TRegisterSchema = z.infer<typeof registerSchema>
