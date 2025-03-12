import { Request } from 'express'
import {
    TApiResponse,
    TApiResponseError,
    TApiResponseMeta
} from '../types/api-response'
import { getResponseMetaData } from './get-response-meta-data'

export function sendApiErrorResponse(
    req: Request,
    errorType: string,
    statusCode: number,
    errors: TApiResponseError[],
    additionalMeta?: unknown
) {
    const errorInstance = new ApiErrorResponse(statusCode, errorType)
    errorInstance.setError(errors)
    errorInstance.setMeta(getResponseMetaData(req))
    if (additionalMeta) {
        errorInstance.setAdditionalMeta(additionalMeta)
    }
    throw errorInstance
}

class ApiErrorResponse extends Error {
    statusCode: number
    response: TApiResponse
    constructor(statusCode: number, errorType: string) {
        super(errorType)
        this.statusCode = statusCode
        this.response = {
            meta: null,
            errors: null,
            data: null
        }
    }
    getResponse() {
        return this.response
    }
    setError(errors: TApiResponseError[]) {
        this.response.errors = [...(this.response.errors || []), ...errors]
    }
    setMeta(meta: TApiResponseMeta) {
        this.response.meta = meta
    }
    setAdditionalMeta(additionalMeta: unknown) {
        if (this.response.meta) {
            this.response.meta = {
                ...this.response.meta,
                additional: additionalMeta
            }
        }
    }
}

export default ApiErrorResponse
