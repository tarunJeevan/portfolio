import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import MDXContent from '@/components/mdx-content'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

import { ArrowLeftIcon } from '@radix-ui/react-icons'

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

    if (!post)
        notFound()

    const { metadata, content } = post
    const { title, author, publishedAt } = metadata

    return (
        <section className="pb-24 pt-32">
            <div className="container max-w-3xl">
                <Link href='/posts' className='mb-8 inline-flex items-center gap-2'>
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span>Back to posts</span>
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