
import Link from "next/link";
import localFont from 'next/font/local'
import IP from "@/Api/Ip";
import Slah from "../_Components/Slah/Slah";
import Year from "../_Components/Year/Year";
const Quran = localFont({ src: '../../../public/Fonts/taha2.ttf' })
const hand = localFont({ src: '../../../public/Fonts/hand.ttf' })
const main = localFont({ src: '../../../public/Fonts/main.ttf' })

function MainHome() {


  const Items = [
    {

      link: "/Morning",
      title: " أذكار الصباح",
      id: "page1",
    },
    {
      link: "/Evening",
      title: " أذكار المساء",
      id: "page2",
    },
    {
      link: "/Tasbeh",
      title: " تسابيح",
      id: "page3",
    },
    {
      link: "/waking-up",
      title: " أذكار الآستيقاظ",
      id: "page4",
    },
    {
      link: "/Sleep",
      title: "  أذكار النوم",
      id: "page5",
    },
    {
      link: "/ad3ia-quran",
      title: " أدعية الآنبياء",
      id: "page6",
    },
    

  ]
  return (
    <>
      <main dir="rtl" className={` ${main.className} `}>
        <div className="grid grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-20 gap-5 lg:gap-x-8 my-10">

          {
            Items.map((item) => {
              return <>
                <div key={item.id} className={`text-second text-xl lg:text-2xl col-span-1 cursor-pointer bg-primary2 border border-second group px-3 py-2 hover:scale-105  transition-all  rounded-pixel flex items-center justify-center `}>
                  <Link href={item.link}>

                    <p className=' text-4xl border '> {item.title}</p>
                  </Link>
                </div>
              </>
            })
          }
          <div className="text-primary bg-second hover:scale-105  text-2xl col-span-2 lg:col-span-3 cursor-pointer  border hover:border-second transition-all group px-3 py-4  rounded-pixel " >
          <Link href={`/Quran`} className="    flex justify-center items-center flex-col">

<p className=' text-4xl '> القرآن الكريم</p>
</Link>
          </div>
          <div className="col-span-2 lg:col-span-3" >

            <Slah />
          </div>
        </div>

        <div className={`w-full ${main.className} font-medium text-xl lg:text-2xl text-primary mb-5 lg:mb-0` }>

          <Year />
        </div>


      </main>


    </>
  )
}

export default MainHome