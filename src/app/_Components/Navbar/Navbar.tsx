'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../../public/logo.png'
import { IoMenu } from 'react-icons/io5'
import { CgMenuLeft } from "react-icons/cg";
import Link from 'next/link'
export default function Navbar() {
  const [Action, setAction] = useState(true)
  return (
    <nav dir='rtl'  className=" lg:border-primary lg:border-b-2   mx-4 lg:mx-20 pt-2   ">
  <div className="max-w-screen-xl flex    items-center justify-between py-1 gap-y-2 lg:py-4">
    <div className=' w-1/2 lg:w-auto flex '>
      <Image src={logo} className="w-5 lg:w-8 mr-2  lg:mr-14" alt="Zekr Logo" width={350} height={350}/>

    </div>
   <div>
    <ul  className='hidden lg:flex  justify-between w-full lg:justify-center gap-x-4 text-primary off_white  font-ar font-bold  '>
    <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-3 hover:rounded-full'>
        <Link href={"/"}>
        الصفحة الرئيسية
</Link>
      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-3 hover:rounded-full'>
        <Link href={"/Morning"}>
        أذكار الصباح
</Link>
      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-3 hover:rounded-full'>
      <Link href={"/Evening"}>
        
        أذكار المساء
        </Link>


      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-3 hover:rounded-full'>
        
        أدعية الأنبياء

      </li>
      <li className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-3 hover:rounded-full'>
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
      Action ? null : <div className='lg:hidden bg-primary text-white  rounded-md transition-all  mb-5'>

    <ul className=' flex justify-center flex-col items-center gap-y-4 py-2 '>
    <li   onClick={() => setAction(!Action)} className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-3 hover:rounded-full'>
        <Link href={"/"}>
        الصفحة الرئيسية
</Link>
      </li>
            
      <li className='cursor-pointer py-2   border-b border-off_white pb-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md'>
        
      <Link onClick={() => setAction(!Action)} href={"/Morning"}>
        أذكار الصباح
</Link>

      </li>
      <li className='cursor-pointer py-2  border-b border-off_white pb-2 hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md'>
        
      <Link onClick={() => setAction(!Action)} href={"/Evening"}>
        
        أذكار المساء
        </Link>

      </li>
      <li className='cursor-pointer py-2  border-b border-off_white pb-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md'>
        
        أدعية الأنبياء

      </li>
      <li className='cursor-pointer py-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md'>
      القرآن الكريم
        
      </li>

        </ul>


    </div>
    }
    
</nav>





  )
}
