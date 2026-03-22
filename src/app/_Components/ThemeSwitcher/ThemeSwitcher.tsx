'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useTheme, themes, ThemeName } from '@/context/ThemeContext'
import { Palette, Check, Minus, Plus, Type } from 'lucide-react'

export default function ThemeSwitcher() {
  const { theme, setTheme, fontSize, setFontSize } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:scale-105"
        style={{
          background: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-accent)',
        }}
        aria-label="تغيير المظهر"
      >
        <Palette size={20} />
      </button>

      {open && (
        <div
          className="absolute left-0 top-12 z-50 w-64 rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-2"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Theme selection */}
          <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>
            المظهر
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t.name)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: theme === t.name ? 'var(--color-accent-soft)' : 'var(--color-surface-2)',
                  color: theme === t.name ? 'var(--color-accent)' : 'var(--color-text)',
                  border: theme === t.name ? '1.5px solid var(--color-accent)' : '1px solid var(--color-border)',
                }}
              >
                <span className="text-base">{t.icon}</span>
                <span>{t.label}</span>
                {theme === t.name && <Check size={14} className="mr-auto" />}
              </button>
            ))}
          </div>

          {/* Font size control */}
          <div
            className="h-px w-full mb-4"
            style={{ background: 'var(--color-border)' }}
          />
          <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
            <Type size={14} />
            حجم الخط
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFontSize(Math.max(12, fontSize - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <Minus size={14} />
            </button>
            <div
              className="flex-1 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: 'var(--color-accent-soft)',
                color: 'var(--color-accent)',
              }}
            >
              {fontSize}px
            </div>
            <button
              onClick={() => setFontSize(Math.min(24, fontSize + 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
