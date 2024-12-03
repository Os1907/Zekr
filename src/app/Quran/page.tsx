'use client'
import React, { useEffect, useState } from 'react'
import surah from '@/Api/Surah'
import localFont from 'next/font/local'
import { Surah } from '@/Interface/Interfaces'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { store, empty, remove } from '@/Rdeux/save'
import { RootState } from '@/Rdeux/store'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import SwaraCard from '../_Components/SwraCard/SwaraCard'

const main = localFont({ src: '../../../public/Fonts/main.ttf' })
const new1 = localFont({ src: '../../../public/Fonts/New/arabic.ttf' })

export default function Quraan() {

  const [swar, setSwar] = useState<Surah[]>([])
  const [allSwar, setAllSwar] = useState<Surah[]>([])
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.save);
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
  useEffect(() => {
  }, [count]);

  return (
    <>



      <div dir='rtl' className='min-h-screen'>
        <Link href={`/Quran/saved`}>
        <div className='w-full  flex justify-center mt-10 mx-auto'>

          <p className={`w-3/4 relative rounded-pixel bg-second active:outline-0 text-primary2 border  hover:border-second/ ${main.className} mx-auto text-2xl px-10 py-2 `}>
            السور المحفوظه
            <span className='absolute -top-4 -left-3 text-7xl   my-3  '>
              <BsBookmarkHeartFill className='w-1/2 h-full text-primary ' />
            </span>
          </p>

        </div>
        </Link>
        <div className='w-full flex justify-center  my-5 lg:my-10'>

          <input onKeyUp={(e) => userSearch(e.currentTarget.value)} placeholder='ماذا تريد أن تقرأ  ؟' className={`w-3/4 rounded-pixel bg-primary2 active:outline-0 text-second border  hover:border-second ${main.className} mx-auto text-2xl px-10 py-2 focus:outline-0  focus:border-second focus:scale-110  placeholder:text-second`} />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-20 mx-4 gap-x-10 gap-y-5 '>
          {
            swar?.map((item: Surah) => {
              return (
                <div key={item.number_of_surah} className='relative'>
               
                <SwaraCard  item={item} /> 
                <div className='absolute -top-4 left-10 text-7xl   my-3 cursor-pointer hover:scale-125 '>
                   {
                     count.includes(item.number_of_surah)
                       ? <BsBookmarkHeartFill
                         onClick={() => {
                           dispatch(remove(count.findIndex((Number) => Number == item.number_of_surah)));
                         }}
                         className='w-1/2 h-full text-second  hover:left-9 transition-all'
                       />
                       : <BsBookmarkHeartFill
                         onClick={() => {
                           dispatch(store(item.number_of_surah));
                           
                         }}
                         className='w-1/2 h-full text-primary  hover:left-9 transition-all'
                       />
                   }

                 </div>
                </div>


              );
            })
          }

        </div>








      </div>
    </>
    
  )
}
{/* 
  <div key={item.number_of_surah} className='relative'>
                //   <Link href={`/Quran/${item.number_of_surah}`}>
                //     <div className={`text-second text-2xl col-span-1 cursor-pointer bg-primary2 border hover:border-zinc-800 transition-all group px-3 lg:py-4 py-1 rounded-pixel ${Quran.className}`}>
                //       <div className='flex items-center justify-between b'>
                //         <div className='flex items-center'>
                //           <div className='flex size-6 lg:size-8 mr-1 items-center bg-primary rounded-md group-hover:bg-second group-hover:text-primary2 rotate-45 justify-center transition-all'>
                //             <span className={`-rotate-45 pt-2 relative z-10 ${number.className} text-2xl font-medium`}>
                //               {item.number_of_surah}
                //             </span>
                //           </div>
                //           <p className='mx-5 text-4xl'>
                //             سورة {item.name_translations.ar}
                //           </p>
                //         </div>

                //         <p className={`${number.className} text-2xl group-hover:text-second transition-all flex items-center gap-x-2 font-medium`}>
                //           {item.number_of_ayah} <span className={`${Quran.className} text-lg`}>آيات</span>
                //         </p>
                //       </div>
                //     </div>
                //   </Link>
                //   <div className='absolute -top-4 left-10 text-7xl   my-3 cursor-pointer hover:scale-125 '>
                //     {
                //       count.includes(item.number_of_surah)
                //         ? <BsBookmarkHeartFill
                //           onClick={() => {
                //             dispatch(remove(count.findIndex((Number) => Number == item.number_of_surah)));
                //           }}
                //           className='w-1/2 h-full text-second  hover:left-9 transition-all'
                //         />
                //         : <BsBookmarkHeartFill
                //           onClick={() => {
                //             dispatch(store(item.number_of_surah));
                //           }}
                //           className='w-1/2 h-full text-primary hover:text-second hover:left-9 transition-all'
                //         />
                //     }

                //   </div>
                // </div>
   */}