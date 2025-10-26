'use client'
import React from 'react'

export function Badge({ children }: { children: React.ReactNode }) {
    return <span className="badge">{children}</span>
}

export function Pill({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
    return (
        <button
            onClick={onClick}
            className={`pill ${active ? 'pill-active' : 'btn-ghost'} focus-visible:outline-none focus-visible:ring`}
            aria-pressed={!!active}
            type="button"
        >
            {children}
        </button>
    )
}
