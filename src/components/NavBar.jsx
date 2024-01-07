'use client'
import { HiBars3, HiOutlineXMark, HiSun, HiMoon } from 'react-icons/hi2'
import { BsDiscord, BsLinkedin } from 'react-icons/bs'
import Link from "next/link"
import { useState } from "react"

const navLinks = [
    {
        title: 'About',
        href: '/portfolio#about'
    },
    {
        title: 'Projects',
        href: '/portfolio#projects'
    },
    {
        title: 'Contact',
        href: '/portfolio#contact'
    }
]

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState('light')

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-row container lg:py-4 items-center justify-between mx-auto px-4 py-2">
                <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />
                                </li>
                            )
                        })}
                        {/* FIXME: Button to switch between light and dark mode */}
                        {theme === 'light'
                            ? <button onClick={() => setTheme('dark')} className='pl-6'>
                                <HiSun className='h-5 w-5' />
                            </button>
                            : <button onClick={() => setTheme('light')} className='pl-6'>
                                <HiMoon className='h-5 w-5 text-black' />
                            </button>
                        }
                    </ul>
                </div>
                <div id='socials' className='flex flex-row gap-1 hidden md:inline-flex'>
                    <Link href={'#'} className='flex items-center p-1 rounded-md hover:text-black hover:bg-white'>
                        <BsDiscord className='h-5 w-5' />
                    </Link>
                    <Link href={'#'} className='flex items-center p-1 rounded-md hover:text-black hover:bg-white'>
                        <BsLinkedin className='h-5 w-5' />
                    </Link>
                </div>
                <div className="mobile-menu block md:hidden">
                    {!isOpen
                        ? <button
                            onClick={() => setIsOpen(true)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <HiBars3 className='h-5 w-5' />
                        </button>
                        : <button
                            onClick={() => setIsOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <HiOutlineXMark className='h-5 w-5' />
                        </button>
                    }
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
        <ul className="flex flex-col pt-4 items-center">
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                )
            })}
            <li className='flex flex-row gap-1 py-2 justify-center items-center border-t-2 border-t-[#ADB7BE] w-2/3'>
                <Link href={'#'} className='flex items-center p-1'>
                    <BsDiscord className='h-3 w-3' />
                </Link>
                <Link href={'#'} className='flex items-center p-1'>
                    <BsLinkedin className='h-3 w-3' />
                </Link>
            </li>
        </ul>
    )
}
