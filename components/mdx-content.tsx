import { JSX } from "react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"

// Custom component to style <code> tags which display code snippets in Markdown
function Code({ children, ...props }: any) {
    let codeHtml = highlight(children)
    return <code
        dangerouslySetInnerHTML={{ __html: codeHtml }}
        {...props}
    />
}

const components = {
    code: Code
    // Add custom component for specific tags as necessary
    // Note: Add custom client components to add interactivity to static Markdown pages
}


export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
    return (
        <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
    )
}
