import { VERIFICATION_EMAIL_TEMPLATE } from '../../../email-template/verification-email'
import { TSendEmailInfo } from '../../../types/send-mail'
import { sendMail } from '../../../utils/send-mail'

export async function sendVerificationMail(
    sendTo: string,
    verificationCode: string
) {
    const sendEmailInfo: TSendEmailInfo = {
        to: sendTo,
        subject: 'Email Verification',
        html: VERIFICATION_EMAIL_TEMPLATE(verificationCode)
    }
    return await sendMail(sendEmailInfo)
}
