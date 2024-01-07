import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {

    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full gap-4">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    {/* TODO: Fill description */}
                    <p className="text-base lg:text-lg text-[#ADB7BE]">
                        Greetings! I am a passionate and dedicated computer science graduate student with a keen interest in exploring the intersection of technology and creativity. My academic journey has equipped me with a solid foundation in computer science, complemented by a genuine enthusiasm for delving into diverse realms such as history, mythology, game development, and fiction writing.
                    </p>
                    <Link href={'/about'} className="w-full sm:w-fit font-bold bg-gradient-to-br from-tertiary-500 via-secondary-500 to-primary-500 hover:bg-slate-800 text-white mt-3 px-1 py-1 rounded-sm">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-sm px-5 py-2">Learn More About Me!</span>
                    </Link>
                </div>
                <Image
                    src={'/images/wordcloud.png'}
                    alt="About Me Wordcloud"
                    width={600}
                    height={600}
                />
            </div>
        </section>
    )
}
