import IP from '@/Api/Ip'
import slaah from '@/Api/Slaah'
import { SalahTime } from '@/Interface/Interfaces';
import React from 'react'
import { Cairo } from 'next/font/google'
import { MapPin, Calendar, Sun, CloudSun, Sunset, Moon, MoonStar, Sunrise } from 'lucide-react'

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

const salahInfoConfig: Record<string, { ar: string; Icon: any; color: string; bg: string }> = {
  Fajr:    { ar: 'الفجر',   Icon: MoonStar,  color: '#4f46e5', bg: '#e0e7ff' },
  Sunrise: { ar: 'الشروق',  Icon: Sunrise,   color: '#d97706', bg: '#fef3c7' },
  Dhuhr:   { ar: 'الظهر',   Icon: Sun,       color: '#fbbf24', bg: '#fffbeb' },
  Asr:     { ar: 'العصر',   Icon: CloudSun,  color: '#ea580c', bg: '#ffedd5' },
  Maghrib: { ar: 'المغرب',  Icon: Sunset,    color: '#dc2626', bg: '#fee2e2' },
  Isha:    { ar: 'العشاء',  Icon: Moon,      color: '#312e81', bg: '#e0e7ff' },
}

export default async function Slah() {
  const { location } = await IP()
  const fullDate = new Date();
  const slahData = await slaah(
    `${fullDate.getDate()}-${fullDate.getMonth() + 1}-${fullDate.getFullYear()}`,
    location.city,
    location.country.name
  )
  
  if (!slahData?.data) return null;

  const timings: SalahTime = slahData.data.timings
  const hijri = slahData.data.date.hijri
  const prayers = Object.entries(timings).filter(([key]) => salahInfoConfig[key])

  return (
    <div dir="rtl" className={`${cairo.className} w-full`}>
      {/* Location + Date row */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="flex items-center gap-1.5">
          <MapPin size={12} style={{ color: 'var(--color-text-muted)' }} />
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            {location.city}، {location.country.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={12} style={{ color: 'var(--color-text-muted)' }} />
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            {hijri.day} {hijri.month.ar} {hijri.year} هـ
          </span>
        </div>
      </div>

      {/* Prayer time cards */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {prayers.map(([key, time]) => {
          const config = salahInfoConfig[key]
          const [hours, minutes] = time.split(':')
          const h = parseInt(hours)
          const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h)
          const ampm = h < 12 ? 'ص' : 'م'

          return (
            <div
              key={key}
              className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg text-center transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: config.bg }}>
                <config.Icon size={15} style={{ color: config.color }} strokeWidth={2} />
              </div>
              <span className="text-[11px] font-black" style={{ color: 'var(--color-text)' }}>{config.ar}</span>
              <span className="text-xs font-bold tabular-nums" style={{ color: 'var(--color-text-muted)' }}>
                {displayH}:{minutes} {ampm}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}