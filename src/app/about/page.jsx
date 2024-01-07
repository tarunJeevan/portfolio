'use client'
import { useState, useTransition } from "react"
import { motion } from "framer-motion"

const variants = {
    default: { width: 0 },
    active: { width: 'calc(100% - 0.75rem)' }
}

// FIXME: Edit as needed
const TAB_DATA = [
    {
        title: 'About Me',
        id: 'about',
        content: (
            <ul className="list-disc pl-2">
                <li>About me test</li>
                <li>Replace TAB_DATA with Sanity data</li>
                <li>
                    Greetings! I am a passionate and dedicated computer science graduate student with a keen interest in exploring the intersection of technology and creativity. My academic journey has equipped me with a solid foundation in computer science, complemented by a genuine enthusiasm for delving into diverse realms such as history, mythology, game development, and fiction writing.
                    <br />
                    My academic pursuits have not only honed my technical skills but have also fueled my curiosity to innovate and create. I am deeply engaged in the world of game development, leveraging my programming prowess to craft immersive and captivating gaming experiences. Through this, I aim to bridge the gap between cutting-edge technology and the enchanting narratives of history and mythology.
                    <br />
                    As a professional with a penchant for problem-solving and a flair for creativity, I am actively seeking opportunities to contribute to projects that align with my diverse skill set. My goal is to blend my technical expertise with my passion for storytelling, creating engaging and meaningful digital experiences.
                    <br />
                    This portfolio is a window into my journey, showcasing projects that reflect my commitment to excellence and my ability to bring ideas to life. I invite you to explore and connect with me, whether you&apos;re a fellow enthusiast, a potential collaborator, or an employer seeking someone with a unique blend of technical acumen and creative flair.
                    <br />
                    Thank you for visiting, and I look forward to the exciting possibilities that lie ahead.
                </li>
            </ul>
        )
    },
    {
        title: 'My Skills',
        id: 'skills',
        content: ( //FIXME: Add multiple ul to organize languages, frameworks, cybersecurity, etc
            <>
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
                    <li>NMap</li>
                    <li>TCPDump</li>
                    <li>Wireshark</li>
                    <li>Ghidra</li>
                    <li>Autopsy</li>
                    <li>Metasploit</li>
                    <li>BeEf</li>
                    <li>zsteg</li>
                    <li>CSS/Tailwind</li>
                    <li>Unreal Engine</li>
                </ul>
            </>
        )
    },
    {
        title: 'My Education',
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                <li>Purdue University Fort Wayne, Ft Wayne, IN</li>
                <li>Bachelor&apos;s in Computer Science</li>
                <li>Master&apos;s in Computer Science</li>
            </ul>
        )
    },
    {
        title: 'My Certifications',
        id: 'certifications',
        content: (
            <ul className="list-disc pl-2">
                <li></li>
            </ul>
        )
    },
    {
        title: 'My Work Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-2">
                <li>Writing Center Consultant</li>
                <li>Teacher&apos;s Assistant for Computer Security course</li>
            </ul>
        )
    }
]

export default function AboutPage() {
    const [tab, setTab] = useState('about')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <main className="bg-[#121212] flex min-h-screen flex-col">
            <section className="container mt-24 mx-auto px-12 py-4 grid grid-cols-10 gap-4 items-start">
                <div className="col-span-3 mt-24 px-8 flex flex-col gap-4">
                    <TabButton isActive={tab === 'about'} selectTab={() => handleTabChange('about')}>
                        About Me
                    </TabButton>
                    <TabButton isActive={tab === 'skills'} selectTab={() => handleTabChange('skills')}>
                        My Skills
                    </TabButton>
                    <TabButton isActive={tab === 'education'} selectTab={() => handleTabChange('education')}>
                        My Education
                    </TabButton>
                    <TabButton isActive={tab === 'certifications'} selectTab={() => handleTabChange('certifications')}>
                        My Certifications
                    </TabButton>
                    <TabButton isActive={tab === 'experience'} selectTab={() => handleTabChange('experience')}>
                        My Work Experience
                    </TabButton>
                </div>
                <div className="col-span-7 mt-8">
                    {TAB_DATA.find((item) => item.id === tab).content}
                </div>
            </section>
        </main>
    )
}

function TabButton({ isActive, selectTab, children }) {
    const btnClasses = isActive
        ? 'text-white'
        : 'text-[#ADB7BE]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 text-left font-semibold hover:text-white ${btnClasses}`}>
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