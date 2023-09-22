import React from 'react'


function Search() {
  return (
    <div className='absolute inset-x-0 top-72'>
          <h2 className="text-xl text-white py-2 font-semibold leading-7 text-gray-900 flex justify-center">Find Home That Fits To You.</h2>
          <form className='flex justify-center'>
            <input type="text" placeholder='search' className='border-2  border-blue-300 p-3 w-1/2 '>
                
            </input>
            <button className="btn px-2 bg-blue-300">Submit</button>
          </form>
    </div>
  )
}

export default Search;
