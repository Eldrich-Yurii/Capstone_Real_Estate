import React from 'react'
import Bg from './img/bg.jpeg';

function Step() {
  return (
    <div className='drop-shadow-2xl'>
      <div>
        <img src={Bg} alt="" className='absolute w-full h-44 object-cover '/>
    </div>
        <div className='relative mix-blend-overlay bg-purple-900'>
          <p className=' flex justify-center w-full items-center text-sm h-24 text-white font-extrabold shadow-2xl md:lg:text-6xl md:lg:h-44'>INQUIRE. &#160;&#160;&#160;&#160;&#160;SITE VISIT. &#160;&#160;&#160;&#160;&#160;RESERVE.</p>
        </div>
    </div>
  )
}

export default Step
