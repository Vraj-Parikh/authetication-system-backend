import { NextFunction, Request, Response } from 'express'
import { sendApiErrorResponse } from '../utils/api-error-response'
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
    const errors: TApiResponseError[] = [
        {
            code: code + '',
            detail,
            title
        }
    ]
    sendApiErrorResponse(req, title, code, errors)
}
