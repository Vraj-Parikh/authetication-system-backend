import { Request, Response } from 'express'
import { sendApiDataResponse } from '../../../utils/api-data-response'
import { successMessage } from '../../../constants/success-message'
import { getResponseMetaData } from '../../../utils/get-response-meta-data'

export default function selfIdentifyHandler(req: Request, res: Response) {
    const data = {}
    const meta = getResponseMetaData(req)
    const { code } = successMessage.OK
    sendApiDataResponse(res, code, data, meta)
}
