import IP from '@/Api/Ip'
import slaah from '@/Api/Slaah'
import { SalahTime } from '@/Interface/Interfaces';
import React from 'react'



async function Slah() {
    let { location } = await IP()
    const fullDate = new Date();
    let year = fullDate.getFullYear();
    let month = fullDate.getMonth()
    let day = fullDate.getDate();
    let slahInfo = await slaah(`${day}-${month + 1}-${year}`, location.city, location.country.name)
    let timeInfo :SalahTime = slahInfo?.data.timings
    let slahTime  = Object.entries(timeInfo)

    return <>
        <div className='bg-second rounded-xl pt-3 pb-5 '>
            <div className='flex flex-col lg:flex-row items-center  justify-center gap-y-2 gap-x-4 mb-5 '>
                <div className='flex  w-full items-center justify-center'>

                    <p className='text-primary text-4xl font-medium  '>
                        مواقيت الصلاة
                    </p>
                </div>
                <div className='flex w-full justify-center '>
                    <p className='text-primary text-2xl font-semibold '>
                        <span className='mx-1'>

                            {
                                Number(slahInfo?.data.date.hijri.day) + 1
                            }
                        </span>
                        من شهر 
                        { slahInfo?.data.date.hijri.month.ar }
                        <span className='mx-1'>

                            {
                                slahInfo?.data.date.hijri.year
                            }
                        </span>
                    </p>
                </div>

            </div>
            <div className='grid grid-cols-3 lg:grid-cols-6 mx-4 lg:mx-20 gap-5  '>
                {slahTime.map(([salah, timeSalah]) => {
                    return (salah === 'Fajr' || salah === 'Sunrise' || salah === 'Dhuhr' || salah === 'Asr' || salah === 'Maghrib' || salah === 'Isha') ? (
                        <div className="col-span-1 bg-primary text-off_white rounded-xl p-3 flex flex-col justify-center items-center " key={salah}>
                            <p className=' text-2xl lg:text-3xl '>
                                {salah === 'Fajr' ? ' الفجر' : salah === 'Sunrise' ? 'الشروق' : salah === 'Dhuhr' ? ' الظهر' : salah === 'Asr' ? ' العصر' : salah === 'Maghrib' ? ' المغرب' : salah === 'Isha' ? ' العشاء' : null}
                            </p>
                            <p className=' text-lg lg:text-xl font-semibold'>

                                {
                                    Number(timeSalah.slice(0, 2)) > 12 ? ` ${timeSalah.slice(3, 5)} :${Number(timeSalah.slice(0, 2)) - 12}   ` : `${timeSalah}`

                                }

                                <span className='mx-1 block lg:inline'>

                                    {Number(timeSalah.slice(0, 2)) < 12 ? "صباحاً" : "مساءاً"}
                                </span>
                            </p>
                        </div>
                    ) : null;
                })}


            </div>
        </div>











    </>
}

export default Slah