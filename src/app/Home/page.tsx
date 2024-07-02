
import Link from "next/link";
import MorninZekr from "../Morning/page"

import { IoSunny } from "react-icons/io5";
import {  FaMoon, FaPrayingHands } from "react-icons/fa";
import { GiNightSleep, GiPrayerBeads } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";

function MainHome() {
  return (
    <>
      <main dir="rtl" className=" grid grid-cols-2 lg:grid-cols-4 mx-4 lg:mx-20 gap-5 lg:gap-x-5 my-10">

        <div className="col-span-1 bg-primary   rounded-md hover:scale-105 transition-all border border-off_white">
          <Link href={"/Morning"} className="h-56 lg:h-72   flex justify-center items-center flex-col">
            <IoSunny className="text-5xl text-off_white" />
            <p className="text-3xl text-off_white my-3">

              أذكار الصباح
            </p>
          </Link>
        </div>
        <div className="col-span-1 bg-primary   rounded-md hover:scale-105 transition-all border border-off_white">
          <Link href={"/Evening"} className="h-56 lg:h-72   flex justify-center items-center flex-col">
            <FaMoon className="text-5xl text-off_white my-3" />
            <p className="text-3xl text-off_white">

              أذكار المساء
            </p>
          </Link>
        </div>
        <div className="col-span-1 bg-primary   rounded-md hover:scale-105 transition-all border border-off_white">
          <Link href={"/Tasbeh"} className="h-56 lg:h-72   flex justify-center items-center flex-col">
            <GiPrayerBeads className="text-5xl text-off_white my-3" />
            <p className="text-3xl text-off_white">

              تسابيح
            </p>
          </Link>
        </div>
        <div className="col-span-1 bg-primary   rounded-md hover:scale-105 transition-all border border-off_white">
          <Link href={"/waking-up"} className="h-56 lg:h-72   flex justify-center items-center flex-col">
            <BsPersonArmsUp className="text-5xl text-off_white my-3" />
            <p className="text-3xl text-off_white">

            أذكار الاستيقاظ

            </p>
          </Link>
        </div>
        <div className="col-span-1 bg-primary   rounded-md hover:scale-105 transition-all border border-off_white">
          <Link href={"/Sleep"} className="h-56 lg:h-72   flex justify-center items-center flex-col">
            <GiNightSleep className="text-5xl text-off_white my-3" />
            <p className="text-3xl text-off_white">

            أذكار النوم

            </p>
          </Link>
        </div>
        <div className="col-span-1 bg-primary   rounded-md hover:scale-105 transition-all border border-off_white">
          <Link href={"/ad3ia-quran"} className="h-56 lg:h-72   flex justify-center items-center flex-col">
            <FaPrayingHands className="text-5xl text-off_white my-3" />
            <p className="text-3xl text-off_white">

            
            أدعية الآنبياء

            </p>
          </Link>
        </div>



      </main>
      {/* <MorninZekr /> */}


    </>
  )
}

export default MainHome