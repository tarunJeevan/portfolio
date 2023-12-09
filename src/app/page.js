import Image from 'next/image'
import HeroSection from './components/HeroSection'

export default function Home() {

    return (
        <main className="bg-[#121212] flex min-h-screen flex-col">
            <div class="container mx-auto px-12 py-4">
                <HeroSection />
            </div>
        </main>
    )
}
