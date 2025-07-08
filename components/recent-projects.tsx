import Link from "next/link"
import { getProjects } from "@/lib/projects"
import Projects from "./projects"

export default async function RecentProjects() {
    const projects = await getProjects(4)

    return (
        <section className="pb-24">
            <div>
                <h2 className="title mb-12">Recent projects</h2>
                <Projects projects={projects} />

                <Link
                    href='/projects'
                    className="mt-8 inline-flex items-center gap-2 text-muted-foreground underline transition-transform duration-300 transform hover:scale-125"
                >
                    <span>All projects</span>
                </Link>
            </div>
        </section>
    )
}
