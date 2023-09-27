import React from 'react'
import Quotepic from './img/quotepic.jpg'

function Quote2() {
  return (
    

    <div className='grid grid-cols-1 md:lg:mb-36 md:lg:mx-20 md:lg:px-36 md:lg:grid-cols-2'>
      <div>
        <h1 className='pt-10 text-9xl text-purple-800 '>
            "
        </h1>
        <p className='text-2xl w-72 font-semibold'>
        Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.
        </p>
      </div>
      <div className='mt-32 mx-24 bg-purple-500 w-full h-96 rounded-tr-[150px] rounded-bl-[150px]'>
        {/* <div className=' -z-10 absolute md:lg:-mt-6 mx-[250px] bg-purple-500 w-56 h-72 rounded-tr-[150px] rounded-bl-[150px]'/>
        <div className=' -z-10 absolute md:lg:mt-[123px] -mx-[25px] bg-purple-500 w-56 h-72 rounded-tr-[150px] rounded-bl-[150px]'/> */}
        <img src={Quotepic} alt="" className='w-full h-96 rounded-tr-[130px] rounded-bl-[130px]'/> 
      </div>
    </div>

  )
}

export default Quote2
