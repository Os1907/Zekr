'use client'
import React, { useState } from 'react'
import { Surah } from '@/Interface/Interfaces'
import localFont from 'next/font/local'
import { Cairo } from 'next/font/google'
import { Minus, Plus } from 'lucide-react'

const cairo = Cairo({ subsets: ['arabic'], weight: ['600', '700'] })
const quran = localFont({ src: '../../../../public/Fonts/New/arabic3.ttf' })

interface IsurahBox {
  data: Surah
  params: number
}

export default function SurahBox({ data, params }: IsurahBox) {
  const [fontSize, setFontSize] = useState(26)

  return (
    <div className="pb-10">
      {/* Controls */}
      <div className={`${cairo.className} flex items-center gap-3 mb-5`}
        style={{
          padding: '10px 14px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)',
        }}>
        <span className="text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>حجم الخط</span>
        <button onClick={() => setFontSize(Math.max(14, fontSize - 2))}
          className="w-7 h-7 flex items-center justify-center transition-opacity hover:opacity-60"
          style={{
            borderRadius: 8,
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface-2)',
            color: 'var(--color-text)',
          }}>
          <Minus size={12} />
        </button>
        <span className="text-sm font-black w-7 text-center" style={{ color: 'var(--color-accent)' }}>
          {fontSize}
        </span>
        <button onClick={() => setFontSize(Math.min(64, fontSize + 2))}
          className="w-7 h-7 flex items-center justify-center transition-opacity hover:opacity-60"
          style={{
            borderRadius: 8,
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface-2)',
            color: 'var(--color-text)',
          }}>
          <Plus size={12} />
        </button>
      </div>

      {/* Quran text */}
      <div className={`${quran.className} text-center`}
        style={{
          fontSize: `${fontSize}px`,
          color: 'var(--color-text)',
          lineHeight: 2.8,
          padding: '28px 20px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)',
        }}>
        {/* Bismillah */}
        {params != 9 && (
          <p className="block text-center mb-6 pb-5"
            style={{
              fontSize: `${Math.max(fontSize, 28)}px`,
              borderBottom: '1px solid var(--color-border)',
              color: 'var(--color-accent)',
            }}>
            بِسْمِ اللَّـهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        )}

        {/* Verses */}
        {data?.verses?.map((item, index) => (
          <span key={index} className="inline">
            {index === 0 && params != 9 ? item?.text.slice(39) : item.text}
            <span className={`${cairo.className} inline-block mx-1.5 font-black`}
              style={{
                fontSize: `${Math.max(fontSize - 8, 13)}px`,
                color: 'var(--color-accent)',
                opacity: 0.7,
              }}>
              {item?.number}
            </span>
            {' '}
          </span>
        ))}
      </div>
    </div>
  )
}