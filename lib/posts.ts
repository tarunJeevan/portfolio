import path from "path"
import fs from "fs"
import matter from "gray-matter"

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
    metadata: PostMetadata,
    content: string
}

export type PostMetadata = {
    title?: string,
    summary?: string,
    image?: string,
    author?: string,
    publishedAt?: string,
    tags?: string[],
    slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

        const { data, content } = matter(fileContent)
        return { metadata: { ...data, slug }, content }
    } catch (error) {
        return null
    }
}

// Return a list of posts from the content directory sorted by most recent, with the option to limit the number of posts
export async function getPosts(limit?: number): Promise<PostMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    // Process files into a more appropriate data structure and filter by date
    const posts = files
        .map(file => getPostMetadata(file))
        .sort((a, b) => {
            if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? ''))
                return 1
            else
                return -1
        })

    // Return a smaller list of the most recent posts if a limit was specified
    if (limit)
        return posts.slice(0, limit)

    return posts
}

// Process MDX files using gray-matter and return page front matter
export function getPostMetadata(filepath: string): PostMetadata {
    // Create a slug using file name
    const slug = filepath.replace(/\.mdx$/, '')
    // Retrieve and read file
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    // Retrieve file metadata, i.e., front matter
    const { data } = matter(fileContent)

    return { ...data, slug }
}