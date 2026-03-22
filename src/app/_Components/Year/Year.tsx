export default function Year() {
  const years = new Date().getFullYear() - 1948
  return (
    <div
      dir='rtl'
      className="flex items-center justify-between gap-4 p-4"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 flex items-center justify-center text-lg shrink-0"
          style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}
        >
          🇵🇸
        </div>
        <div>
          <p className="text-xs font-black" style={{ color: 'var(--color-text)' }}>فلسطين في القلب</p>
          <p className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>اللهم انصر إخواننا في فلسطين وغزة</p>
        </div>
      </div>
      <div className="flex items-baseline gap-1 shrink-0">
        <span className="text-2xl font-black tabular-nums" style={{ color: 'var(--color-accent-2)' }}>{years}</span>
        <span className="text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>عاماً</span>
      </div>
    </div>
  )
}