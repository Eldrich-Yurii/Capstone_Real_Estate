import React from 'react'
import EstateAgent from './img/Agent.jpg'

function Agent() {
  return (
    <div className='h-full p-16 bg-zinc-100 shadow-inner'>
      <div>
        <h1 className='text-3xl font-bold'>REAL ESTATE AGENT</h1>
      </div>
      <div className='pt-12 grid pb-12 grid-cols-2'>
          <div className='flex justify-center'>
            <img src={EstateAgent} alt="" className='shadow-2xl w-64 rounded-t-full '/>
          </div>
          <div className='flex justify-start items-end pr-36'>
            <p className='font-semibold text-lg'>
            Hi, my name is Jiel Torcuator, and I work with Winner Prime One Realty Company as your Property Finder Agent.
            I am registered with the DHUSD and a PRC-licensed salesperson. 
            We take care of numerous assets from Philippine developers come in several forms. North to South, low cost to high end, pre-selling to ready for occupancy, we have a wide range of properties.
            I've been helping families since 2019. Some of my clients are now living in the home they acquired.
            And some are waiting for their house to turn over.
            So, if you are looking for a property investment or a home you always dream of, you're in the right direction.
            I will be your matchmaker in your home.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Agent
