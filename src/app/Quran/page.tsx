import React from 'react'
import surah from '@/Api/Surah'
import localFont  from  'next/font/local'
const Quran = localFont({ src: '../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })
const KofeFont = localFont({ src: '../../../public/Fonts/alsamt diwani.ttf' })

export default async function page() {
  const {data} = await surah()
  return (
    <>
    
    <div dir='rtl' className='min-h-screen'>
    
    <div className='grid grid-cols-3 lg:mx-20 mx-4 gap-10 my-20'>
      {

data?.map((item:any)=>{
          return <>
          <div className={` text-off_white text-2xl col-span-1 cursor-pointer  border hover:border-second transition-all group px-3 py-4  rounded-lg  ${Quran.className} `}>
            <div className='flex items-center justify-between '>
              <div className='flex '>

              <div className='flex size-8 mr-1 items-center bg-zinc-700 rounded-md group-hover:bg-second rotate-45 justify-center transition-all'>

              <span className={` -rotate-45 pt-2  text-base relative z-10  ${KofeFont.className} `}>
                {
                  item.number 
                } 
              </span>
              </div>
            <p className='mx-5'>
              {item.name}
            </p>
              </div>
              
            <p className={`${KofeFont.className} text-sm group-hover:text-second transition-all`}>
               {
                item.numberOfAyahs
              } <span className={`${Quran.className}  text-lg`}>
                آيات
              </span>
            </p>
            </div>
          </div>
          </>
        })
      }

    </div>








    </div>
    </>
  )
}
