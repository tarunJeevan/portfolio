'use server'

import { z } from "zod"
import { ContactFormSchema } from "./schemas"

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (result.error)
        return { error: result.error.format() }

    try {
        const { name, email, message } = result.data
        // TODO: Implement emailing with a mailing package. Rewrite as necessary
    } catch (error) {
        return { error }
    }
}