'use client';
import React from 'react';
import { useAzkarIndex } from '@/hooks/useAzkarAction';
import { useAzkarData } from '@/hooks/useAzkarData';
import { usePathname } from 'next/navigation';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi";
import Text from '../Text/Text';
import { MdOutlineReplayCircleFilled } from 'react-icons/md';
import localFont  from  'next/font/local'
import Year from '../Year/Year';
import { TiMediaPlay, TiMediaPlayReverse } from 'react-icons/ti';
const myFont = localFont({ src: '../../../../public/Fonts/alsamt diwani.ttf' })
const Quran = localFont({ src: '../../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })
const main = localFont({ src: '../../../../public/Fonts/main.ttf' })

export default function Item() {
  const pathname = usePathname()

  let data = useAzkarData(pathname.slice(1))
  let { index, setIndex, count, dispatch, decrement } = useAzkarIndex(data)
 
  if(index < data?.length ){
  return (
    
    <>
      <div dir="rtl">
        <h2 className={`text-second text-center text-5xl lg:text-7xl pb-10 pt-20   ${myFont.className}`}>{
            data[0]?.category
            }</h2>
        <div className="bg-primary2 p-3 shadow-xl mx-4 lg:mx-20 rounded-pixel mt-2  ">
        <p className=" text-sm lg:text-base  text-center text-second ">
                {data[index]?.count}
                </p>
<div className={`${Quran.className}`}>

          <Text item={{
            content: data[index]?.content,
            description: data[index]?.description,
            count: data[index]?.count,
          }} />
</div>

          <div className=' px-3 rounded-pixel flex justify-center items-center  w-full '>

            {
              count <= 0 ? <p className={`text-second  bg-second px-3 py-1 rounded-full ${Quran.className} `}>  تقبل الله   أنتقل الي التالي </p> : <button onClick={() => dispatch(decrement())} className='digital w-full text-primary bg-second py-4 px-10 text-xl font-bold lg:text-4xl rounded-pixel cursor-pointer   yellow-400 hover:bg-primary hover:text-second transition-all   '>
                <span className='block'>
                  {count}

                </span>
                <span className={`text-xl ${main.className}}`}>
                  متبقي
                </span>
              </button>
            }

          </div>
        </div>
      </div>
      <div className={`flex justify-center gap-x-4 my-4 ${main.className} text-3xl`}>
      <button
          onClick={() => setIndex((prev) => prev - 1)}
          className='bg-second p-4 font-bold text-primary rounded-pixel group text-lg'>
          <TiMediaPlay className='inline mx-2 mb-1' />
          <p className=' ml-2 hidden group-hover:inline transition-all'>
          السابق  
          </p>
        </button>
        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className='bg-second p-4 font-bold text-primary rounded-pixel group text-lg'>
          <p className=' mr-2 hidden group-hover:inline transition-all'>
          التالي
          </p>
          <TiMediaPlayReverse className='inline mx-2 mb-1' /> 
        </button>
        
      </div>
    <div className={ ` ${main.className} text-primary text-xl lg:text-2xl`}>

      <Year/>
    </div>
    </>
  );
 }else{
  return (
<>
<div dir='rtl' className="bg-second p-3 shadow-xl mx-4 lg:mx-20 rounded-xl mt-2">
        
        <h2 className={`text-primary2 text-center text-5xl lg:text-7xl py-20   ${myFont.className}`}>

          أنتهيت من أذكارك        </h2>
      </div>
      <div dir='rtl' className='flex justify-center gap-x-4 my-4'>
        <button 
          onClick={() => setIndex(0)}
          className={`bg-second hover:bg-primary2 py-3 px-8 hover:px-10 transition-all hover:border-off_white hover:border  text-white rounded-md text-2xl flex items-center ${Quran.className} `}>
         اعادة الآذكار 
         <MdOutlineReplayCircleFilled className='inline mx-2' />
        </button>
       
      </div> 

</>


  )
 }

}
