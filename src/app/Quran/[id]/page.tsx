import React from 'react'
import getSurah from '@/Api/getSurah'
import { Iparams, Surah } from '@/Interface/Interfaces'
import localFont from 'next/font/local'
import SurahBox from '@/app/_Components/surah/surahBox'
import AudioPlayer from '@/app/_Components/audio/audio'
import Link from 'next/link'
const Quran = localFont({ src: '../../../../public/Fonts/sura.ttf' })//sura
const taha = localFont({ src: '../../../../public/Fonts/taha.ttf' })
const taha2 = localFont({ src: '../../../../public/Fonts/taha2.ttf' })
const taha3 = localFont({ src: '../../../../public/Fonts/taha3.ttf' })
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })
const hand = localFont({ src: '../../../../public/Fonts/hand.ttf' })

export default async function page({ params }: Iparams) {
    const data: Surah = await getSurah(params.id)
    // console.log(data.recitations[0].audio_url)
    return (
        <>
            <div dir='rtl' className=' my-10  mx-4 lg:mx-20'>

                <div className='flex justify-center items-center gap-x-2'>


                    <h3 className={`text-5xl lg:text-8xl text-off_white ${Quran.className}`}> سورة {data?.name_translations?.ar}</h3>
                    <p className={`text-second ${hand.className}`}>
                        ({
                            data.place === "Mecca" ? "مكية" : "مدنية"
                        } )
                    </p>
                </div>
                <div className={` flex justify-between text-second text-xl lg:text-2xl mt-3   ${hand.className}`}>
                    <div className=' flex flex-col '>

                    <p>
                        <span className="  mx-1 mb-1">
                            رقم السورة
                        </span>
                        {data.number_of_surah}
                        
                    </p>
                    <Link href={`/Quran/${data.number_of_surah - 1}`}>
                    <p
                    className="text-primary bg-second hover:bg-[#2ca4ab]  px-3  py-1 rounded-3xl focus:outline-none"
                >
                    السورة السابقة 
                </p> 
                </Link>
</div>

<div  className=' flex flex-col '>

                    <p>
                        <span className="  mx-1 mb-1">
                            عدد الآيات
                        </span>
                        {data.number_of_ayah}
                    </p>
                    <Link href={`/Quran/${data.number_of_surah + 1}`}>
                    <p
                    className="text-primary bg-second hover:bg-[#2ca4ab]  px-3  py-1 rounded-3xl focus:outline-none"
                >
                    السورة التالية 
                </p> 
                </Link>
</div>
                </div>
                <div className=' w-full flex justify-center my-3'>
                    <p className={`${hand.className} text-white  text-2xl `}>
                     الاستماع ❤
                    </p>
                </div>
                {
                    data?.recitations.map(item => <AudioPlayer key={`${item.audio_url + item.name + data.name_translations.ar}`} audio={item}/> )
                }
                    
                    


                <SurahBox data={data} params={params.id} />
            </div>







        </>
    )
}


