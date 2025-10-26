'use client'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { ALL_TAGS, PROJECTS } from '@/lib/projects'
import { Pill } from '@/components/UI'

export default function Page() {
    const [query, setQuery] = useState('')
    const [activeTag, setActiveTag] = useState<(typeof ALL_TAGS)[number]>('Tous')

    const filtered = useMemo(() => {
        return PROJECTS.filter(p => {
            const matchTag = activeTag === 'Tous' || p.tags.includes(activeTag)
            const hay = [p.title, p.subtitle, p.description, ...(p.tech || []), ...(p.tags || [])]
                .join(' ')
                .toLowerCase()
            const matchQuery = hay.includes(query.toLowerCase())
            return matchTag && matchQuery
        })
    }, [query, activeTag])

    return (
        <main id="top" className="container py-8">
            {/* HERO */}
            <section className="my-10 grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-5">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Développeur Web & DataViz</h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                        Je conçois des applications web performantes et des visualisations de données claires et interactives.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="btn btn-primary">Voir mes projets</a>
                        <a href="#contact" className="btn btn-ghost">Me contacter</a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-ghost" aria-label="GitHub">GitHub</a>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <a href="mailto:fahed.zakaria@epitech.eu" className="underline">fahed.zakaria@epitech.eu</a> ·{' '}
                        <a href="https://www.linkedin.com/in/fahed-zakaria-big-data-data-engineering-traitement-de-données-ia-alternance-étudiant-visualisation/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                    </p>
                </div>
                <div className="relative aspect-video md:aspect-[4/3] overflow-hidden rounded-2xl border">
                    <Image src="/IMG_8809.jpg" alt="Photo de Zakaria Fahd" fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="space-y-6 py-6" aria-labelledby="projets-heading">
                <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 id="projets-heading" className="text-3xl font-semibold">Projets</h2>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                        {/* Search */}
                        <label className="flex items-center gap-2 rounded-xl border px-3 py-2" aria-label="Recherche de projets">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" aria-hidden="true">
                                <circle cx="11" cy="11" r="7" strokeWidth="1.5"/>
                                <path d="m20 20-2-2" strokeWidth="1.5"/>
                            </svg>
                            <input
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Rechercher un projet..."
                                className="outline-none text-sm py-1 bg-transparent"
                                aria-label="Rechercher"
                            />
                        </label>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par tag">
                            {ALL_TAGS.map(t => (
                                <Pill key={t} active={t === activeTag} onClick={() => setActiveTag(t)}>{t}</Pill>
                            ))}
                        </div>
                    </div>
                </header>

                {filtered.length === 0 ? (
                    <div className="card p-8 text-center text-gray-600 dark:text-gray-300">Aucun projet ne correspond à ta recherche.</div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
                    </div>
                )}
            </section>

            {/* SKILLS */}
            <section id="skills" className="mt-16 space-y-4" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="text-3xl font-semibold">Compétences</h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {["JavaScript", "React/Next.js", "Node.js", "Python", "Pandas", "Plotly/D3", "SQL", "Git/GitHub"].map(s => (
                        <div key={s} className="rounded-xl border px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{s}</div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="mt-16 space-y-4" aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-3xl font-semibold">À propos</h2>
                <div className="card p-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Passionné par la construction de produits utiles et l’analyse de données, je transforme la complexité en interfaces simples
                    et rapides. J’aime cadrer les besoins, itérer vite et mesurer l’impact (temps gagné, erreurs réduites, meilleure prise de décision).
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="mt-16 space-y-4" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-3xl font-semibold">Contact</h2>
                <div className="card p-6">
                    <p className="text-gray-700 dark:text-gray-300">
                        Tu peux me joindre à <a href="mailto:fahed.zakaria@epitech.eu" className="underline">fahed.zakaria@epitech.eu</a>{' '}
                        ou sur <a href="https://www.linkedin.com/in/fahed-zakaria-big-data-data-engineering-traitement-de-données-ia-alternance-étudiant-visualisation/" className="underline" target="_blank" rel="noreferrer">LinkedIn</a>.
                    </p>
                </div>
            </section>
        </main>
    )
}
