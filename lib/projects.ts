import type { Project } from '@/components/ProjectCard'

export const ALL_TAGS = ['Tous', 'Data', 'Dashboard', 'Interactivité', 'Temps réel', 'IoT'] as const

export const PROJECTS: Project[] = [
    {
        id: 'crypto-ingest',
        title: 'Crypto Ingestion Pipeline',
        subtitle: 'Projet Data Engineering',
        description: 'Pipeline d’ingestion automatisé de données CoinGecko vers PostgreSQL, visualisé dans Metabase.',
        image: '/project-placeholder.jpg',
        tech: ['Python', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
        tags: ['Data', 'Backend'],
        links: {
            demo: 'https://github.com/ton-profil/crypto', // ou "#"
            repo: 'https://github.com/ton-profil/crypto',
        },
        impact: 'Automatisation complète des données crypto toutes les 5 minutes',
        year: 2025,
    },
    {
        id: 'dataviz-2',
        title: 'Monitoring qualité capteurs IoT',
        subtitle: 'Visualisation temps réel',
        description:
            "Pipeline de données temps réel et visualisations pour suivre la dérive de capteurs, seuils d’alerte et annotation des événements.",
        image: '/project-placeholder.jpg',
        tech: ['Node.js', 'WebSockets', 'D3.js'],
        tags: ['Data', 'Temps réel', 'IoT'],
        links: {
            demo: 'https://example.com/demo-iot',                // ← remplace
            repo: 'https://github.com/zakaria/iot-monitoring',  // ← remplace
            caseStudy: '/cases/dataviz-2',
        },
        impact: 'Baisse de 25% des faux positifs',
        year: 2024,
    },
]
