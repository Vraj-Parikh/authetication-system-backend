import { Router } from 'express'
import { validator } from '../../../validations/validator.js'
import { loginSchema } from '../validations/login.js'
import { loginHandler } from '../controller/login.js'
import asyncHandler from 'express-async-handler'
import selfIdentifyHandler from '../controller/self-identify.js'
import protectRoute from '../../../middleware/protect-route.js'

const authRouter = Router()

authRouter
    .route('/login')
    .post(validator(loginSchema), asyncHandler(loginHandler))
authRouter.route('/self').get(protectRoute, asyncHandler(selfIdentifyHandler))

export default authRouter
