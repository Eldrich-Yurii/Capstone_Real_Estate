import React from 'react'
import Quotepic from './img/quotepic.jpg'

function Quote2() {
  return (
    
<>
<div className=' relative -z-50 h-[780px] md:lg:h-screen bg-white drop-shadow-lg'>
  <img src={Quotepic} alt="" className='absolute -z-10 grayscale opacity-10 h-[780px] object-cover md:lg:w-full md:lg:h-screen'/>
    <div className=' grid md:lg:mb-36 md:lg:mx-20 md:lg:px-36 md:lg:grid-cols-2'>
      <div className=''>
        <h1 className='md:lg:pt-10 text-9xl text-orange-500 pl-16 md:lg:pl-0 '>
            "
        </h1>
        <p className='mx-auto pl-5 md:lg:mx-0 md:lg:pl-0 text-2xl w-96 md:lg:w-72 font-semibold'>
        Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.
        </p>
      </div>
      <div className=' mt-10 md:lg:mt-32 md:lg:mx-24 md:lg:w-full flex justify-center'>
        <img src={Quotepic} alt="" className='w-96 h-80 md:lg:w-[450px] md:lg:h-96 rounded-tr-[130px] rounded-bl-[130px]'/>
        <div className=' z-50 absolute w-14 h-14 mt-[250px] md:lg:mt-[310px] ml-[380px] md:lg:ml-[450px] bg-orange-600 '></div> 
      </div>
    </div>
</div>
</>

  )
}

export default Quote2
