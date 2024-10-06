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

// Custom component to add id attributes to <h1> tags in Markdown
function Header1({ children, ...props }: any) {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-')
    return <h1 id={id}>{children}</h1>
}

// Custom component to add id attributes to <h2> tags in Markdown
function Header2({ children, ...props }: any) {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-')
    return <h2 id={id}>{children}</h2>
}

// Custom component to add id attributes to <h3> tags in Markdown
function Header3({ children, ...props }: any) {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-')
    return <h3 id={id}>{children}</h3>
}

const components = {
    code: Code,
    h1: Header1,
    h2: Header2,
    h3: Header3
    // Add custom component for specific tags as necessary
    // Note: Add custom client components to add interactivity to static Markdown pages
}

export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
    return (
        <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
    )
}
