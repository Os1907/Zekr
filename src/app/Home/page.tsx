
import Link from "next/link";
import localFont  from  'next/font/local'
const Quran = localFont({ src: '../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })
function MainHome() {
  const Items=[
    {
     
      link:"/Morning",
      title:   " أذكار الصباح",
      id:"page1"
    },
    {
      link:"/Evening",
      title:    " أذكار المساء",
      id:"page2"
    },
    {
      link:"/Tasbeh",
      title:    " تسابيح" ,
      id:"page3"
    },
    {
      link:"/waking-up",
      title:    " أذكار الآستيقاظ",
      id:"page4"
    },
    {
      link:"/Sleep",
      title:   "  أذكار النوم",
      id:"page5"
    },
    {
      link:"/ad3ia-quran",
      title:   " أدعية الآنبياء" ,
      id:"page6"
    }
    
  ]
  return (
    <>
      <main dir="rtl" className=" grid grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-20 gap-5 lg:gap-x-8 my-10">


    {
      Items.map((item)=>{
        return <>
        <div className="text-off_white text-2xl col-span-1 cursor-pointer  border hover:border-second transition-all group px-3 py-4  rounded-lg ">
          <Link href={item.link} className="    flex justify-center items-center flex-col">
            
            <p className={`${Quran.className} text-off_white  text-3xl`}> {item.title}</p>
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