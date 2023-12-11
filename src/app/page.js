import AboutMe from './components/AboutMe'
import AchievementsSection from './components/AchievementsSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {

    return (
        <main className="bg-[#121212] flex min-h-screen flex-col">
            <NavBar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <AchievementsSection />
                <AboutMe />
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    )
}
