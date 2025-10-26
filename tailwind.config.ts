import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#0F172A', // bleu nuit
                    accent: '#22D3EE',  // cyan d’accent
                    soft: '#E2E8F0',    // gris clair
                },
            },
            container: { center: true, padding: '1rem' },
            boxShadow: { soft: '0 4px 24px rgba(0,0,0,0.08)' },
        },
    },
    plugins: [],
}
export default config
