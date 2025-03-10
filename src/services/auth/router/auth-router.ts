import { Router } from 'express'
import { validator } from '../../../validations/validator'
import { loginSchema } from '../validations/login'
import { loginHandler } from '../controller/login'
import asyncHandler from 'express-async-handler'
import selfIdentifyHandler from '../controller/self-identify'
import protectRoute from '../../../middleware/protect-route'

const authRouter = Router()

authRouter
    .route('/login')
    .post(validator(loginSchema), asyncHandler(loginHandler))
authRouter.route('/self').get(protectRoute, asyncHandler(selfIdentifyHandler))

export default authRouter
