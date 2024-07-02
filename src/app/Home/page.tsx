
import Link from "next/link";

import { IoSunny } from "react-icons/io5";
import {  FaMoon, FaPrayingHands } from "react-icons/fa";
import { GiNightSleep, GiPrayerBeads } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";
import mor from '../../../public/mor-white.png'
import night from '../../../public/night-white.png'
import tsabeh from '../../../public/tsabeh-white.png'
import wak from '../../../public/wak-white.png'
import sleep from '../../../public/sleep-white.png'
import ad3ia from '../../../public/ad3ia-white.png'


import Image from "next/image";
function MainHome() {
  const Items=[
   
    {
     
      link:"/Morning",
      icon:    <Image src={mor} className="w-full lg:w-3/4 px-10 " alt="morning image" width={350} height={350}/>,
      id:"page1"
    },
    {
      link:"/Evening",
      icon:    <Image src={night} className="w-full lg:w-3/4 px-10 " alt="morning image" width={350} height={350}/>,
      id:"page2"
    },
    {
      link:"/Tasbeh",
      icon:    <Image src={tsabeh} className="w-full lg:w-3/4 px-10 " alt="morning image" width={350} height={350}/>,
      id:"page3"
    },
    {
      link:"/waking-up",
      icon:    <Image src={wak} className="w-full lg:w-3/4 px-10 " alt="morning image" width={350} height={350}/>,
      id:"page4"
    },
    {
      link:"/Sleep",
      icon:    <Image src={sleep} className="w-full lg:w-3/4 px-10 " alt="morning image" width={350} height={350}/>,
      id:"page5"
    },
    {
      link:"/ad3ia-quran",
      icon:    <Image src={ad3ia} className="w-full lg:w-3/4 px-10 " alt="morning image" width={350} height={350}/>,
      id:"page6"
    }
    
  ]
  return (
    <>
      <main dir="rtl" className=" grid grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-20 gap-5 lg:gap-x-5 my-10">


    {
      Items.map((item)=>{
        return <>
        <div className="col-span-1 bg-gradient-to-b from-[#1c1c1c1e] to-primary  bg- primary   rounded-3xl hover:scale-105 transition-all border border-[#ffffff42] py-3 lg:py-10">
          <Link href={item.link} className="h-32 lg:h-44    flex justify-center items-center flex-col">
            {item.icon}
          </Link>
        </div>
        </>
      })
    }
     



      </main>


    </>
  )
}

export default MainHome