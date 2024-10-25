'use client'
import surah from '@/Api/Surah'
import SwaraCard from '@/app/_Components/SwraCard/SwaraCard'
import { Surah } from '@/Interface/Interfaces'
import { RootState } from '@/Rdeux/store'
import React, { useEffect, useState } from 'react'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import localFont from 'next/font/local'
import { remove, store } from '@/Rdeux/save'
import Link from 'next/link'
const main = localFont({ src: '../../../../public/Fonts/main.ttf' })

export default function Saved() {
    const [swar, setSwar] = useState<Surah[]>([])
    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.save);
    const fetch = async () => {
        const data = await surah()
        setSwar(data)
    }
    useEffect(() => {
        fetch()
    }, [])
    return (
        <>
        {
          count.length > 0 ?   <div className='py-10'>
                <div className='w-full  flex justify-center my-5 lg:my-10 mx-auto'>
                    <p className={`w-3/4 relative rounded-pixel bg-second active:outline-0 text-primary2 border ${main.className} mx-auto text-2xl px-10 py-2 `}>
                        السور المحفوظه
                        <div className='absolute -top-4 -left-3 text-7xl   my-3  '>
                            <BsBookmarkHeartFill className='w-1/2 h-full text-primary ' />

                        </div>
                    </p>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-20 mx-4 gap-x-10 gap-y-5 '>
                    {swar?.filter((item) => count.includes(item.number_of_surah)).map((item) => {
                        return (
                            <div key={item.number_of_surah} className='relative'>

                                <SwaraCard item={item} />
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
                                                className='w-1/2 h-full text-primary hover:text-second hover:left-9 transition-all'
                                            />
                                    }

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> : <div className='py-10' >
            <div className='w-full  flex justify-center mt-10 lg:mt-20 mx-auto '>
                    <p className={` text-second  ${main.className} text-4xl lg:text-5xl`}>
                      لا يوجد سور محفوظه 
                    </p>
                </div>
                <Link href={`/Quran/`}>
        <div className='  flex justify-center mx-auto mt-5'>

          <p className={` relative rounded-pixel bg-second active:outline-0 text-primary2 border hover:scale-105  hover:border-second ${main.className} mx-auto text-2xl px-20 py-2 `}>
          القرآن الكريم
           
          </p>

        </div>
        </Link>
            </div>
        }
            
        </>
    )
}
