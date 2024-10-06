import ProjectsWithSearch from "@/components/projects-with-search"
import { getProjects } from "@/lib/projects"

export default async function ProjectsPage() {
    const projects = await getProjects()
    return (
        <section className="pb-24 pt-40">
            <div className="container max-w-4xl">
                <h1 className="title mb-12">Projects</h1>

                <ProjectsWithSearch projects={projects} />
            </div>
        </section>
    )
}
