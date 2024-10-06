import { getPostBySlug, Post } from "@/lib/posts"
import MDXContent from "./mdx-content"
import SideMenu from "./side-menu"

export default async function Personal() {
    const post = await getPostBySlug('biography')

    // TODO: Figure out how to fix this error
    const { metadata, content } = post!
    const { tags } = metadata

    return (
        <div className="flex flex-row gap-x-4 justify-between items-center">
            {/* Side Menu */}
            <SideMenu tags={tags ?? ['']} />

            {/* Info section */}
            {/* TODO: Style main if necessary */}
            <main className="">
                <MDXContent source={content} />
            </main>
        </div>
    )
}
