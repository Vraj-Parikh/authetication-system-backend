import { NextFunction, Request, Response } from 'express'
import { generateRandomId } from '../utils/helper'
export default function assignRequestId(
    req: Request,
    _: Response,
    next: NextFunction
) {
    const reqId = generateRandomId()
    //@ts-expect-error custom id added
    req.id = reqId
    next()
}
