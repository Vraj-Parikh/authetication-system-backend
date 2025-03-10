import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import healthHandler from '../controller/health.js'

const healthRouter = Router()

healthRouter.route('/health').get(asyncHandler(healthHandler))

export default healthRouter
