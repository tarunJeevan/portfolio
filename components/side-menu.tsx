'use client'

import { Button } from "./ui/button"

export default function SideMenu({ tags }: { tags: string[] }) {
    // Function to smoothly transition to heading
    const scrollToAnchor = (anchorId: string) => {
        const element = document.getElementById(anchorId)

        if (element) {
            const elementPos = element.getBoundingClientRect().top + window.scrollY
            const offset = elementPos - 80

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="flex flex-col border-r-2 items-start sticky top-20">
            {tags.map(tag => (
                <Button
                    key={tag.toLowerCase().replace(/\s+/g, '-')}
                    variant='ghost'
                    className="font-extrabold hover:underline hover:bg-transparent"
                    onClick={() => scrollToAnchor(tag.toLowerCase().replace(/\s+/g, '-'))}
                >
                    {tag}
                </Button>
            ))}
        </div>
    )
}