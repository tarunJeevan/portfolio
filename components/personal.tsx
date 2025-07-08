import { getPostBySlug } from "@/lib/posts"
import { getH2Headings, parseToHtml } from "@/lib/utils"

import SideMenu from "./side-menu"
import MDContent from "./md-content"

export default async function Personal() {
    const post = await getPostBySlug('biography')
    const headings = await getH2Headings(post!.content)

    const { content } = post!

    const contentHtml = await parseToHtml(content)

    return (
        <div className="flex flex-col md:flex-row sticky">
            {/* Side Menu */}
            <SideMenu headings={headings} />

            {/* Info section */}
            <main className="prose dark:prose-invert max-w-full px-4">
                <MDContent html={contentHtml} />
            </main>
        </div>
    )
}
