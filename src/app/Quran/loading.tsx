export default function loading() {
  return (
    <div dir='rtl' className='min-h-screen' style={{ background: 'var(--color-bg)' }}>

      <div className='px-5 pt-8 pb-5 max-w-3xl mx-auto'>
        <div className='h-3 w-20 mb-5 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
        <div className='flex items-end justify-between gap-4 mb-5'>
          <div className='flex flex-col gap-2'>
            <div className='h-2.5 w-16 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
            <div className='h-8 w-40 animate-pulse'   style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
          </div>
          <div className='h-6 w-16 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
        </div>
        <div className='h-10 w-full mb-3 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
        <div className='flex gap-2'>
          <div className='h-8 w-14 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
          <div className='h-8 w-14 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
          <div className='h-8 w-14 animate-pulse' style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius)' }} />
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--color-border)' }} />

      <div className='max-w-3xl mx-auto px-5 py-5 grid grid-cols-2 lg:grid-cols-3 gap-2.5'>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className='animate-pulse'
            style={{ height: 72, background: 'var(--color-surface)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }} />
        ))}
      </div>
    </div>
  )
}