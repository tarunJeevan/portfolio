type MDContentProps = {
    html: string
}

export default function MDContent({ html }: MDContentProps) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
