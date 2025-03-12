import { Request, Response } from 'express'
import { sendApiDataResponse } from '../../../utils/api-data-response'
import { successMessage } from '../../../constants/success-message'

export default function selfIdentifyHandler(req: Request, res: Response) {
    const data = {}
    const { code } = successMessage.OK
    sendApiDataResponse(req, res, code, data)
}
