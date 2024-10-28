'use client'

// import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { ContactFormSchema } from "@/lib/schemas"
import { sendEmail } from "@/lib/actions"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<Inputs>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const processForm: SubmitHandler<Inputs> = async data => {
        const result = await sendEmail(data)

        if (result?.error) {
            toast.error('An error ocurred! Please try again.')
            return
        }

        toast.success("Message sent successfully!")
        reset()
    }

    return (
        <section className="relative isolate">
            <form
                onSubmit={handleSubmit(processForm)}
                className="mt-16 lg:flex-auto"
                noValidate
            >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="given-name"
                            {...register('name')}
                        />

                        {errors.name?.message && (
                            <p className="ml-1 mt-2 text-sm text-rose-400">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            {...register('email')}
                        />

                        {errors.email?.message && (
                            <p className="ml-1 mt-2 text-sm text-rose-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <Textarea
                            rows={4}
                            placeholder="Message"
                            {...register('message')}
                        />

                        {errors.message?.message && (
                            <p className="ml-1 mt-2 text-sm text-rose-400">
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                </div>
                {/* Submit button */}
                <div className="mt-6">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Contact Me'}
                    </Button>
                </div>
                {/* TODO: Create privacy policy before uncommenting */}
                {/* <p className="mt-4 text-xs text-muted-foreground">
                    By submitting this form, I agree to the{' '}
                    <Link href='/privacy' className="font-bold">
                        privacy policy.
                    </Link>
                </p> */}
            </form>
        </section>
    )
}
