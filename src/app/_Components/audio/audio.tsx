'use client';
import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local'

const hand = localFont({ src: '../../../../public/Fonts/hand.ttf' })
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
    //    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     audioRef.current.currentTime = event.target.value;
    //     setCurrentTime(event.target.value);
    // };
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

        
        <div className={` ${hand.className} w-full  mx-auto px-1 py-2   bg-second rounded-2xl my-2 `}>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                src={props.audio.audio_url}
            />

            <div className="flex items-center justify-between">

                <p className="text-primary font-bold">
                    {name}
                </p>
                <button
                    onClick={togglePlayPause}
                    className="text-white bg-primary hover:bg-[#121314]  px-5 lg:px-24 py-1 rounded-3xl focus:outline-none"
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
            className='w-full h-1 mt-4 bg-primary rounded-lg appearance-none cursor-pointer accent-white'/>
            <div className='flex justify-between items-center'>

                <p className="text-primary text-end mx-2">
                {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                </p>
                          <p className="text-primary text-end mx-2">
                     {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} ➤
                </p>

            </div>
        </div>
    );
}
