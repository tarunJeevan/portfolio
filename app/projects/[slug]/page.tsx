import Link from "next/link"
import { notFound } from "next/navigation"

import { formatDate, getH2Headings, parseToHtml } from "@/lib/utils"
import { getProjectBySlug, getProjects } from "@/lib/projects"

import MDContent from "@/components/md-content"

import { ArrowLeftIcon } from "@radix-ui/react-icons"
import SideMenu from "@/components/side-menu"

export async function generateStaticParams() {
    const projects = await getProjects()
    const slugs = projects.map(project => ({ slug: project.slug }))

    return slugs
}

export default async function Project({ params }: { params: { slug: string } }) {
    const { slug } = params
    const project = await getProjectBySlug(slug)
    const headings = await getH2Headings(project!.content)

    if (!project)
        notFound()

    const { metadata, content } = project
    const { title, author, publishedAt } = metadata

    const contentHtml = await parseToHtml(content)

    return (
        <section className="pb-24 pt-32">
            <div className="container flex flex-col md:flex-row items-start justify-center sticky max-w-6xl">
                {/* Side menu */}
                <SideMenu headings={headings} />

                {/* Project section */}
                <div className="px-4 w-full">
                    <Link
                        href='/projects'
                        className="mb-8 inline-flex items-center gap-2 transition-transform duration-300 transform hover:scale-105"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span>Back to projects</span>
                    </Link>
                    <header>
                        <h1 className="title">{title}</h1>
                        <p className="mt-3 text-xs text-muted-foreground">
                            {author} / {formatDate(publishedAt ?? '')}
                        </p>
                    </header>
                    <section className="prose mt-16 dark:prose-invert max-w-full">
                        <MDContent html={contentHtml} />
                    </section>
                </div>
            </div>
        </section>
    )
}
