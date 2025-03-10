import { Router } from 'express'
import authRouter from '../services/auth/router/auth-router.js'
import healthRouter from '../services/health/router/health-router.js'

const apiRoutes = Router()

apiRoutes.use(authRouter)
apiRoutes.use(healthRouter)

export default apiRoutes
