'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
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

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap container lg:py-4 items-center justify-between mx-auto px-4 py-2">
                <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
                <div className="mobile-menu block md:hidden">
                    {!isOpen
                        ? <button
                            onClick={() => setIsOpen(true)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                        : <button
                            onClick={() => setIsOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <XMarkIcon className='h-5 w-5' />
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
