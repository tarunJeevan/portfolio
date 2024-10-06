import Link from "next/link"
import { buttonVariants } from "./ui/button"

export default function SideMenu({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-col">
            {tags.map(tag => (
                <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={`#${tag.toLowerCase()}`}
                >
                    {tag}
                </Link>
            ))}
        </div>
    )
}