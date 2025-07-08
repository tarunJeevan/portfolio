import rehypeSlug from "rehype-slug"
import rehypeStarryNight from "rehype-starry-night"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { visit } from "unist-util-visit"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { unified } from "unified"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-us', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

export async function parseToHtml(content: string): Promise<string> {
	const processedContent = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeStarryNight)
		.use(rehypeStringify)
		.process(content)
	return processedContent.toString()
}

export async function getH2Headings(content: string): Promise<string[]> {
	const tree = unified().use(remarkParse).parse(content)
	const headings: string[] = []

	visit(tree, "heading", (node: any) => {
		if (node.depth === 2) {
			// Get inner text
			if (node.children[0].type === "text")
				headings.push(node.children[0].value)
			// Get inner text if wrapped in <strong> or <em>
			else if (node.children[0].type === "strong" || node.children[0].type === "em")
				headings.push(node.children[0].children[0].value)
		}
	})

	return headings
}