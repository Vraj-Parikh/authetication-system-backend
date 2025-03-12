import { Request, Response } from 'express'
import { sendApiDataResponse } from '../../../utils/api-data-response'
import { successMessage } from '../../../constants/success-message'
import { TRegisterSchema } from '../types/register'
import { getUserByEmail, registerUserQuery } from '../query/register'
import { hashPassword } from '../utils/encrypt'
import { sendApiErrorResponse } from '../../../utils/api-error-response'
import { errorMessage } from '../../../constants/error-message'
import { TApiResponseError } from '../../../types/api-response'
import { sendVerificationMail } from '../utils/send-verification-mail'

export async function registerHandler(req: Request, res: Response) {
    const reqBody = req.body as TRegisterSchema['body']

    const userByEmail = await getUserByEmail(reqBody.email)

    if (userByEmail) {
        const { code, title } = errorMessage.BAD_REQUEST
        const errors: TApiResponseError[] = [
            {
                code: String(code),
                title,
                detail: 'User already exists.'
            }
        ]
        sendApiErrorResponse(req, title, code, errors)
        return
    }
    const hashedPassword = await hashPassword(reqBody.password)

    const user = await registerUserQuery({
        ...reqBody,
        password: hashedPassword
    })
    const response = await sendVerificationMail(
        'vrajparikh151@gmail.com',
        '123456'
    )
    console.log(response)
    const data = {
        user
    }
    sendApiDataResponse(req, res, successMessage.CREATED.code, data)
}
