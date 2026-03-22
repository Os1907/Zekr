import React from 'react'
import prayers from '@/helper/prayer'
import localFont from 'next/font/local'
import { BookOpen, ScrollText, Quote } from 'lucide-react'

const KofeFont = localFont({ src: '../../../public/Fonts/alsamt diwani.ttf' })
const Quran    = localFont({ src: '../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })

export default function Page() {
  return (
    <div
      dir='rtl'
      className="min-h-screen"
      style={{ background: 'var(--color-bg-gradient)' }}
    >
      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <ScrollText size={32} style={{ color: 'var(--color-accent-2)' }} />
          <h2 className={`${KofeFont.className} text-4xl lg:text-7xl`} style={{ color: 'var(--color-accent)' }}>
            {prayers.title}
          </h2>
        </div>
        <div className="ornament-divider mx-auto" />
      </div>

      {/* Prayers List */}
      <div className="max-w-4xl mx-auto px-4 lg:px-10 pb-12 space-y-6">
        {prayers.items.map((section, idx) => (
          <div
            key={idx}
            className="islamic-card overflow-hidden"
          >
            {/* Section Header - Prophet Name */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{
                background: 'var(--color-accent-soft)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <BookOpen size={22} style={{ color: 'var(--color-accent)' }} />
              <p className={`${Quran.className} text-xl lg:text-3xl font-semibold`} style={{ color: 'var(--color-accent)' }}>
                {section.name}
              </p>
            </div>

            {/* Prayers within Section */}
            <div className="p-4 lg:p-6 space-y-4">
              {section.item.map((prayer, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-2xl p-4 lg:p-5 transition-all duration-200"
                  style={{
                    background: 'var(--color-card-bg)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {/* "Qala Allah Ta'ala" */}
                  <p
                    className={`${Quran.className} text-base lg:text-xl mb-2`}
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {prayer.start} :
                  </p>

                  {/* Quran Verse */}
                  <div
                    className="quran-verse text-center my-3 px-3 py-4 rounded-xl"
                    style={{ background: 'var(--color-accent-soft)' }}
                  >
                    <h3
                      className={`${Quran.className} text-xl lg:text-3xl font-medium leading-relaxed`}
                      style={{ color: 'var(--color-text)' }}
                    >
                      {prayer.prayer}
                    </h3>
                  </div>

                  {/* Reference */}
                  <div className="flex items-center gap-2 mt-3 justify-end">
                    <Quote size={14} style={{ color: 'var(--color-accent-2)' }} />
                    <p
                      className={`${Quran.className} text-sm lg:text-lg`}
                      style={{ color: 'var(--color-accent-2)' }}
                    >
                      {prayer.reference}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}