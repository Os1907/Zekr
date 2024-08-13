'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { CgMenuLeft } from "react-icons/cg";
import Link from 'next/link'
import localFont  from  'next/font/local'
const Quran = localFont({ src: '../../../../public/Fonts/taha2.ttf' })
const KofeFont = localFont({ src: '../../../../public/Fonts/alsamt diwani.ttf' })
const hand = localFont({ src: '../../../../public/Fonts/hand.ttf' })

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
    <nav dir='rtl' className={`${hand.className}`} >
  <div className="lg:mx-20 px-10 flex    items-center justify-between  gap-y-2 py-4 bg-second rounded-b-full ">
    <div className=' w-1/2 lg:w-auto flex '>
      <p className={`text-3xl text-off_white ${Quran.className} mr-2 `}>
     ذِكْر
      </p>
    </div>
   <div>
    <ul  className='hidden lg:flex  justify-between w-full lg:justify-center gap-x-4 text-off_white text-2xl   '>
      {
          headBar.map((item)=> <>
          <li key={item.id} className='cursor-pointer hover:bg-primary  hover:text-white transition-all hover:px-5 py-1 hover:rounded-2xl'>
        <Link href={`${item.link}`}>
        {
          item.title
        }
</Link>
      </li>
          </> )
      }
    </ul>
    {
      Action ?<IoMenu onClick={() => setAction(!Action)} className='text-off_white text-3xl cursor-pointer lg:hidden'/> :
    <CgMenuLeft onClick={() => setAction(!Action)} className='text-off_white text-3xl cursor-pointer lg:hidden'/>
 }
   </div>
   
  </div>
    {
      Action ? null : <div className='lg:hidden  bg-primary text-white  rounded-b-3xl mx-4 transition-all overflow-hidden  mb-5 pb-2 border-b border-second'>

    <ul className=' flex justify-center flex-col items-center gap-y-4 py-2 '>
    {
          headBar.map((item)=> <>
          <li onClick={() => setAction(!Action)} className='cursor-pointer text-xl py-2   border-b border-second pb-2  hover:text-primary hover:bg-off_white transition-all px-3 hover:rounded-md hover:w-3/6 hover:text-center '>
        <Link href={`${item.link}`}>
        {
          item.title
        }
</Link>
      </li>
          </> )
      }
        </ul>


    </div>
    }
    
</nav>





  )
}
