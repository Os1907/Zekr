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


const myFont = localFont({ src: '../../../../public/Fonts/alsamt diwani.ttf' })
const Quran = localFont({ src: '../../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })

export default function Item() {
  const pathname = usePathname()

  let data = useAzkarData(pathname.slice(1))
  let { index, setIndex, count, dispatch, decrement } = useAzkarIndex(data)
 
  if(index < data.length ){
  return (
    
    <>
      <div dir="rtl">
        <h2 className={`text-off_white text-center text-5xl lg:text-7xl pb-10 pt-20   ${myFont.className}`}>{
            data[0]?.category
            }</h2>
        <div className="bg-primary p-3 shadow-xl mx-4 lg:mx-20 rounded-xl mt-2">
        <p className=" text-sm lg:text-base  text-center text-off_white ">
                {data[index]?.count}
                </p>
<div className={`${Quran.className}`}>

          <Text item={{
            content: data[index]?.content,
            description: data[index]?.description,
            count: data[index]?.count,
          }} />
</div>

          <div className=' px-3 rounded-full flex justify-center items-center  w-full '>

            {
              count <= 0 ? <p className={`text-white bg-[#129e8d] px-3 py-1 rounded-full ${Quran.className} `}>  تقبل الله   أنتقل الي التالي </p> : <button onClick={() => dispatch(decrement())} className='digital w-full text-primary b g-[#1C6758] py-4 px-10 text-xl font-bold lg:text-4xl rounded-xl cursor-pointer bg-off_white  yellow-400 hover:bg-[#108e7f] hover:text-white transition-all   '>
                <span className='block'>
                  {count}

                </span>
                <span className={`text-xl ${Quran.className}}`}>
                  متبقي
                </span>
              </button>
            }

          </div>
        </div>
      </div>
      <div className='flex justify-center gap-x-4 my-4'>
        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className='bg-sky-600 hover:bg-sky-800 [#1C6758] p-4 font-bold text-white rounded-full text-lg'>
          <HiOutlineChevronDoubleLeft className='inline mx-2' />
        </button>
        <button
          onClick={() => setIndex((prev) => prev - 1)}
          className='bg-rose-600 hover:bg-rose-800 px-4 text-white rounded-full'>
          <HiOutlineChevronDoubleRight className='inline mx-2' />
        </button>
      </div>
    <div className={ ` ${Quran.className}`}>

      <Year/>
    </div>
    </>
  );
 }else{
  return (
<>
<div dir='rtl' className="bg-primary p-3 shadow-xl mx-4 lg:mx-20 rounded-xl mt-2">
        
        <h2 className={`text-off_white text-center text-5xl lg:text-7xl py-20   ${myFont.className}`}>

          أنتهيت من أذكارك        </h2>
      </div>
      <div dir='rtl' className='flex justify-center gap-x-4 my-4'>
        <button 
          onClick={() => setIndex(0)}
          className={`bg-primary hover:bg-[#129e8d] py-3 px-8 hover:px-10 transition-all hover:border-off_white hover:border  text-white rounded-md text-2xl flex items-center ${Quran.className} `}>
         اعادة الآذكار 
         <MdOutlineReplayCircleFilled className='inline mx-2' />
        </button>
       
      </div> 

</>


  )
 }

}
