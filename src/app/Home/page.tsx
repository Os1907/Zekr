import Link from "next/link";
import { Amiri, Cairo } from 'next/font/google'
import Slah from "../_Components/Slah/Slah";
import Year from "../_Components/Year/Year";
import { Sun, Moon, Hash, Sunrise, Sparkles, HandHeart, BookOpen, ArrowLeft } from 'lucide-react'

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'], display: 'swap' })
const cairo = Cairo({ subsets: ['arabic'], weight: ['300', '400', '600', '700', '900'], display: 'swap' })

const azkarItems = [
  { link: "/Morning",     title: "أذكار الصباح",    Icon: Sun,       color: "#f59e0b", bg: "#fef9c3" },
  { link: "/Evening",     title: "أذكار المساء",    Icon: Moon,      color: "#6366f1", bg: "#ede9fe" },
  { link: "/Tasbeh",      title: "تسابيح",           Icon: Hash,      color: "#10b981", bg: "#d1fae5" },
  { link: "/waking-up",   title: "أذكار الاستيقاظ",  Icon: Sunrise,   color: "#f97316", bg: "#ffedd5" },
  { link: "/Sleep",       title: "أذكار النوم",      Icon: Sparkles,  color: "#8b5cf6", bg: "#ede9fe" },
  { link: "/ad3ia-quran", title: "أدعية الأنبياء",   Icon: HandHeart, color: "#ec4899", bg: "#fce7f3" },
]

export default function MainHome() {
  return (
    <div dir="rtl" className={`${cairo.className} min-h-screen pb-24`} style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="text-center py-8 px-4" style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <h1 className={`${amiri.className} text-4xl font-bold mb-1`} style={{ color: 'var(--color-text)' }}>ذكر</h1>
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>تطبيق شامل لأذكار المسلم اليومية</p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6 rounded-xl overflow-hidden" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <div className="px-4 py-2.5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <span className="text-xs font-black" style={{ color: 'var(--color-text)' }}>الأذكار</span>
            </div>
            <div className="p-2">
              {azkarItems.map(item => (
                <Link key={item.link} href={item.link}>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all hover:opacity-80 cursor-pointer">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: item.bg }}>
                      <item.Icon size={13} style={{ color: item.color }} />
                    </div>
                    <span className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="p-2 pt-0">
              <Link href="/Quran">
                <div className="flex items-center justify-center gap-2 py-2 rounded-lg text-white text-xs font-black transition-all hover:opacity-80" style={{ background: 'var(--color-accent)' }}>
                  <BookOpen size={13} />
                  <span>القرآن الكريم</span>
                </div>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="lg:col-span-9 flex flex-col gap-4">

          {/* Quran featured */}
          <Link href="/Quran">
            <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#d1fae5' }}>
                <BookOpen size={20} style={{ color: '#059669' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-black" style={{ color: 'var(--color-text)' }}>القرآن الكريم</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>تصفح السور والآيات</p>
              </div>
              <ArrowLeft size={15} style={{ color: 'var(--color-text-soft)' }} />
            </div>
          </Link>

          {/* Azkar grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {azkarItems.map((item) => (
              <Link key={item.link} href={item.link}>
                <div className="p-4 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5" style={{ background: item.bg }}>
                    <item.Icon size={18} style={{ color: item.color }} />
                  </div>
                  <p className="text-xs font-black leading-snug" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Prayer Times */}
          <div className="rounded-xl p-4" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <h2 className="text-xs font-black mb-4" style={{ color: 'var(--color-text)' }}>مواقيت الصلاة</h2>
            <Slah />
          </div>

          {/* Palestine counter */}
          <Year />
        </main>
      </div>
    </div>
  )
}