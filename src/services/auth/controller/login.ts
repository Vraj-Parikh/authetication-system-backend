import { Request, Response } from 'express'
import { sendApiDataResponse } from '../../../utils/api-data-response'
import { successMessage } from '../../../constants/success-message'

export function loginHandler(req: Request, res: Response) {
    const success = true
    if (!success) {
        throw new Error('login error')
    }
    sendApiDataResponse(req, res, successMessage.OK.code, {
        id: 1,
        role: 'admin',
        name: 'vraj'
    })
}
