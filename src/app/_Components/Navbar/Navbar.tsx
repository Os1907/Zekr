'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { CgMenuLeft } from "react-icons/cg";
import Link from 'next/link'
import localFont  from  'next/font/local'
const KofeFont = localFont({ src: '../../../../public/Fonts/alsamt diwani.ttf' })
const new1 = localFont({ src: '../../../../public/Fonts/New/arabic.ttf' })

export default function Navbar() {
  const [Action, setAction] = useState(true)
  const headBar=[
    {
      link: '/',
      title: '  الصفحة الرئيسية',
      id:'HomePage'
    }
    ,
    {
     
      link:"/Morning",
      title:   " أذكار الصباح",
      id:"mor1"
    },
    {
      link:"/Evening",
      title:    " أذكار المساء",
      id:"night2"
    },
    {
      link:"/ad3ia-quran",
      title:   " أدعية الآنبياء" ,
      id:"prayer"
    },
    {
      link:"/Quran",
      title:   " القرآن الكريم" ,
      id:"quran1"
    },
  ]
  return (
    <nav dir='rtl' className={`${new1.className}`} >
  <div className="lg:mx-20 mx-4 px-10 flex    items-center justify-between  gap-y-2 py-4 bg-primary rounded-pixel mt-3 ">
    <div className=' w-1/2 lg:w-auto flex  '>
      <p className={` text-3xl text-off_white ${KofeFont.className} `}>
     ذِكْر
      </p>
    </div>
   <div>
    <ul  className='hidden lg:flex  justify-between w-full lg:justify-center gap-x-1 text-second text-2xl   '>
      {
          headBar.map((item)=> {return ( 
          <li key={item.id} className='cursor-pointer hover:bg-second  font-bold  hover:bg-opacity-25 transition-all  text-lg lg:text-xl  px-3 py-1 hover:rounded-pixel'>
        <Link href={`${item.link}`}>
        {
          item.title
        }
</Link>
      </li>
           ) })
      }
    </ul>
    {
      Action ?<IoMenu onClick={() => setAction(!Action)} className='text-primary text-3xl cursor-pointer lg:hidden'/> :
    <CgMenuLeft onClick={() => setAction(!Action)} className='text-primary text-3xl cursor-pointer lg:hidden'/>
 }
   </div>
   
  </div>
    {
      Action ? null : <div className='lg:hidden  bg-second text-primary  rounded-pixel mt-2 mx-4 transition-all overflow-hidden  mb-5 pb-2 '>

    <ul className=' flex justify-center flex-col items-center gap-y-4 py-2 '>
    {
          headBar.map((item)=> { return (  <li key={item.id} onClick={() => setAction(!Action)} className='cursor-pointer text-2xl py-2 font-medium    pb-2  hover:text-second hover:bg-primary transition-all px-3 hover:rounded-pixel hover:w-3/6 hover:text-center '>
        <Link href={`${item.link}`}>
        {
          item.title
        }
</Link>
      </li>
           ) }
          )
      }
        </ul>


    </div>
    }
    
</nav>





  )
}
