import React from 'react'
import Icon from './Icon';

function Search() {
  return (
    <div className='absolute inset-x-0 sm:top-16 md:50 lg:top-72'>
          <h2 className="text-xl text-white py-2 px-2 font-semibold flex justify-center drop-shadow-md sm:text-sm">Find A Home That Fits To You.</h2>
          <form className='flex justify-center drop-shadow-lg'>
            <input type="text" placeholder='You Can Search Properties By: Location, Property Type, or Income... ' className='border-2 border-purple-900 p-3 rounded-bl-3xl sm:w-50 sm:h-10 md:w-1/2 lg:w-1/2 lg:h-12'/>
            <button className="btn font-semibold px-4 bg-purple-900 text-white rounded-tr-3xl hover:bg-purple-600 hover:drop-shadow-xl hover:text-black"><Icon /></button>
          </form>
    </div>
  )
}

export default Search;
