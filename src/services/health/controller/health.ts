import { Request, Response } from 'express'
import { getApplicationHealth, getSystemHealth } from '../../../utils/health'
import { sendApiDataResponse } from '../../../utils/api-data-response'
import { successMessage } from '../../../constants/success-message'

export default function healthHandler(req: Request, res: Response) {
    const applicationHealth = getApplicationHealth()
    const systemHealth = getSystemHealth()
    const data = {
        applicationHealth,
        systemHealth
    }
    const { code } = successMessage.OK
    sendApiDataResponse(req, res, code, data)
}
