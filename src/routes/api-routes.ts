import { Router } from 'express'
import authRouter from '../services/auth/router/auth-router'
import healthRouter from '../services/health/router/health-router'

const apiRoutes = Router()

apiRoutes.use(authRouter)
apiRoutes.use(healthRouter)

export default apiRoutes
