import timeSince from '@/helper/yearCalc';
import React from 'react'


export default function Year() {
    const conflictStartDate = timeSince(new Date('1948-05-14'));
    //   console.log(conflictStartDate.years);
    return (
        <div dir='rtl' className='      p-2 bg-white  px-20 text-start  absolute bottom-0 w-full '>

            <p className='text-base text-primary font-bold font-ar'>

                مضى على احتلال
                فلسطين

                {
                    conflictStartDate.years
                }  و

                {
                    conflictStartDate.months
                } شهور
                و
                {
                    conflictStartDate.days
                } يوما
            </p>

        </div>
    )
}
