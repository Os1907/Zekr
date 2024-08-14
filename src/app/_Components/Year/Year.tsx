import timeSince from '@/helper/yearCalc';
import React from 'react'


export default function Year() {
    const conflictStartDate = timeSince(new Date('1948-05-14'));
    return (
        <div dir='rtl' className='      p-2 bg-second  text-center  w-3/4  lg:w-1/2  mx-auto rounded-pixel '>

            <p >

                مضى على احتلال
                فلسطين

                {
                    conflictStartDate.years
                }  عام و

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
