import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'

export const generateStaticParams = async () => {
    const files = fs.readdirSync('src/projects/')
    const mdFiles = files.filter((file) => file.endsWith('.md'))

    return mdFiles.map((filename) => ({
        id: filename.replace('.md', '')
    }))
}

const getProjectContent = (id) => {
    const file = `src/projects/${id}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
}

export default function Page({ params }) {
    const { id } = params
    const projectContent = getProjectContent(id)

    return (
        <section>
            <h1>{projectContent.data.title}</h1>
            <h2>{projectContent.data.subtitle}</h2>
            <h3>{projectContent.data.date}</h3>

            <Markdown>{projectContent.content}</Markdown>
        </section>
    )
}
