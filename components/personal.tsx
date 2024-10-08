import { getPostBySlug, Post } from "@/lib/posts"
import MDXContent from "./mdx-content"
import SideMenu from "./side-menu"

export default async function Personal() {
    const post = await getPostBySlug('biography')

    const { metadata, content } = post!
    const { tags } = metadata

    return (
        <div className="flex flex-row gap-x-4 items-start sticky top-20">
            {/* Side Menu */}
            <SideMenu tags={tags!} />

            {/* Info section */}
            <main className="prose dark:prose-invert max-w-3xl px-4">
                <MDXContent source={content} />
            </main>
        </div>
    )
}
