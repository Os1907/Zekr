'use client'
import React from 'react'
import { Cairo, Amiri } from 'next/font/google'
import { useAzkarData } from '@/hooks/useAzkarData'
import Item from '../Item/Item'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '900'] })
const amiri  = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

interface Props {
  pathName: string
  title: string
  subtitle?: string
}

export default function AzkarLayout({ pathName, title, subtitle }: Props) {
  const data = useAzkarData(pathName)

  return (
    <div dir="rtl" className={`${cairo.className} min-h-screen`} style={{ background: 'var(--color-bg)' }}>

      {/* Header */}
      <div style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }} className="px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link href="/" style={{ color: 'var(--color-text-muted)' }} className="hover:opacity-70 transition-opacity">
            <ArrowRight size={18} />
          </Link>
          <div>
            <h1 className="text-base font-black" style={{ color: 'var(--color-text)' }}>{title}</h1>
            {subtitle && <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{subtitle}</p>}
          </div>
          {data.length > 0 && (
            <span className="mr-auto text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
              {data.length} ذكر
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-4">
        {data.length === 0 ? (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-36 rounded-xl animate-pulse" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }} />
            ))}
          </>
        ) : (
          data.map((item, i) => (
            <Item
              key={i}
              text={item.content}
              count={Number(item.count) || 1}
              zekr={item.category}
              description={item.description}
            />
          ))
        )}
      </div>
    </div>
  )
}