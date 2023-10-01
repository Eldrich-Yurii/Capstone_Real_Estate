import React from 'react'
import Bg2 from './img/bg2.jpg'

function Quote() {
  return (
    <div className=''>
        <img src={Bg2} alt="" className='absolute h-24 md:lg:h-36 w-full object-cover  grayscale opacity-30'/>
      <span className='text-2xl text-white font-bold h-24 drop-shadow-lg md:lg:text-5xl md:lg:h-36 bg-purple-900 mix-blend-overlay flex justify-center items-center'>
        <del className='text-white font-extrabold'>
        STOP RENTING.</del> &#160;&#160;&#160;&#160;&#160;&#160;<u className='font-extrabold'>START OWNING.</u> 
      </span>
    </div>
  )
}

export default Quote;
