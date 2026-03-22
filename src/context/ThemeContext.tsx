'use client'
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type ThemeName = 'light' | 'dark' | 'classic' | 'minimal'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  fontSize: number
  setFontSize: (size: number) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  fontSize: 16,
  setFontSize: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const themes: { name: ThemeName; label: string; icon: string }[] = [
  { name: 'light',   label: 'فاتح',    icon: '☀️' },
  { name: 'dark',    label: 'داكن',     icon: '🌙' },
  { name: 'classic', label: 'كلاسيكي', icon: '🕌' },
  { name: 'minimal', label: 'بسيط',    icon: '✦' },
]

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('light')
  const [fontSize, setFontSizeState] = useState(16)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('zekr-theme') as ThemeName | null
    const savedSize = localStorage.getItem('zekr-font-size')
    if (saved && ['light', 'dark', 'classic', 'minimal'].includes(saved)) {
      setThemeState(saved)
    }
    if (savedSize) {
      setFontSizeState(Number(savedSize))
    }
    setMounted(true)
  }, [])

  const setTheme = useCallback((t: ThemeName) => {
    setThemeState(t)
    localStorage.setItem('zekr-theme', t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  const setFontSize = useCallback((s: number) => {
    setFontSizeState(s)
    localStorage.setItem('zekr-font-size', String(s))
    document.documentElement.style.setProperty('--base-font-size', `${s}px`)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`)
    }
  }, [theme, fontSize, mounted])

  // Prevent flash of wrong theme
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  )
}
