'use server'

import { z } from "zod"
import { ContactFormSchema } from "./schemas"
// import { Resend } from 'resend'
import sgMail, {MailDataRequired} from '@sendgrid/mail'
import ContactFormEmail from "@/emails/contact-form-email"

type ContactFormInputs = z.infer<typeof ContactFormSchema>
// const resend = new Resend(process.env.RESEND_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (result.error)
        return { error: result.error.format() }

    try {
        const { name, email, message } = result.data
        // const { data, error } = await resend.emails.send({
        //     from: 'tjeevan200@gmail.com',
        //     to: [email],
        //     cc: 'tjeevan200@gmail.com',
        //     subject: 'Contact Form Submission',
        //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        //     react: ContactFormEmail({ name, email, message })
        // })

        const msg: MailDataRequired = {
            to: 'tjeevan200@gmail.com',
            from: {
                email: 'donotreply@tarun-jeevan.vercel.app'
            },
            templateId: '',
            dynamicTemplateData: {
                name,
                email,
                message
            }
        }

        await sgMail.send(msg)

        return { success: true }
    } catch (error) {
        console.error(error)
        throw new Error('Failed to send email')
        return { error }
    }
}