'use client'
import React, { useEffect, useState } from 'react'
import surah from '@/Api/Surah'
import localFont from 'next/font/local'
import { Surah } from '@/Interface/Interfaces'
import Link from 'next/link'
const Quran = localFont({ src: '../../../public/Fonts/sura.ttf' })
const Quran2 = localFont({ src: '../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })
const KofeFont = localFont({ src: '../../../public/Fonts/alsamt diwani.ttf' })


export default function Quraan() {

  const [swar, setSwar] = useState<Surah[]>([])
  const [allSwar, setAllSwar] = useState<Surah[]>([]) 

  const userSearch = (userInput: string) => {
    if (userInput.trim() === "") {
      setSwar(allSwar) 
    } else {
      const filtered = allSwar.filter((item: Surah) => item.name_translations.ar.includes(userInput))
      setSwar(filtered)
    }
  }

  const fetch = async () => {
    const data = await surah()
    setSwar(data)
    setAllSwar(data) 
  }

  useEffect(() => {
    fetch()
  }, [])
  return (
    <>



      <div dir='rtl' className='min-h-screen'>
        <div className='w-full flex justify-center my-10'>

          <input onKeyUp={(e)=>userSearch(e.currentTarget.value)} placeholder='ماذا تريد أن تقرأ  ؟' className={`w-3/4 rounded-full bg-second active:outline-0 text-white ${Quran2.className} mx-auto text-2xl px-10 py-2 focus:outline-0  focus:border-0  placeholder:text-off_white`}/>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-20 mx-4 gap-10 '>
          {
            swar?.map((item: Surah) => {
              return <>
              <Link href={`/Quran/${item.number_of_surah}`} key={item.number_of_surah}>
                <div className={` text-off_white text-2xl col-span-1 cursor-pointer  border hover:border-second transition-all group px-3 py-4  rounded-lg  ${Quran.className} `}>
                  <div className='flex items-center justify-between b '>
                    <div className='flex  items-center '>

                      <div className='flex size-8 mr-1  items-center bg-zinc-700 rounded-md group-hover:bg-second rotate-45 justify-center transition-all'>

                        <span className={` -rotate-45 pt-2  text-base relative z-10  ${KofeFont.className} `}>
                          {
                            item.number_of_surah
                          }
                        </span>
                      </div>
                      <p className='mx-5 text-4xl '>
                      سورة  {item.name_translations.ar}
                      </p>
                    </div>

                    <p className={`${KofeFont.className} text-sm group-hover:text-second transition-all`}>
                      {
                        item.number_of_ayah
                      } <span className={`${Quran.className}  text-lg`}>
                        آيات
                      </span>
                    </p>
                  </div>
                </div>
                </Link>
              </>
            })
          }

        </div>








      </div>
    </>
  )
}
