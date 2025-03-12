import { NextFunction, Request, Response } from 'express'
import { ZodError, ZodSchema } from 'zod'
import { sendApiErrorResponse } from '../utils/api-error-response'
import { errorMessage } from '../constants/error-message'
import { TApiResponseError } from '../types/api-response'
import expressAsyncHandler from 'express-async-handler'

export function validator(schema: ZodSchema) {
    return expressAsyncHandler(
        (req: Request, _res: Response, next: NextFunction) => {
            const { success, error } = schema.safeParse(req)
            if (success) {
                next()
                return
            }
            if (error instanceof ZodError) {
                const { title, code } = errorMessage.VALIDATION_ERROR
                const errorsTransformed: TApiResponseError[] = []
                for (const issue of error.issues) {
                    errorsTransformed.push({
                        code: String(code),
                        title,
                        detail: `${issue.message} at ${issue.path.join('.')}`
                    })
                }
                sendApiErrorResponse(req, title, code, errorsTransformed)
            } else {
                throw error
            }
        }
    )
}
