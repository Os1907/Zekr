'use client'
import { Amiri, Cairo } from 'next/font/google'
import { Surah } from '@/Interface/Interfaces'
import Link from 'next/link'
import { Bookmark, BookmarkCheck } from 'lucide-react'

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })
const cairo = Cairo({ subsets: ['arabic'], weight: ['600', '700'] })

interface Props {
  item: Surah
  saved?: boolean
  onToggleSave?: (e: React.MouseEvent) => void
}

// 14 flat accent colours — no gradients
const ACCENT_COLORS = [
  '#e11d48','#ea580c','#d97706','#65a30d',
  '#059669','#0891b2','#2563eb','#7c3aed',
  '#9333ea','#db2777','#0f766e','#b45309',
  '#4f46e5','#dc2626',
]
function accentColor(num: number) {
  return ACCENT_COLORS[Math.floor((num - 1) / 8) % ACCENT_COLORS.length]
}

export default function SwaraCard({ item, saved, onToggleSave }: Props) {
  const accent  = accentColor(item.number_of_surah)
  const isMecca = item.place === 'Mecca'

  return (
    <Link href={`/Quran/${item.number_of_surah}`} dir="rtl"
      className={`${cairo.className} relative flex overflow-hidden group transition-all duration-150`}
      style={{
        background:   'var(--color-surface)',
        border:       '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        boxShadow:    'var(--shadow-sm)',
        minHeight:    '72px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
        e.currentTarget.style.borderColor = accent
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
        e.currentTarget.style.borderColor = 'var(--color-border)'
      }}
    >
      {/* solid left accent strip */}
      <div style={{ width: 4, background: accent, flexShrink: 0, borderRadius: 'var(--radius) 0 0 var(--radius)' }} />

      {/* number column */}
      <div className="flex items-center justify-center px-3 shrink-0"
        style={{ borderLeft: '1px solid var(--color-border)', minWidth: 44 }}>
        <span className={`${amiri.className} font-bold`}
          style={{ fontSize: 17, color: accent }}>
          {item.number_of_surah}
        </span>
      </div>

      {/* main content */}
      <div className="flex flex-col flex-1 justify-center px-3 py-3 gap-1.5">
        <p className={`${amiri.className} font-bold leading-none`}
          style={{ fontSize: 19, color: 'var(--color-text)' }}>
          {item.name_translations.ar}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold" style={{ color: 'var(--color-text-muted)' }}>
            {item.number_of_ayah} آية
          </span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-border-2)', display:'inline-block' }} />
          <span className="text-[10px] font-bold"
            style={{ color: isMecca ? '#b45309' : '#1d4ed8' }}>
            {isMecca ? 'مكية' : 'مدنية'}
          </span>
        </div>
      </div>

      {/* bookmark — appears on hover */}
      <button onClick={onToggleSave} aria-label="حفظ"
        className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: saved ? accent : 'var(--color-text-muted)' }}>
        {saved
          ? <BookmarkCheck size={13} strokeWidth={2.5} />
          : <Bookmark      size={13} strokeWidth={2} />}
      </button>
    </Link>
  )
}