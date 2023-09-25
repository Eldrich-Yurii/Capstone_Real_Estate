import React from 'react'
import Icon from './Icon';


function Search() {
  return (
    <div className='absolute inset-x-0 top-16 md:top-40 lg:top-72'>
          <h2 className="text-lg md:text-xl lg:text-3xl text-white py-2 px-2 font-semibold flex justify-center drop-shadow-md">Find A Home That Fits To You.</h2>
          <form className='flex justify-center drop-shadow-lg'>
            <input type="text" placeholder='Search Properties By: Location, Price or Income...' className='border-2 border-purple-900 p-3 rounded-bl-3xl h-12 w-96 md:lg:w-1/2'/>
            <button className="btn px-4 bg-purple-900 text-white rounded-tr-3xl hover:bg-purple-600 hover:shadow-2xl hover:text-gray-900 duration-500"><Icon /></button>
          </form>
    </div>
  )
}

export default Search;
