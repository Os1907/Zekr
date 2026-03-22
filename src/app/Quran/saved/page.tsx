'use client'
import surah from '@/Api/Surah'
import SwaraCard from '@/app/_Components/SwraCard/SwaraCard'
import { Surah } from '@/Interface/Interfaces'
import { RootState } from '@/Rdeux/store'
import React, { useEffect, useState } from 'react'
import { BookmarkCheck, BookOpen, ChevronRight, Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Cairo, Amiri } from 'next/font/google'
import { remove } from '@/Rdeux/save'
import Link from 'next/link'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700'] })
const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

export default function Saved() {
  const [swar, setSwar] = useState<Surah[]>([])
  const dispatch        = useDispatch()
  const count           = useSelector((state: RootState) => state.save)

  useEffect(() => {
    surah().then(setSwar)
  }, [])

  const savedSwar = swar.filter(item => count.includes(item.number_of_surah))

  return (
    <div dir='rtl' className={`${cairo.className} min-h-screen`}
      style={{ background: 'var(--color-bg)' }}>

      {/* Header */}
      <div className="px-5 pt-8 pb-5 max-w-3xl mx-auto">

        <Link href="/Quran"
          className="inline-flex items-center gap-1 text-xs font-bold mb-5 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-muted)' }}>
          <ChevronRight size={13} />
          القرآن الكريم
        </Link>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold mb-1" style={{ color: 'var(--color-text-muted)' }}>قائمة الحفظ</p>
            <h1 className={`${amiri.className} text-3xl font-bold leading-none`}
              style={{ color: 'var(--color-text)' }}>
              السور المحفوظة
            </h1>
          </div>
          {count.length > 0 && (
            <span className="text-[11px] font-black px-2.5 py-1 shrink-0"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
                background: 'var(--color-surface)',
              }}>
              {count.length} سورة
            </span>
          )}
        </div>
      </div>

      {/* divider */}
      <div style={{ height: 1, background: 'var(--color-border)' }} />

      <div className="max-w-3xl mx-auto px-5 py-5">
        {count.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
            {savedSwar.map((item) => (
              <div key={item.number_of_surah} className="relative group/card">
                <SwaraCard item={item} />
                <button
                  onClick={() => dispatch(remove(count.findIndex(n => n === item.number_of_surah)))}
                  className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 text-[10px] font-bold opacity-0 group-hover/card:opacity-100 transition-opacity z-10"
                  style={{
                    borderRadius: 'var(--radius)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    color: '#ef4444',
                  }}>
                  <Trash2 size={10} />
                  حذف
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <div className="w-16 h-16 flex items-center justify-center"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
              }}>
              <BookmarkCheck size={28} style={{ color: 'var(--color-accent)' }} />
            </div>
            <p className={`${amiri.className} text-xl font-bold`} style={{ color: 'var(--color-text)' }}>
              لا توجد سور محفوظة
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              يمكنك حفظ السور من صفحة القرآن الكريم
            </p>
            <Link href="/Quran"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-75"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-accent)',
                background: 'var(--color-accent)',
                color: '#fff',
              }}>
              <BookOpen size={14} />
              تصفح القرآن الكريم
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}