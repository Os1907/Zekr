'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../../public/logo.png'
import { IoMenu } from 'react-icons/io5'
import { CgMenuLeft } from "react-icons/cg";
import Link from 'next/link'
import localFont  from  'next/font/local'
const Quran = localFont({ src: '../../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })

export default function Navbar() {
  const [Action, setAction] = useState(true)
  return (
    <nav dir='rtl' className={`${Quran.className}`} >
  <div className="lg:mx-20 px-10 flex    items-center justify-between  gap-y-2 py-2 bg-off_white rounded-b-full ">
    <div className=' w-1/2 lg:w-auto flex '>
      <Image src={logo} className="w-7 mr-2" alt="Zekr Logo" width={350} height={350}/>

    </div>
   <div>
    <ul  className='hidden lg:flex  justify-between w-full lg:justify-center gap-x-4 text-primary off_white text-2xl   '>
    <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-5 py-1 hover:rounded-lg'>
        <Link href={"/"}>
        الصفحة الرئيسية
</Link>
      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-5 py-1 hover:rounded-lg'>
        <Link href={"/Morning"}>
        أذكار الصباح
</Link>
      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-5 py-1 hover:rounded-lg'>
      <Link href={"/Evening"}>
        
        أذكار المساء
        </Link>


      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-5 py-1 hover:rounded-lg'>
      
      <Link href={"/ad3ia-quran"}>

        أدعية الأنبياء
        </Link>

      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-5 py-1 hover:rounded-lg'>
      القرآن الكريم
        
      </li>
    </ul>
    {
      Action ?<IoMenu onClick={() => setAction(!Action)} className='text-primary text-3xl cursor-pointer lg:hidden'/> :
    <CgMenuLeft onClick={() => setAction(!Action)} className='text-primary text-3xl cursor-pointer lg:hidden'/>
 }
   </div>
   
  </div>
    {
      Action ? null : <div className='lg:hidden  bg-gradient-to-b from-[#1c1c1c00] to-primary text-white  rounded-b-3xl mx-4 transition-all overflow-hidden  mb-5 pb-2 border-b border-[#ffffff41]'>

    <ul className=' flex justify-center flex-col items-center gap-y-4 py-2 '>
    <li   onClick={() => setAction(!Action)} className='cursor-pointer text-xl py-2   border-b border-off_white pb-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md hover:w-3/6 hover:text-center '>
        <Link href={"/"}>
        الصفحة الرئيسية
</Link>
      </li>
            
      <li className='cursor-pointer text-xl py-2   border-b border-off_white pb-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md hover:w-3/6 hover:text-center '>
        
      <Link onClick={() => setAction(!Action)} href={"/Morning"}>
        أذكار الصباح
</Link>

      </li>
      <li className='cursor-pointer text-xl py-2  border-b border-off_white pb-2 hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md hover:w-3/6 hover:text-center '>
        
      <Link onClick={() => setAction(!Action)} href={"/Evening"}>
        
        أذكار المساء
        </Link>

      </li>
      <li className='cursor-pointer text-xl py-2  border-b border-off_white pb-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md hover:w-3/6 hover:text-center '>
        
      <Link onClick={() => setAction(!Action)} href={"/ad3ia-quran"}>

أدعية الأنبياء
</Link>

      </li>
      <li className='cursor-pointer text-xl py-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md hover:w-3/6 hover:text-center '>
      القرآن الكريم
        
      </li>

        </ul>


    </div>
    }
    
</nav>





  )
}
