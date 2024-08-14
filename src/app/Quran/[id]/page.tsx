import React from 'react'
import getSurah from '@/Api/getSurah'
import { Iparams, Surah } from '@/Interface/Interfaces'
import localFont from 'next/font/local'
import SurahBox from '@/app/_Components/surah/surahBox'
import AudioPlayer from '@/app/_Components/audio/audio'
import Link from 'next/link'
const Quran = localFont({ src: '../../../../public/Fonts/sura.ttf' })//sura
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })
const main = localFont({ src: '../../../../public/Fonts/main.ttf' })

export default async function page({ params }: Iparams) {
    const data: Surah = await getSurah(params.id)
    // console.log(data.recitations[0].audio_url)
    return (
        <>
            <div dir='rtl' className=' my-10  mx-4 lg:mx-20'>

                <div className='flex justify-center items-center gap-x-2'>


                    <h3 className={`text-5xl lg:text-8xl text-second ${Quran.className}`}> سورة {data?.name_translations?.ar}</h3>
                    <p className={`text-second ${main.className}`}>
                        ({
                            data.place === "Mecca" ? "مكية" : "مدنية"
                        } )
                    </p>
                </div>
                <div className={` flex justify-between text-second text-xl lg:text-2xl mt-3   ${main.className}`}>
                    <div className=' flex flex-col '>

                        <p className={`${number.className}`}>
                            <span  className={`${main.className} mb-1 mx-1`}>
                                رقم السورة
                            </span>
                            {data.number_of_surah}

                        </p>
                        <Link href={`/Quran/${data.number_of_surah - 1}`}>
                            <p
                                className="text-primary bg-second hover:bg-bg-zinc-900 px-5  py-1 rounded-pixel "
                            >
                                السورة السابقة
                            </p>
                        </Link>
                    </div>

                    <div className=' flex flex-col '>

                        <p className={`${number.className}`}>
                            <span className={`${main.className} mb-1 mx-1`} >
                                عدد الآيات
                            </span>
                            {data.number_of_ayah}
                        </p>
                        <Link href={`/Quran/${data.number_of_surah + 1}`}>
                            <p
                                className="text-primary bg-second hover:bg-zinc-900  px-3  py-1 rounded-pixel"
                            >
                                السورة التالية
                            </p>
                        </Link>
                    </div>
                </div>
                <div className=' w-full flex justify-center my-3'>
                    <p className={`${main.className} text-second  text-4xl `}>
                        الاستماع ❤
                    </p>
                </div>
                {
                    data?.recitations.map(item => <AudioPlayer key={`${item.audio_url + item.name + data.name_translations.ar}`} audio={item} />)
                }




                <SurahBox data={data} params={params.id} />
            </div>







        </>
    )
}


