import { NextFunction, Request, Response } from 'express'
import { sendApiErrorResponse } from '../utils/api-error-response'
import { getResponseMetaData } from '../utils/get-response-meta-data'
import { TApiResponseError } from '../types/api-response'
import { errorMessage } from '../constants/error-message'

export default function protectRoute(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    //@ts-expect-error user will be custom property
    if (req.user) {
        next()
        return
    }
    const { code, detail, title } = errorMessage.UNAUTHORIZED
    const meta = getResponseMetaData(req)
    const errors: TApiResponseError[] = [
        {
            code: code + '',
            detail,
            title
        }
    ]
    sendApiErrorResponse(title, code, errors, meta)
}
