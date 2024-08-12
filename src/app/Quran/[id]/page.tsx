import React from 'react'
import getSurah from '@/Api/getSurah'
import { Iparams, Surah } from '@/Interface/Interfaces'
import localFont from 'next/font/local'
const Quran = localFont({ src: '../../../../public/Fonts/sura.ttf' })//sura
const taha = localFont({ src: '../../../../public/Fonts/taha.ttf' })
const taha2 = localFont({ src: '../../../../public/Fonts/taha2.ttf' })
const taha3 = localFont({ src: '../../../../public/Fonts/taha3.ttf' })
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })

export default async function page({ params }: Iparams) {
    const data: Surah = await getSurah(params.id)
    return (
        <>
            <div dir='rtl' className=' my-10  mx-4 lg:mx-20'>

                <div className='flex justify-center'>

                    <h3 className={`text-5xl lg:text-8xl text-off_white ${Quran.className}`}> سورة {data?.name_translations?.ar}</h3>
                </div>
                <div className=" flex justify-between text-second text-lg mt-3 ">
                    <p>
                        <span className={`${taha2.className}  text-lg mx-1 mb-1`}>
                            رقم السورة
                        </span>
                        {data.number_of_surah}
                    </p>

                    <p className={`${taha3.className} mt-10 text-4xl text-white`}>
                        بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
                    </p>

                    <p>
                        <span className={`${taha2.className}  text-lg mx-1 mb-1`}>
                            عدد الآيات
                        </span>
                        {data.number_of_ayah}
                    </p>
                </div>
                <div className={`  text-white  text-3xl   text-center  mt-5  lg:mx-64 mx-4 border-second border p-3 rounded-3xl`}>
                    {
                        data?.verses?.map((item, index) => {
                            return <>
                            {
                                    index === 0 ? <> <p className={`${taha.className} text-center  inline `} >{item?.text.slice(39)}<div className='inline-flex justify-center text-second border-2 border-second rounded-full w-6 h-6 mt-2  mx-1 items-center'>

                                    <span className={`${number.className}  `}>{item?.number}</span>
                                </div></p> </>
                                        : <>
                                            <p className={`${taha.className} text-center inline `}>{item.text} <div className='inline-flex justify-center text-second border-2 border-second rounded-full w-6 h-6 mt-2  mx-1 items-center'>

                                                <span className={`${number.className}  `}>{item?.number}</span>
                                            </div></p>
                                        </>
                                }
                             </>
                        })
                    }
                </div>
            </div>
            {/* بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ  */}






        </>
    )
}


