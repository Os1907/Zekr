'use client'
import React, { useState } from 'react'
import { Iparams, Surah } from '@/Interface/Interfaces'
import localFont from 'next/font/local'

const main = localFont({ src: '../../../../public/Fonts/main.ttf' })
const taha = localFont({ src: '../../../../public/Fonts/taha.ttf' })
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })
const taha3 = localFont({ src: '../../../../public/Fonts/taha3.ttf' })
const quran = localFont({ src: '../../../../public/Fonts/New/arabic3.ttf' })

interface IsurahBox {
    data: Surah
    params: number
}

export default function SurahBox(props: IsurahBox) {
    const { data, params } = props
    const [value, setValue] = useState(25);
    const [color, setColor] = useState("#0d0d0d"); 

    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.valueAsNumber);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    return (
        <>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
                <label htmlFor="range-slider" className="text-primary font-medium text-2xl">
                    <span className={` ${main.className} text-second mx-2`}>  حجم الخط للقراءة  </span>
                </label>
                <input
                    id="range-slider"
                    type="range"
                    min="10"
                    max="100"
                    step={5}
                    value={value}
                    onChange={handleFontSizeChange}
                    className="w-1/2 border-0 h-1 bg-primary rounded-lg cursor-pointer accent-second focus-visible:border-0 hover:border-0"
                />
                <span className={` ${main.className} text-second mx-2 text-2xl`}>{value} </span>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-4">
                <label htmlFor="color-picker" className="text-primary font-medium">
                    <span className={` ${main.className} text-second mx-2`}> لون الخط</span>
                </label>
                <input
                    id="color-picker"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="cursor-pointer rounded-full bg-primary"
                />
            </div>

            <div style={{ fontSize: `${value}px`, color: color }} className={`${quran.className} text-center mt-3 lg:mt-8 lg:mx-32 border-zinc-800 border-y py-5 rounded-2xl`}
            
            >
                <div>
                {
                    params != 9 ? <p style={{ fontSize: `${value}px`, color: color }} className={` lg:my-10 text-center`}>
                        ﴿  بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ   ﴾
                    </p> : <></>
                }
            </div>
                {
                    data?.verses?.map((item, index) => (
                        <p key={index} className={` text-center inline-block my-3`}>
                            {index === 0 && params != 9 ? item?.text.slice(39) : item.text}
                            <span style={{ fontSize: `${value - 5}px` }} className={` text-second inline-block`}>
                                ﴿ {item?.number} ﴾
                            </span>
                        </p>
                    ))
                }
            </div>
        </>
    )
}
