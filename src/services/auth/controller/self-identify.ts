import { Request, Response } from 'express'
import { sendApiDataResponse } from '../../../utils/api-data-response.js'
import { successMessage } from '../../../constants/success-message.js'
import { getResponseMetaData } from '../../../utils/get-response-meta-data.js'

export default function selfIdentifyHandler(req: Request, res: Response) {
    const data = {}
    const meta = getResponseMetaData(req)
    const { code } = successMessage.OK
    sendApiDataResponse(res, code, data, meta)
}
