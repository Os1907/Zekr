import React from 'react'
import prayers from '@/helper/prayer'
import localFont  from  'next/font/local'
const KofeFont = localFont({ src: '../../../public/Fonts/alsamt diwani.ttf' })
const Quran = localFont({ src: '../../../public/Fonts/alfont_com_AlFont_com_pdms-saleem-quranfont.ttf' })

export default function page() {

  return (
    <>
    
    <div dir='rtl' >
      <div className='flex justify-center' >

     <h2 className={`text-second text-center border-b border-second inline  text-3xl lg:text-7xl mt-5 lg:my-5 lg:mt-16 pb-5  ${KofeFont.className}`}>
      {
        prayers.title
      }
     </h2>
      </div>
     {
      prayers.items.map((item)=>{
        return <>
        
     <div key={item.name} className='p-3 shadow-xl mx-4 lg:mx-20 rounded-pixel   my-4 bg-primary2 text-second  lg:pr-10 text-center border border-primary group hover:border-second  transition-all'>
      <div className=' rounded-md'>

      <p className={ `text-base lg:text-3xl lg:mr-10 text-start ${Quran.className} group-hover:text-second `}>
      {item.name}
      </p>
      </div>
    {
      item.item.map((item)=>{
        return <>
        <div key={item.reference} className='my-3 '>

       
        <div className='px-3 flex flex-col justify-center  gap-x-2  border border-[#ffffff1e] group-hover:border-second transition-all rounded-3xl py-2'>

        <p className={`text-base lg:text-2xl lg:mr-10 pt-2 text-start ${Quran.className} group-hover:text-second transition-all`}>{item.start} :</p>
        <h3 className={`text-lg lg:text-3xl my-2 font-medium   ${Quran.className}  `}>
     {
      item.prayer
     }
      </h3>
      <p className={`text-base lg:text-xl lg:mr-10 ${Quran.className} group-hover:text-second transition-all `}>
      {
      item.reference
     }
      </p> 
        </div>
      </div>
        </> 
      })
    }
     

     </div>
        </>
      })
     }

    </div>
    
    
    
    </>
  )
}
