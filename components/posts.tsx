import Link from "next/link"

import { PostMetadata } from "@/lib/posts"
import { formatDate } from "@/lib/utils"

export default function Posts({ posts }: { posts: PostMetadata[] }) {

    // Filter out About Me post
    const filteredPosts = posts.filter(post => !post.tags?.includes('Biography'))

    return (
        <ul className="flex flex-row flex-wrap gap-8">
            {filteredPosts.map(post => (
                <li key={post.slug}>
                    <Link
                        href={`/posts/${post.slug}`}
                        className="flex flex-col justify-between gap-x-4 gap-y-1 max-w-xs px-2 py-2 rounded-md hover:shadow-lg dark:hover:shadow-gray-500 transition-all duration-100"
                    >
                        <div className="max-w-lg">
                            <p className="text-lg font-semibold">{post.title}</p>
                            <p className="mt-1 line-clamp-3 text-sm font-light italic text-muted-foreground">
                                {post.summary}
                            </p>
                        </div>

                        {post.publishedAt && (
                            <p className="mt-1 text-sm font-light">
                                {formatDate(post.publishedAt)}
                            </p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
