'use client'
import React, { useState } from 'react'
import { Iparams, Surah } from '@/Interface/Interfaces'
import localFont from 'next/font/local'

const hand = localFont({ src: '../../../../public/Fonts/hand.ttf' })
const taha = localFont({ src: '../../../../public/Fonts/taha.ttf' })
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })
const taha3 = localFont({ src: '../../../../public/Fonts/taha3.ttf' })

interface IsurahBox {
    data: Surah
    params: number
}

export default function SurahBox(props: IsurahBox) {
    const { data, params } = props
    const [value, setValue] = useState(50);
    const [color, setColor] = useState("#ffffff"); 

    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.valueAsNumber);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    return (
        <>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
                <label htmlFor="range-slider" className="text-primary font-medium">
                    <span className={` ${hand.className} text-second mx-2`}>  حجم الخط للقراءة  </span>
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
                <span className={` ${hand.className} text-second mx-2`}>{value} </span>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-4">
                <label htmlFor="color-picker" className="text-primary font-medium">
                    <span className={` ${hand.className} text-second mx-2`}> لون الخط</span>
                </label>
                <input
                    id="color-picker"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="cursor-pointer rounded-full bg-primary"
                />
            </div>

            <div style={{ fontSize: `${value}px`, color: color }} className={`text-center mt-3 lg:mt-8 lg:mx-32 border-second border-y py-5 rounded-2xl`}
            
            >
                <div>
                {
                    params != 9 ? <p style={{ fontSize: `${value}px`, color: color }} className={`${taha3.className} lg:my-10 text-center`}>
                        ﴿  بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ   ﴾
                    </p> : <></>
                }
            </div>
                {
                    data?.verses?.map((item, index) => (
                        <p key={index} className={`${taha.className} text-center inline`}>
                            {index === 0 && params != 9 ? item?.text.slice(39) : item.text}
                            <span style={{ fontSize: `${value - 5}px` }} className={`${number.className} text-second mx-2`}>
                                ﴿ {item?.number} ﴾
                            </span>
                        </p>
                    ))
                }
            </div>
        </>
    )
}
