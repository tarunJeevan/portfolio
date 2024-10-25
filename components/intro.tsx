import Image from "next/image"
import { buttonVariants } from "./ui/button"
import Link from "next/link"

export default function Intro() {
    return (
        <section className="flex flex-col sm:flex-row items-center gap-x-10 gap-y-4 pb-24">
            <div className="relative">
                <Image
                    className="flex-1 rounded-lg grayscale"
                    src='/images/profilePic.png'
                    alt="Tarun Jeevan"
                    width={250}
                    height={250}
                    priority
                />
            </div>
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">
                    Hey, I&apos;m Tarun.
                    <p className="mt-3 font-light text-base text-muted-foreground">
                        I&apos;m an Adjunct Professor in the Computer Science department of St Charles Community College, currently teaching their IT140 - Programming Languages for System Administrators course. My interests lie in web & network security, web development, and game development and I am especially passionate about teaching and research.
                    </p>
                </h1>
                <div className="flex flex-row gap-x-2 py-2">
                    <Link
                        href='/about-me'
                        className={`py-6 px-5 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-300 dark:hover:bg-emerald-400 ${buttonVariants({ variant: "default" })}`}
                    >
                        About Me
                    </Link>
                    <Link
                        href='/resume.pdf'
                        target="_blank"
                        className={`py-5 px-5 rounded-full border-4 border-sky-600 dark:border-sky-400 bg-sky-500 hover:bg-sky-600 dark:bg-sky-300 dark:hover:bg-sky-400 ${buttonVariants({ variant: 'default' })}`}
                    >
                        View Resume
                    </Link>
                </div>
            </div>

        </section>
    )
}
