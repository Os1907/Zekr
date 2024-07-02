'use client';
import React from 'react';
import { useAzkarIndex } from '@/hooks/useAzkarAction';
import { useAzkarData } from '@/hooks/useAzkarData';
import { usePathname } from 'next/navigation';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi";
import Text from '../Text/Text';



export default function Item() {
  const pathname = usePathname()
let data = useAzkarData(pathname.slice(1))
let { index, setIndex , count , dispatch, decrement} = useAzkarIndex(data)
  return (
    <>
      <div dir="rtl">
        <h2 className="text-primary text-center text-5xl py-10 font-bold font-ar">{
            data[0]?.category
            }</h2>
        <div className="bg-primary p-3 shadow-xl mx-4 lg:mx-20 rounded-xl mt-2">
        <p className=" text-sm lg:text-base  text-center text-off_white ">
                {data[index]?.count}
                </p>

          <Text item={{
            content: data[index]?.content,
            description: data[index]?.description,
            count: data[index]?.count,
          }} />

          <div className=' px-3 rounded-full flex justify-center items-center  w-full '>

            {
              count <= 0 ? <p className='text-white bg-[#168771] px-3 py-1 rounded-full font-ar'>  تقبل الله   أنتقل الي التالي </p> : <button onClick={() => dispatch(decrement())} className='digital w-full text-primary b g-[#1C6758] py-4 px-10 text-xl font-bold lg:text-4xl rounded-xl cursor-pointer bg-off_white  yellow-400 hover:bg-[#168771] hover:text-white transition-all   '>
                <span className='block'>
                  {count}

                </span>
                <span className='text-xl'>
                  متبقي
                </span>
              </button>
            }

          </div>
        </div>
      </div>

      <div className='flex justify-center gap-x-4 my-4'>
        <button
          onClick={() => setIndex(index + 1)}
          className='bg-sky-600 hover:bg-sky-800 [#1C6758] p-4 font-bold text-white rounded-full text-lg'>
          <HiOutlineChevronDoubleLeft className='inline mx-2' />
        </button>
        <button
          onClick={() => setIndex(index - 1)}
          className='bg-rose-600 hover:bg-rose-800 px-4 text-white rounded-full'>
          <HiOutlineChevronDoubleRight className='inline mx-2' />
        </button>
      </div>
    </>
  );
}
