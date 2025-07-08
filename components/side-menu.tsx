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
        <div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 mb-4 items-center md:mb-0 md:items-start sticky top-20 bg-background/75">
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