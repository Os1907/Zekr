import React from 'react'
import Item from '../_Components/Item/Item'
import prayers from '@/helper/prayer'

export default function page() {
console.log(prayers)

  return (
    <>
    
    {/* <Item/> */}
    <div dir='rtl' >
     <h2 className='text-primary text-center text-5xl py-10 font-bold'>
      {
        prayers.title
      }
     </h2>
     {
      prayers.items.map((item)=>{
        return <>
        
     <div className='bg- primary p-3 shadow-xl mx-4 lg:mx-20 rounded-xl mt-2 font-ar text-off_white pr-10 text-center font-bold'>
      <div className='bg-primary rounded-md'>

      <p className='text-2xl lg:mr-10 text-start inline'>
      {item.name}
      </p>
      </div>
    {
      item.item.map((item)=>{
        return <>
        <div className='my-3 '>

       
        <div className='flex flex-col justify-center items-center gap-x-2 bg-primary rounded-md py-2'>

        <p className='text-2xl mr-10 font-ar'>{item.start}</p>
        <h3 className='text-4xl my-2  font-ar'>
     {
      item.prayer
     }
      </h3>
      <p className='text-2xl mr-10 '>
      {
      item.reference
     }
      </p> 
        </div>
      </div>
        </> 
      })
    }
     

     </div>
        </>
      })
     }

    </div>
    
    
    
    </>
  )
}
