import React from 'react'
import { Surah } from '@/Interface/Interfaces'
import Link from 'next/link';
import localFont from 'next/font/local'
const Quran = localFont({ src: '../../../../public/Fonts/sura.ttf' })
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })
interface Iprop{
    item:Surah
}
export default function SwaraCard({item}:Iprop) {
  return (
    <>
    
     <div key={item.number_of_surah} className='relative'>
                  <Link href={`/Quran/${item.number_of_surah}`}>
                    <div className={`text-second text-2xl col-span-1 cursor-pointer bg-primary2 border hover:border-zinc-800 transition-all group px-3 lg:py-4 py-1 rounded-pixel ${Quran.className}`}>
                      <div className='flex items-center justify-between b'>
                        <div className='flex items-center'>
                          <div className='flex size-6 lg:size-8 mr-1 items-center bg-primary rounded-md group-hover:bg-second group-hover:text-primary2 rotate-45 justify-center transition-all'>
                            <span className={`-rotate-45 pt-2 relative z-10 ${number.className} text-2xl font-medium`}>
                              {item.number_of_surah}
                            </span>
                          </div>
                          <p className='mx-5 text-4xl'>
                            سورة {item.name_translations.ar}
                          </p>
                        </div>

                        <p className={`${number.className} text-2xl group-hover:text-second transition-all flex items-center gap-x-2 font-medium`}>
                          {item.number_of_ayah} <span className={`${Quran.className} text-lg`}>آيات</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                </div>
    
    
    
    
    
    
    
    </>
  )
}
