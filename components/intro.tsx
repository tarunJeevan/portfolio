import Image from "next/image"
import authorImage from '@/public/images/profilePic.png' // Confirm that this exists

export default function Intro() {
    return (
        <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4">
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">
                    Hey, I&#39;m Tarun.
                    <p className="mt-3 font-light text-muted-foreground">
                        {/* Intro paragraph */}
                    </p>
                </h1>
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
