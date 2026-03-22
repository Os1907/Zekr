'use client'
import React, { useEffect, useState } from 'react'
import surah from '@/Api/Surah'
import { Cairo } from 'next/font/google'
import localFont from 'next/font/local'
import { Surah } from '@/Interface/Interfaces'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { store, remove } from '@/Rdeux/save'
import { RootState } from '@/Rdeux/store'
import { BookmarkCheck, Search } from 'lucide-react'
import SwaraCard from '../_Components/SwraCard/SwaraCard'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '900'] })
const amiri = localFont({
  src: [
    { path: '../../fonts/Amiri-Regular.woff2', weight: '400' },
    { path: '../../fonts/Amiri-Bold.woff2',    weight: '700' },
  ],
})

type Filter = 'all' | 'Mecca' | 'Medina'

export default function Quraan() {
  const [allSwar, setAllSwar] = useState<Surah[]>([])
  const [query,   setQuery]   = useState('')
  const [filter,  setFilter]  = useState<Filter>('all')
  const dispatch = useDispatch()
  const saved    = useSelector((state: RootState) => state.save)

  useEffect(() => { surah().then(setAllSwar) }, [])

  const displayed = allSwar?.filter(item => {
    const ms = query === '' || item.name_translations.ar.includes(query)
    const mf = filter === 'all' || item.place === filter
    return ms && mf
  })

  const toggleSave = (e: React.MouseEvent, num: number) => {
    e.preventDefault()
    saved.includes(num)
      ? dispatch(remove(saved.findIndex(n => n === num)))
      : dispatch(store(num))
  }

  return (
    <div dir='rtl' className={`${cairo.className} min-h-screen`} style={{ background: 'var(--color-bg)' }}>

      {/* ── HEADER ── */}
      <header className="px-5 pt-8 pb-5 max-w-3xl mx-auto">

        {/* Title block */}
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
          
            <h1 className={`${amiri.className} text-3xl font-bold leading-none`}
              style={{ color: 'var(--color-text)' }}>
              القرآن الكريم
            </h1>
          </div>

          {allSwar?.length > 0 && (
            <span className="text-[11px] font-black px-2.5 py-1 shrink-0"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                color: 'var(--color-text-muted)',
              }}>
              {displayed.length} / 114
            </span>
          )}
        </div>

        {/* Search bar */}
        <div className="relative mb-3">
          <Search size={13} className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--color-text-muted)' }} />
          <input value={query} onChange={e => setQuery(e.target.value)}
            placeholder="ابحث عن سورة..."
            className="w-full pr-8 pl-3 py-2.5 text-sm outline-none"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              color: 'var(--color-text)',
            }}
          />
        </div>

        {/* Filter + saved row */}
        <div className="flex items-center gap-2 flex-wrap">
          {(['all', 'Mecca', 'Medina'] as Filter[]).map((f, i) => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-3 py-1.5 text-xs font-bold transition-all"
              style={{
                borderRadius: 'var(--radius)',
                border: `1px solid ${filter === f ? 'var(--color-accent)' : 'var(--color-border)'}`,
                background: filter === f ? 'var(--color-accent)' : 'var(--color-surface)',
                color: filter === f ? '#fff' : 'var(--color-text-muted)',
              }}>
              {['الكل', 'مكية', 'مدنية'][i]}
            </button>
          ))}

          {saved.length > 0 && (
            <Link href="/Quran/saved"
              className="mr-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-opacity hover:opacity-75"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
                background: 'var(--color-surface)',
              }}>
              <BookmarkCheck size={12} />
              {saved.length} محفوظة
            </Link>
          )}
        </div>
      </header>

      {/* divider */}
      <div style={{ height: 1, background: 'var(--color-border)', marginBottom: 0 }} />

      {/* ── GRID ── */}
      <div className="max-w-3xl mx-auto px-5 py-5">
        {allSwar?.length === 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="animate-pulse"
                style={{ height: 72, background: 'var(--color-surface)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
              {displayed?.map(item => (
                <SwaraCard key={item.number_of_surah} item={item}
                  saved={saved.includes(item.number_of_surah)}
                  onToggleSave={e => toggleSave(e, item.number_of_surah)} />
              ))}
            </div>
            {displayed?.length === 0 && (
              <p className="text-center text-sm py-20" style={{ color: 'var(--color-text-muted)' }}>
                لا توجد نتائج لـ «{query}»
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}