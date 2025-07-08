import { notFound } from 'next/navigation'
import Link from 'next/link'

import MDContent from '@/components/md-content'

import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate, getH2Headings, parseToHtml } from '@/lib/utils'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import SideMenu from '@/components/side-menu'

/* Tells Next.js to statically generate pages for the slugs we have. This boosts performance 
so users don't have to wait for a page to be rendered dynamically */
export async function generateStaticParams() {
    const posts = await getPosts()
    const slugs = posts.map(post => ({ slug: post.slug }))

    return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params
    const post = await getPostBySlug(slug)
    const headings = await getH2Headings(post!.content)

    if (!post)
        notFound()

    const { metadata, content } = post
    const { title, author, publishedAt } = metadata

    const contentHtml = await parseToHtml(content)

    return (
        <section className="pb-24 pt-32">
            <div className="container flex flex-col md:flex-row items-start justify-center sticky max-w-6xl">
                {/* Side menu */}
                <SideMenu headings={headings} />

                {/* Post section */}
                <div className="px-4 w-full">
                    <Link
                        href='/posts'
                        className='mb-8 inline-flex items-center gap-2 transition-transform duration-300 transform hover:scale-105'
                    >
                        <ArrowLeftIcon className='h-5 w-5' />
                        <span>Back to posts</span>
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