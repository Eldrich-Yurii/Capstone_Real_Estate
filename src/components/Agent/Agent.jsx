import React from 'react'
import EstateAgent from './img/Agent.jpg'

function Agent() {
  return (
    <div className='h-full md:lg:px-16 pt-16 bg-zinc-100 shadow-inner'>
      <div>
        <h1 className='text-3xl font-bold text-center'>REAL ESTATE <span className=' text-orange-500'>AGENT</span></h1>
      </div>
      <div className='pt-12 grid pb-12 md:lg:grid-cols-2 gap-8'>
          <div className='flex justify-center'>
            <div className='absolute -ml-48 md:lg:-ml-56 text-lg font-extrabold text-orange-600 leading-none'>
              <p>______</p>
              <p>______</p>
              <p>______</p>
            </div>
            <img src={EstateAgent} alt="" className='shadow-2xl w-64 rounded-t-full '/>
          <div className='absolute w-14 h-14 mt-[270px] ml-[240px] md:lg:w-14 md:lg:h-14 md:lg:mt-[370px] md:lg:ml-[245px] bg-orange-600 rounded-l-full'></div>
          </div>
          <div className='md:lg:pr-36'>
            <p className='font-semibold text-lg px-10 text-justify'>
            Hi, my name is Jiel Torcuator, and I work with Winner Prime One Realty Company as your Property Finder Agent.
            I am registered with the DHUSD and a PRC-licensed salesperson. 
            We take care of numerous assets from Philippine developers come in several forms. North to South, low cost to high end, pre-selling to ready for occupancy. We have a wide range of properties,
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
