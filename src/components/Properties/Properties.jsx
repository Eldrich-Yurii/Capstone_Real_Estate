import React from 'react'
import Card from './Card'

function Properties() {
  return (
    <>
    <div className='pt-4 h-[360px] md:lg:pt-4 md:lg:h-[450px]  bg-violet-100'>
      <h1 className='text-gray-900 mb-3 md:lg:pt-7 md:lg:pb-5 text-2xl md:lg:text-3xl font-bold text-center'>Featured Properties</h1>  
      <div className='border-b-2 border-purple-400 rounded-xl mb-3 mx-7 md:lg:mx-16 md:lg:w-[76.5rem]'/>
      <div>
        <Card />
      </div>
    </div>
    </>
  )
}

export default Properties
