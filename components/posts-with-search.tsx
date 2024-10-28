'use client'

import { useState } from "react"
import { PostMetadata } from "@/lib/posts"
import Posts from "./posts"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
    const [query, setQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState('All')

    // Filter out the Bio post
    const blogPosts = posts.filter(post => !post.tags?.includes('Biography'))

    // Filter posts by tag and title
    const filtered = blogPosts.filter(post => {
        const matchesTitle = post.title?.toLowerCase().includes(query.toLowerCase())
        // If selectedTag is 'All' then show all posts. If not, filter
        const matchesTag = selectedTag !== 'All' ? post.tags?.includes(selectedTag) : true

        return matchesTag && matchesTitle
    })

    // Get all tags from all posts
    const postTags = blogPosts
        .map(post => post.tags)
        .flat()

    // Filter postTags to get all unique tags. Used to render options for select
    const uniqueTags = [...new Set(postTags)]

    const isFiltered = query.length > 0 || selectedTag !== 'All'

    function resetFilter() {
        setQuery('')
        setSelectedTag('All')
    }

    return (
        <div>
            <div className="mb-12 flex items-center gap-3">
                <Select onValueChange={value => setSelectedTag(value)}>
                    <SelectTrigger className="w-32 max-w-32">
                        <SelectValue placeholder='Tags' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Tags</SelectLabel>
                            <SelectItem key='All' value="All">All</SelectItem>
                            {uniqueTags.map(tag => (
                                <SelectItem key={tag} value={tag ?? ""}>{tag}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input
                    type="text"
                    placeholder="Search posts..."
                    className="h-9 w-3/5"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />

                {isFiltered && (
                    <Button
                        size='sm'
                        value='secondary'
                        onClick={resetFilter}
                        className="h-8 px-2 lg:px-3"
                    >
                        Clear
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>

            <Posts posts={filtered} />
        </div>
    )
}
