'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import localFont from 'next/font/local'
import { Home, Sun, Moon, BookOpen, Hash, BookHeart, Menu, X } from 'lucide-react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const main    = localFont({ src: '../../../../public/Fonts/main.ttf' })
const kofFont = localFont({ src: '../../../../public/Fonts/alsamt diwani.ttf' })

const navLinks = [
  { href: '/',            label: 'الرئيسية',       icon: Home       },
  { href: '/Morning',     label: 'أذكار الصباح',   icon: Sun        },
  { href: '/Evening',     label: 'أذكار المساء',   icon: Moon       },
  { href: '/Tasbeh',      label: 'تسابيح',          icon: Hash       },
  { href: '/ad3ia-quran', label: 'أدعية الأنبياء',  icon: BookHeart  },
  { href: '/Quran',       label: 'القرآن الكريم',   icon: BookOpen   },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
        style={{ background: 'var(--color-nav)' }}
      >
        <div className={`${main.className} max-w-7xl mx-auto px-4 lg:px-10`}>
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <span
                className="hidden sm:flex size-9 rounded-xl items-center justify-center text-lg transition-transform group-hover:scale-110"
                style={{
                  background: 'var(--color-nav-accent-bg)',
                  color: 'var(--color-nav-text-active)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                
              </span>
              <span
                className={`${kofFont.className} text-4xl lg:text-5xl font-bold tracking-wide`}
                style={{ color: 'var(--color-nav-text-active)' }}
              >
                ذِكْر
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link flex items-center gap-2 text-[17px] px-4 py-2.5 rounded-xl transition-all duration-200 ${
                      active
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      background: active ? 'var(--color-nav-accent-bg)' : 'transparent',
                      color: active ? 'var(--color-nav-text-active)' : 'var(--color-nav-text)',
                    }}
                  >
                    <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right side: theme switcher + mobile burger */}
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              
              {/* Mobile burger */}
              <button
                onClick={() => setOpen(!open)}
                aria-label="القائمة"
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all"
                style={{
                  background: open ? 'rgba(255,255,255,0.12)' : 'transparent',
                  color: 'var(--color-nav-text)',
                }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(12px)' }}
        >
          <div className="mx-6 h-px mb-2" style={{ background: 'linear-gradient(90deg, transparent, var(--color-nav-text-active), transparent)', opacity: 0.3 }} />
          <nav className="flex flex-col gap-1 px-4 pb-4">
            {navLinks.map((link) => {
              const active = pathname === link.href
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${main.className} flex items-center gap-3 text-xl py-3.5 px-5 rounded-xl text-right transition-all duration-200`}
                  style={{
                    background: active ? 'var(--color-nav-accent-bg)' : 'transparent',
                    color: active ? 'var(--color-nav-text-active)' : 'var(--color-nav-text)',
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>
    </>
  )
}