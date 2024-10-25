'use client';
import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local'

const main = localFont({ src: '../../../../public/Fonts/main.ttf' })
const number = localFont({ src: '../../../../public/Fonts/number.ttf' })
const basic = localFont({ src: '../../../../public/Fonts/New/arabic.ttf' })
interface IAudio{
    audio:{ 
        name: string,
        audio_url:string
    };
   
}
export default function AudioPlayer(props:IAudio) {
    const audioRef = useRef<any>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [name,setName]=useState<string>()
    const togglePlayPause = ()=>{
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
   

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        audioRef.current.currentTime = e.target.valueAsNumber;
        setCurrentTime(e.target.valueAsNumber);
    };
   
useEffect(()=> {
    if(props.audio.name === "Mishari Rashid al-`Afasy"){
        setName("مشاري راشد العفاسي ")
   } else if(props.audio.name === "Abdur-Rahman as-Sudais"){
        setName("عبد الرحمن السديس")

    }else{
        setName("سعد الغامدي")
    }
} ,[])
    return (

        
        <div className={ isPlaying ?` ${ basic.className} w-full  mx-auto px-5 py-2   bg-second rounded-pixel my-2 wdithh ` : `${ main.className} w-3/4 lg:w-1/2   mx-auto px-5 py-2   bg-second rounded-pixel my-2 `}>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                src={props.audio.audio_url}
            />

            <div className="flex items-center justify-between">

                <p className="text-primary font-medium text-2xl">
                    {name}
                </p>
                <button
                    onClick={togglePlayPause}
                    className="text-second bg-primary   px-5 lg:px-24 py-1 rounded-3xl focus:outline-none"
                >
                    {isPlaying ? 'إيقاف' : 'إستماع'}
                </button>
                </div>

            <input 
            type='range'
            min="0"
            value={currentTime}
            max={duration }
            onChange={handleSeek}
            className={ isPlaying ? 'w-full h-1 mt-4 bg-primary rounded-lg appearance-none cursor-pointer accent-primary2 wdithh ' :  'hidden'}/>
            <div className='flex justify-between items-center'>

                <p className={ isPlaying ?`text-primary text-end mx-2 ${number.className} wdithh ` : "hidden"}>
                {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                </p>
                          <p className={isPlaying ?`text-primary text-end mx-2 ${number.className} wdithh `  : "hidden"}>
                     {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} ➤
                </p>

            </div>
        </div>
    );
}
