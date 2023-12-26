'use client'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"

// FIXME: Put profile picture above hire me button
export default function HeroSection() {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-tertiary-700">Hello, I&apos;m{' '}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Tarun',
                                1000,
                                'a Web Developer',
                                1000,
                                'a Game Designer',
                                1000,
                                'a Game Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor...
                    </p>
                    <div>
                        <button className="w-full sm:w-fit font-bold bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 hover:bg-slate-200 text-black px-6 py-3 rounded-full mr-4">
                            Hire Me
                        </button>
                        <button className="w-full sm:w-fit font-bold bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 hover:bg-slate-800 text-white mt-3 px-1 py-1 rounded-full">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </motion.div>
                
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src={""}
                            alt="Profile pic"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
