import { Router } from 'express'
import healthRouter from '../services/health/router/health-router'
import authRouter from '../services/auth/router/auth-router'

const apiRoutes = Router()

apiRoutes.use(authRouter)
apiRoutes.use(healthRouter)

export default apiRoutes
