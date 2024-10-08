'use client'

import { useState } from "react"

import { ProjectMetadata } from "@/lib/projects"
import Projects from "./projects"

import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Cross2Icon } from "@radix-ui/react-icons"

export default function ProjectsWithSearch({ projects }: { projects: ProjectMetadata[] }) {
    const [query, setQuery] = useState('')
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    // Filter posts by tag and title
    const filtered = projects.filter(project => {
        const matchesTitle = project.title?.toLowerCase().includes(query.toLowerCase())
        const matchesTag = selectedTags.length > 0 ? selectedTags.every(tag => project.tags?.includes(tag)) : true

        return matchesTag && matchesTitle
    })

    // Get all tags from all projects
    const projectTags = projects
        .map(project => project.tags)
        .flat()

    // Filter projectTags to get all unique tags. Used to render options for filtering
    const uniqueTags = [...new Set(projectTags)]

    const isFiltered = query.length > 0 || selectedTags.length > 0

    const handleCheckboxChange = (tag: string) => {
        // Add or remove tag from list of selected tags
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        )
        // Toggle active class on label border
        const label = document.getElementById(tag.replace(/\s+/g, '-')!)
        label?.classList.toggle('border-red-500')
    }

    function resetFilter() {
        setQuery('')
        setSelectedTags([])
        // Clear all active tag borders
        const labels = document.querySelectorAll('label')
        labels.forEach(label => label.classList.remove('border-red-500'))
    }

    return (
        <div className="flex flex-row gap-8">
            {/* Filter by tags */}
            <div className="flex flex-col h-full max-w-xs gap-y-4 sticky top-20">
                <h3 className="font-bold text-2xl">Tags</h3>
                {uniqueTags.map(tag => (
                    <div key={tag?.toLowerCase().replace(/\s+/g, '-')}>
                        <Checkbox
                            id={tag?.toLowerCase().replace(/\s+/g, '-')}
                            checked={selectedTags.includes(tag!)}
                            onCheckedChange={() => handleCheckboxChange(tag!)}
                            className="hidden"
                        />
                        <label
                            htmlFor={tag?.toLowerCase().replace(/\s+/g, '-')}
                            id={tag?.replace(/\s+/g, '-')}
                            className='bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm border-2 rounded-md py-2 px-4 cursor-pointer'
                        >
                            {tag}
                        </label>
                    </div>
                ))}
            </div>

            {/* Searchbar + filtered list */}
            <div className="flex flex-col gap-4 w-full">
                {/* Searchbar */}
                <div className="flex flex-row gap-x-4 items-center w-full">
                    <Input
                        type="text"
                        placeholder="Search projects..."
                        className="h-9 w-3/4"
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
                {/* Filtered list */}
                <Projects projects={filtered} />
            </div>
        </div>
    )
}