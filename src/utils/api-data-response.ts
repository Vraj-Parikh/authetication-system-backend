import { Request, Response } from 'express'
import { TApiResponse } from '../types/api-response'
import { getResponseMetaData } from './get-response-meta-data'

export function sendApiDataResponse(
    req: Request,
    res: Response,
    statusCode: number,
    data: unknown,
    additionalMeta?: unknown
) {
    const response: TApiResponse = {
        meta: null,
        errors: null,
        data: null
    }
    response.data = data
    response.meta = getResponseMetaData(req)
    if (additionalMeta) {
        response.meta = {
            ...response.meta,
            additional: additionalMeta
        }
    }
    res.status(statusCode).json(response)
}
