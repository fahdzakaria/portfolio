'use client'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('theme')
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])

  if (!mounted) return null

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="btn btn-ghost" aria-label="Basculer le thème">
      {dark ? '☀️ Clair' : '🌙 Sombre'}
    </button>
  )
}
