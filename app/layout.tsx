import type { Metadata } from 'next'
import './globals.css'
import DarkModeToggle from '@/components/DarkModeToggle'

export const metadata: Metadata = {
    title: 'Portfolio — Zakaria Fahd',
    description: 'Développeur Web & DataViz. Projets, études de cas et compétences.',
    keywords: ['portfolio', 'développeur', 'dataviz', 'react', 'nextjs', 'dashboard', 'frontend'],
    metadataBase: new URL('https://example.com'), // ← remplace par ton domaine une fois déployé
    openGraph: {
        title: 'Portfolio — Zakaria Fahd',
        description: 'Développeur Web & DataViz. Projets, études de cas et compétences.',
        url: 'https://example.com', // ← idem
        siteName: 'Portfolio — Zakaria Fahd',
        images: [{ url: '/hero.jpg', width: 1600, height: 900, alt: 'Aperçu du portfolio' }],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio — Zakaria Fahd',
        description: 'Développeur Web & DataViz. Projets, études de cas et compétences.',
        images: ['/hero.jpg'],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body>
        <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3 md:flex-nowrap">
                {/* Logo / Nom */}
                <a href="#top" className="text-lg font-semibold">Zakaria Fahd</a>

                {/* Menu (responsive) */}
                <nav className="flex flex-wrap items-center justify-center gap-2 w-full mt-2 md:mt-0 md:w-auto">
                    <a href="#projects" className="btn btn-ghost text-sm md:text-base">Projets</a>
                    <a href="#skills" className="btn btn-ghost text-sm md:text-base">Compétences</a>
                    <a href="#about" className="btn btn-ghost text-sm md:text-base">À propos</a>
                    <a href="#contact" className="btn btn-ghost text-sm md:text-base">Contact</a>
                    <div className="ml-auto md:ml-2"><DarkModeToggle /></div>
                </nav>
            </div>
        </header>

        {children}
        <footer className="container py-10 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} — Portfolio
        </footer>
        </body>
        </html>
    )
}
