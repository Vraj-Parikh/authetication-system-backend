import nodemailer from 'nodemailer'
import { TSendEmailInfo } from '../types/send-mail'
import envParsed from '../constants/env-parsed'
import Mail from 'nodemailer/lib/mailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: envParsed.GMAIL_ADDRESS,
        pass: envParsed.NODEMAILER_GMAIL_PASSWORD
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 10
})

export async function sendMail(sendEmailInfo: TSendEmailInfo) {
    const { to, subject, html } = sendEmailInfo
    const mailOptions: Mail.Options = {
        from: envParsed.GMAIL_ADDRESS,
        to,
        subject,
        html
    }
    const response = await transporter.sendMail(mailOptions)
    return response
}
