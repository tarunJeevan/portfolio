import { Inter } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tarun Jeevan',
    description: "Tarun Jeevan's portfolio website",
}

export default function PortfolioLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
