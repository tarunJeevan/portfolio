import React from 'react'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'

// Customize styling via className and pass the object into MDXRemote's components prop
const componentStyles = {
    h1: (props: any) => (
        <h1 {...props} className=''>
            props.children
        </h1>
    )
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params
    const post = await getPostBySlug(slug)

    if (!post)
        notFound()

    const { metadata, content } = post
    const { title, image, author, publishedAt } = metadata

    return (
        <section className="pb-24 pt-32">
            <div className="container max-w-3xl">
                <Link href='/posts' className='mb-8 inline-flex items-center gap-2'>
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span>Back to posts</span>
                </Link>

                {image && (
                    <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                        <Image src={image} alt={title || ''} className="object-cover" fill />
                    </div>
                )}

                <header>
                    <h1 className="title">{title}</h1>
                    <p className="mt-3 text-xs text-muted-foreground">
                        {author} / {formatDate(publishedAt ?? '')}
                    </p>
                </header>

                <main className="prose mt-16 dark:prose-invert">
                    <MDXRemote source={content} />
                </main>
            </div>
        </section>
    )
}