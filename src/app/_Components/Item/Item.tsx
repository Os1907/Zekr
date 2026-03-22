'use client'
import React, { useState } from 'react'
import { Cairo, Amiri } from 'next/font/google'
import { Plus, RotateCcw, Copy, Bookmark, Check } from 'lucide-react'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '900'] })
const amiri  = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

interface ItemProps {
  text: string
  count: number
  zekr: string
  description?: string
}

export default function Item({ text, count, zekr, description }: ItemProps) {
  const [current, setCurrent]     = useState(0)
  const [copied, setCopied]       = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const isDone = current >= count

  const increment = () => {
    if (!isDone) {
      setCurrent(p => p + 1)
      if (typeof window !== 'undefined' && window.navigator.vibrate) window.navigator.vibrate(30)
    }
  }

  const reset = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent(0) }

  const copy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div
      dir="rtl"
      onClick={increment}
      className={`relative select-none cursor-pointer transition-all duration-200 ${isDone ? 'opacity-60' : 'hover:-translate-y-0.5'}`}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        boxShadow: isDone ? 'none' : 'var(--shadow-sm)',
        padding: '1rem',
      }}
    >
      {/* Top row: category label + actions */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded-full"
          style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
        >
          {zekr}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={copy} className="opacity-40 hover:opacity-80 transition-opacity" title="نسخ">
            {copied ? <Check size={13} style={{ color: 'var(--color-accent)' }} /> : <Copy size={13} style={{ color: 'var(--color-text)' }} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setBookmarked(b => !b) }} className="opacity-40 hover:opacity-80 transition-opacity">
            <Bookmark size={13} fill={bookmarked ? 'currentColor' : 'none'} style={{ color: bookmarked ? 'var(--color-accent-2)' : 'var(--color-text)' }} />
          </button>
          <button onClick={reset} className="opacity-40 hover:opacity-80 transition-opacity" title="إعادة">
            <RotateCcw size={13} style={{ color: 'var(--color-text)' }} />
          </button>
        </div>
      </div>

      {/* Zekr text */}
      <p
        className={`${amiri.className} text-lg leading-loose font-bold mb-3`}
        style={{ color: 'var(--color-text)' }}
      >
        {text}
      </p>

      {/* Description */}
      {description && description.trim() !== '' && (
        <p className="text-[11px] mb-3 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
      )}

      {/* Progress + counter */}
      <div className="flex items-center gap-3 mt-1">
        {/* progress bar */}
        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--color-border)' }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${(current / count) * 100}%`, background: 'var(--color-accent)' }}
          />
        </div>

        {/* count display */}
        <span className="text-xs font-black tabular-nums" style={{ color: 'var(--color-text-muted)', minWidth: '3.5rem', textAlign: 'center' }}>
          {current} / {count}
        </span>

        {/* + button */}
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full transition-all hover:opacity-80"
          style={{
            background: isDone ? 'var(--color-accent)' : 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            color: isDone ? '#fff' : 'var(--color-text)',
          }}
        >
          {isDone ? <Check size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
        </button>
      </div>

      {/* Done overlay */}
      {isDone && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ borderRadius: 'var(--radius)', background: 'rgba(var(--color-bg), 0.4)' }}
        >
          <span className="text-xs font-black px-3 py-1 rounded-full" style={{ background: 'var(--color-accent)', color: '#fff' }}>
            تم 
          </span>
        </div>
      )}
    </div>
  )
}