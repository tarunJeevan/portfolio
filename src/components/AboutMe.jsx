'use client'
import Image from "next/image"
import { useState, useTransition } from "react"
import { motion } from "framer-motion"

const variants = {
    default: { width: 0 },
    active: { width: 'calc(100% - 0.75rem)' }
}

// FIXME: Edit as needed
const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>C++</li>
                <li>Java</li>
                <li>C</li>
                <li>HTML</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>CSS/Tailwind</li>
                <li>Unreal Engine</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                <li>Purdue University Fort Wayne, Ft Wayne, IN</li>
                <li>Bachelor's in Computer Science</li>
                <li>Master's in Computer Science</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className="list-disc pl-2">
                <li></li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-2">
                <li>Writing Center Consultant</li>
                <li>Teacher's Assistant for Computer Security course</li>
            </ul>
        )
    }
]

export default function AboutMe() {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src={''}
                    alt="About Me Image"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Description
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton isActive={tab === 'skills'} selectTab={() => handleTabChange('skills')}>
                            Skills
                        </TabButton>
                        <TabButton isActive={tab === 'education'} selectTab={() => handleTabChange('education')}>
                            Education
                        </TabButton>
                        <TabButton isActive={tab === 'certifications'} selectTab={() => handleTabChange('certifications')}>
                            Certifications
                        </TabButton>
                        <TabButton isActive={tab === 'experience'} selectTab={() => handleTabChange('experience')}>
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((item) => item.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TabButton({ isActive, selectTab, children }) {
    const btnClasses = isActive
        ? 'text-white'
        : 'text-[#ADB7BE]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${btnClasses}`}>
                {children}
            </p>
            <motion.div
                variants={variants}
                animate={isActive ? 'active' : 'default'}
                className="h-1 bg-secondary-500 mt-2 mr-3"
            ></motion.div>
        </button>
    )
}