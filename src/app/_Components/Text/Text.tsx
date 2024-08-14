import React from 'react'
interface Iprop{
    item:{
        content: string;
        description: string;
        count: string;
    }
}

export default function Text({item}:Iprop) {

  
  return (
    <>
    
    <div className="flex flex-col items-center my-3 text-second primary mr-5 ">
            
            <p className=" mx-1 lg:mx-3 text-3xl lg:text-4xl my-2">{item?.content}</p>
            {item?.description ?<div className='bg-second px-1 lg:px-3 rounded-full my-1 lg:my-4'>
              <p className='text-off_white text-sm lg:text-lg p-1'>{item?.description}</p>
            </div> : null
            
            
            }
          </div>
    
    </>
  )
}
