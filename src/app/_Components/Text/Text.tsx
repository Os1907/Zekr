import React from 'react'
import localFont from 'next/font/local'
const main = localFont({ src: '../../../../public/Fonts/main.ttf' })

interface Iprop {
  item: {
    content: string;
    description: string;
    count: string;
  }
}

export default function Text({ item }: Iprop) {
  return (
    <div className='flex flex-col items-center py-4 px-2 gap-4'>
      {/* Arabic text */}
      <p
        className='text-3xl lg:text-4xl xl:text-5xl text-center leading-loose amiri-quran-regular'
        style={{ lineHeight: '2.2', color: 'var(--color-text)' }}
      >
        {item?.content}
      </p>

      {/* Description / benefit */}
      {item?.description && (
        <div
          className={`${main.className} rounded-2xl px-4 py-3 text-sm lg:text-base max-w-xl text-center`}
          style={{
            background: 'var(--color-accent-soft)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-accent)',
          }}
        >
          {item.description}
        </div>
      )}
    </div>
  )
}