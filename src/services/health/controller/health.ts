import { Request, Response } from 'express'
import { getApplicationHealth, getSystemHealth } from '../../../utils/health.js'
import { getResponseMetaData } from '../../../utils/get-response-meta-data.js'
import { sendApiDataResponse } from '../../../utils/api-data-response.js'
import { successMessage } from '../../../constants/success-message.js'

export default function healthHandler(req: Request, res: Response) {
    const applicationHealth = getApplicationHealth()
    const systemHealth = getSystemHealth()
    const data = {
        applicationHealth,
        systemHealth
    }
    const meta = getResponseMetaData(req)
    const { code } = successMessage.OK
    sendApiDataResponse(res, code, data, meta)
}
