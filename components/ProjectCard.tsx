'use client'
import Image from 'next/image'
import { Badge } from '@/components/UI'

export type Project = {
    id: string
    title: string
    subtitle?: string
    description: string
    image: string
    tech: string[]
    tags: string[]
    links?: { demo?: string; repo?: string; caseStudy?: string }
    impact?: string
    year?: number
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="card overflow-hidden">
            <div className="relative aspect-video">
                <Image
                    src={project.image}
                    alt={`Aperçu projet — ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                />
            </div>
            <div className="p-5 space-y-3">
                <header className="space-y-1">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.subtitle && <p className="text-sm text-gray-600 dark:text-gray-300">{project.subtitle}</p>}
                </header>

                <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech?.map(t => <Badge key={t}>{t}</Badge>)}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags?.map(t => <span key={t} className="badge">{t}</span>)}
                </div>

                {project.impact && (
                    <p className="text-xs text-gray-500">Impact : {project.impact}</p>
                )}

                <footer className="flex flex-wrap items-center gap-3 pt-2">
                    {project.links?.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-ghost" aria-label={`Voir la démo de ${project.title}`}>Démo →</a>
                    )}
                    {project.links?.repo && (
                        <a href={project.links.repo} target="_blank" rel="noreferrer" className="btn btn-ghost" aria-label={`Voir le code de ${project.title}`}>Code</a>
                    )}
                    {project.links?.caseStudy && (
                        <a href={project.links.caseStudy} className="btn btn-ghost" aria-label={`Étude de cas pour ${project.title}`}>Étude de cas</a>
                    )}
                </footer>
            </div>
        </article>
    )
}
