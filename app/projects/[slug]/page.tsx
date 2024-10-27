import Link from "next/link"
import { notFound } from "next/navigation"

import { formatDate } from "@/lib/utils"
import { getProjectBySlug, getProjects } from "@/lib/projects"
import MDXContent from "@/components/mdx-content"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export async function generateStaticParams() {
    const projects = await getProjects()
    const slugs = projects.map(project => ({ slug: project.slug }))

    return slugs
}

export default async function Project({ params }: { params: { slug: string } }) {
    const { slug } = params
    const project = await getProjectBySlug(slug)

    if (!project)
        notFound()

    const { metadata, content } = project
    const { title, author, publishedAt } = metadata

    return (
        <section className="pb-24 pt-32">
            <div className="container max-w-3xl">
                <Link
                    href='/projects'
                    className="mb-8 inline-flex items-center gap-2 text-sm font-light"
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

                <main className="prose mt-16 dark:prose-invert max-w-3xl">
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}
