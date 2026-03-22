'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme, themes } from '@/context/ThemeContext'
import { Palette, X, Home } from 'lucide-react'

export default function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-5 z-[999] flex flex-col items-start gap-2">

      {/* Theme panel */}
      <div
        className={`flex flex-col gap-1.5 transition-all duration-250 origin-bottom ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        {themes.map((t) => {
          const active = theme === t.name
          return (
            <button
              key={t.name}
              onClick={() => { setTheme(t.name); setOpen(false) }}
              style={{
                background: active ? 'var(--color-accent)' : 'var(--color-surface)',
                color: active ? '#fff' : 'var(--color-text)',
                border: '1px solid var(--color-border-2)',
                boxShadow: 'var(--shadow-sm)',
                borderRadius: 'var(--radius)',
              }}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold transition-all hover:opacity-80 whitespace-nowrap"
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          )
        })}
      </div>

      {/* Action buttons row */}
      <div className="flex gap-2">
        {/* Home button */}
        <Link
          href="/"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-2)',
            boxShadow: 'var(--shadow-md)',
            borderRadius: 'var(--radius)',
            color: 'var(--color-text-muted)',
          }}
          className="w-10 h-10 flex items-center justify-center transition-all hover:opacity-70"
          title="الرئيسية"
        >
          <Home size={17} />
        </Link>

        {/* Theme toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="تغيير الثيم"
          style={{
            background: open ? 'var(--color-accent)' : 'var(--color-surface)',
            color: open ? '#fff' : 'var(--color-text-muted)',
            border: '1px solid var(--color-border-2)',
            boxShadow: 'var(--shadow-md)',
            borderRadius: 'var(--radius)',
          }}
          className="w-10 h-10 flex items-center justify-center transition-all hover:opacity-70"
        >
          {open ? <X size={17} /> : <Palette size={17} />}
        </button>
      </div>
    </div>
  )
}