import React from 'react'
import getSurah from '@/Api/getSurah'
import { Iparams, Surah } from '@/Interface/Interfaces'
import { Amiri, Cairo } from 'next/font/google'
import SurahBox from '@/app/_Components/surah/surahBox'
import AudioPlayer from '@/app/_Components/audio/audio'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, Headphones } from 'lucide-react'

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })
const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700'] })

export default async function page({ params }: Iparams) {
  const data: Surah = await getSurah(params.id)
  const isMecca = data.place === 'Mecca'

  return (
    <div dir='rtl' className={`${cairo.className} min-h-screen pb-16`}
      style={{ background: 'var(--color-bg)' }}
    >
      {/* ── Surah header ── */}
      <div className="px-5 pt-8 pb-5 max-w-4xl mx-auto">

        {/* back link */}
        <Link href="/Quran"
          className="inline-flex items-center gap-1 text-xs font-bold mb-5 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-muted)' }}>
          <ChevronRight size={13} />
          القرآن الكريم
        </Link>

        {/* name + meta block */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold mb-1" style={{ color: 'var(--color-text-muted)' }}>
              سورة رقم {data.number_of_surah}
            </p>
            <h1 className={`${amiri.className} text-4xl font-bold leading-none`}
              style={{ color: 'var(--color-text)' }}>
              {data?.name_translations?.ar}
            </h1>
          </div>
          <div className="flex flex-col items-end gap-1.5 pt-1 shrink-0">
            <span className="text-[11px] font-black px-2.5 py-1"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: isMecca ? '#b45309' : '#1d4ed8',
              }}>
              {isMecca ? 'مكية' : 'مدنية'}
            </span>
            <span className="text-[11px] font-bold" style={{ color: 'var(--color-text-muted)' }}>
              {data.number_of_ayah} آية
            </span>
          </div>
        </div>

        {/* prev / next */}
        <div className="flex gap-2 mt-5">
          {data.number_of_surah > 1 && (
            <Link href={`/Quran/${data.number_of_surah - 1}`}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold transition-all hover:opacity-75"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
              }}>
              <ChevronRight size={14} />
              السابقة
            </Link>
          )}
          <div className="flex-1" />
          {data.number_of_surah < 114 && (
            <Link href={`/Quran/${data.number_of_surah + 1}`}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold transition-all hover:opacity-75"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-accent)',
                background: 'var(--color-accent)',
                color: '#fff',
              }}>
              التالية
              <ChevronLeft size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* divider */}
      <div style={{ height: 1, background: 'var(--color-border)' }} />

      <div className="max-w-4xl mx-auto px-5 pt-6">
        {/* Audio Players */}
        {data?.recitations?.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Headphones size={14} style={{ color: 'var(--color-accent)' }} />
              <h2 className="text-sm font-black" style={{ color: 'var(--color-accent)' }}>
                الاستماع
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {data.recitations.map(item => (
                <AudioPlayer
                  key={`${item.audio_url + item.name}`}
                  audio={item}
                />
              ))}
            </div>
          </div>
        )}

        {/* Verses */}
        <SurahBox data={data} params={params.id} />
      </div>
    </div>
  )
}