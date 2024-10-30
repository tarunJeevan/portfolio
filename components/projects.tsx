import Link from 'next/link'
import Image from 'next/image'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({ projects }: { projects: ProjectMetadata[] }) {
    return (
        <ul className="flex flex-col sm:flex-row flex-wrap gap-4">
            {projects.map(project => (
                <li key={project.slug}>
                    <Link
                        href={`/projects/${project.slug}`}
                        className='flex flex-col justify-between gap-x-4 gap-y-1 max-w-xs h-60 px-2 py-2 rounded-md hover:shadow-lg dark:hover:shadow-gray-500 transition-all duration-100'
                    >
                        {project.image && (
                            <div className="relative h-72 w-full overflow-hidden bg-muted sm:h-60">
                                <Image
                                    src={project.image}
                                    alt={project.title || ''}
                                    fill
                                    className='object-cover object-center'
                                />
                            </div>
                        )}

                        <h2 className="title text-xl no-underline">
                            {project.title}
                        </h2>

                        <div className='mt-auto'>
                            <p className="line-clamp-2 text-sm font-light italic text-muted-foreground">
                                {project.summary}
                            </p>
                        </div>

                        {project.publishedAt && (
                            <p className="mt-1 text-sm font-light">
                                {formatDate(project.publishedAt ?? '')}
                            </p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
