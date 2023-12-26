'use client'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import Link from "next/link"
import { useState } from "react"

const navLinks = [
    {
        title: 'About',
        href: '#about'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact',
        href: '#contact'
    }
]

// FIXME: Make mobile responsive
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed mx-auto border-b-2 border-b-[#5b5d68] top-0 left-0 right-0 z-10 bg-[#33353F] bg-opacity-100">
            <div className="flex flex-wrap container lg:py-4 items-center justify-between mx-auto px-4 py-2 sm:px-0 sm:py-0">
                <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
                <div className="block md:hidden">
                    {!isOpen
                        ? <button
                            onClick={() => setIsOpen(true)}
                            className='flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <HiBars3 className='h-5 w-5' />
                        </button>
                        : <button
                            onClick={() => setIsOpen(false)}
                            className='flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <HiXMark className='h-5 w-5' />
                        </button>
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {isOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

function NavLink({ href, title }) {

    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </Link>
    )
}

function MenuOverlay({ links, }) {

    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                )
            })}
        </ul>
    )
}
