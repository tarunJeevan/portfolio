'use client'

import { Button } from "./ui/button"

export default function SideMenu({ headings }: { headings: string[] }) {
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
        <div className="flex flex-row md:flex-col flex-wrap border-b-2 md:border-b-0 border-r-0 md:border-r-2 mb-4 md:mb-0 md:items-start justify-center sticky top-20 bg-background/75 w-full md:w-fit">
            {headings.map(heading => (
                <Button
                    key={heading.toLowerCase().replace(/\s+/g, '-')}
                    variant='ghost'
                    className="font-extrabold hover:underline hover:bg-transparent"
                    onClick={() => scrollToAnchor(heading.toLowerCase().replace(/\s+/g, '-'))}
                >
                    {heading}
                </Button>
            ))}
        </div>
    )
}