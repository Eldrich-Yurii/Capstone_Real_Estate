import React from 'react'
import House from './img/House.jpg'
import { AiFillCheckCircle} from 'react-icons/ai'
function Bullets() {
  return (
    <div className="h-96 flex justify-center">
      <div className='grid grid-cols-2  gap-10'>
        <div className='flex justify-end  '>
          <img src={House} alt="" className='w-[550px]'/>
        </div>
        <div>
            <h2 className='font-bold text-4xl text-center pt-20'>Why own a Property?</h2>
          <ul className=' text-xl pt-8 leading-8 pl-32'>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />Increasing Net Worth</li>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />Can convert into Assets</li>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />Can help you have a stable Cashflow</li>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />100% Good Investment</li>
          </ul>
          <div className='ml-[500px] mt-[30px] text-lg font-extrabold text-orange-600 leading-none'>
              <p>______</p>
              <p>______</p>
              <p>______</p>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Bullets
