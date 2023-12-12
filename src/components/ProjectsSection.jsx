'use client'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

// FIXME: Add proper git and preview URLs. Fix project descriptions
const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Next.js Portfolio Website',
        description: 'A custom portfolio website made using Next.js',
        image: '/images/projects/1.png',
        tags: ['All', 'Web Apps'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'MERN Writing Tool Website',
        description: 'An online writing and worldbuilding tool',
        image: '/images/projects/2.png',
        tags: ['All', 'Web Apps'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Expenses Calculator',
        description: 'A personalized expenses calculator to track my revenue and expenses',
        image: '/images/projects/3.png',
        tags: ['All', 'Desktop Apps'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'Student Survey App',
        description: 'A course project designed for student researchers that want to easily create and distribute custom surveys',
        image: '/images/projects/4.png',
        tags: ['All', 'Web Apps'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'The Proving Grounds',
        description: 'A medieval fantasy game prototype built using Unreal Engine 5',
        image: '/images/projects/5.png',
        tags: ['All', 'Games'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 6,
        title: 'Prison Island',
        description: 'A survival game prototype built using Unreal Engine 5',
        image: '/images/projects/project1.png',
        tags: ['All', 'Games'],
        gitUrl: '/',
        previewUrl: '/'
    }
]

export default function ProjectsSection() {
    const [filter, setFilter] = useState('All')
    const viewRef = useRef(null)
    const isInView = useInView(viewRef, { once: true })

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    // TODO: Use useMemo here?
    const filteredProjects = PROJECTS_DATA.filter((project) => {
        project.tags.includes(filter)
    })

    return (
        <section>
            <h2>My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag name={'All'} onClick={handleFilterChange} isSelected={filter === 'All'} />
                <ProjectTag name={'Web'} onClick={handleFilterChange} isSelected={filter === 'Web'} />
                <ProjectTag name={'Games'} onClick={handleFilterChange} isSelected={filter === 'Games'} />
                <ProjectTag name={'Desktop'} onClick={handleFilterChange} isSelected={filter === 'Desktop'} />
            </div>
            <ul ref={viewRef} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => {
                    return (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial='initial'
                            animate={isInView ? 'animate' : 'initial'}
                            transition={{ duration: 0.3, delay: index * 0.3 }}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    )
                })}
            </ul>
        </section>
    )
}

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {

    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
            >
                <div id="card-overlay" className="overlay items-center justify-center absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden gap-1 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
}

function ProjectTag({ name, onClick, isSelected }) {
    const btnStyles = isSelected
        ? 'text-white border-secondary-500'
        : 'text-[#ADB7BE] border-slate-600 hover:border-white'

    return (
        <button onClick={() => onClick(name)} className={`${btnStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
            {name}
        </button>
    )
}