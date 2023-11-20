import Image from "next/image";


export default function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hello, I&apos;m Tarun
                    </h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor...
                    </p>
                </div>
                {/* Image */}
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src={""}
                            alt="Profile pic"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
