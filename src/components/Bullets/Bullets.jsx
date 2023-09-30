import React from 'react'
import House from './img/House.jpg'
import { AiFillCheckCircle} from 'react-icons/ai'
function Bullets() {
  return (
    <div className="h-96 flex justify-center">
      <div className='grid grid-cols-2  gap-10'>
        <div className=' cols-span-2'>
            <h2 className='font-bold text-4xl pt-20'>Why own a Property</h2>
          <ul className=' text-xl pt-5 leading-8 pl-8'>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />Increasing Net Worth</li>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />Can convert into Assets</li>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />Can help you have a stable Cashflow</li>
            <li className='flex items-center gap-3'><AiFillCheckCircle className='text-green-600' />100% Good Investment</li>
          </ul>
        </div>
        <div className='flex justify-end pt-10 '>
          <img src={House} alt="" className='w-[500px]'/>
        </div>
      </div>  
    </div>
  )
}

export default Bullets
