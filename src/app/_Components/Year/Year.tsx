import timeSince from '@/helper/yearCalc';
import React from 'react'


export default function Year() {
    const conflictStartDate = timeSince(new Date('1948-05-14'));
    //   console.log(conflictStartDate.years);
    return (
        <div dir='rtl' className='      p-2 bg-white  text-center   w-full '>

            <p className='text-base text-primary font-bold '>

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
