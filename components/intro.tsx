import Image from "next/image"
import authorImage from '@/public/images/profilePic.png' // Confirm that this exists

export default function Intro() {
    return (
        <section className="flex flex-row items-start gap-x-10 gap-y-4 pb-24">
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">
                    Hey, I&#39;m Tarun.
                    <p className="mt-3 font-light text-lg text-muted-foreground">
                        I&#39;m a professor at St Charles Community College with a Master's in Computer Science.
                    </p>
                </h1>
                {/* TODO: Two buttons linking to About Me page and Contact Form */}
            </div>
            <div className="relative">
                <Image
                    className="flex-1 rounded-lg grayscale"
                    src={authorImage}
                    alt="Tarun Jeevan"
                    width={175}
                    height={175}
                    priority
                />
            </div>
        </section>
    )
}
