export default function loading() {
  return (
    <div dir='rtl' className='min-h-screen' style={{ background: 'var(--color-bg)' }}>

      <div className='px-5 pt-8 pb-5 max-w-2xl mx-auto'>
        <div className='h-3 w-16 mb-5 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
        <div className='h-8 w-44 mb-2 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
        <div className='h-3 w-32 animate-pulse'      style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
      </div>

      <div style={{ height: 1, background: 'var(--color-border)' }} />

      <div className='max-w-2xl mx-auto px-5 py-5 flex flex-col gap-3'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className='animate-pulse'
            style={{ height: 120, background: 'var(--color-surface)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }} />
        ))}
      </div>
    </div>
  )
}