import Link from "next/link"
import { BsLinkedin, BsDiscord } from 'react-icons/bs'

export default function Footer() {

    return (
        <footer className="footer border z-10 text-white border-t-[#33353F] border-l-transparent border-r-transparent">
            <div className="container mx-auto py-12 px-10 flex items-center justify-between">
                <span>LOGO</span>
                <div className="flex flex-col items-end gap-2">
                    <div className='flex flex-row gap-1'>
                        <Link href={'#'} className='flex items-center p-1 rounded-md hover:text-black hover:bg-white'>
                            <BsDiscord className='h-5 w-5' />
                        </Link>
                        <Link href={'#'} className='flex items-center p-1 rounded-md hover:text-black hover:bg-white'>
                            <BsLinkedin className='h-5 w-5' />
                        </Link>
                    </div>
                    <p className="text-slate-500">All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
