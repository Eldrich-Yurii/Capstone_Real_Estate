import React from 'react'
import Icon from './Icon';

function Search() {
  return (
    <div className='absolute inset-x-0 top-16'>
          <h2 className="text-sm text-white py-2 px-2 font-semibold flex justify-center drop-shadow-md">Find A Home That Fits To You.</h2>
          <form className='flex justify-center drop-shadow-lg'>
            <input type="text" placeholder='Search Properties By: Location, Price or Income...' className='border-2 border-purple-900 p-3 rounded-bl-3xl h-12 w-96'/>
            <button className="btn font-semibold px-4 bg-purple-900 text-white rounded-tr-3xl hover:bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-2xl hover:text-black duration-500"><Icon /></button>
          </form>
    </div>
  )
}

export default Search;
