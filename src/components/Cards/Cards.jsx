import React from 'react'

function Cards() {
  return (
    <>
      <div className="m-10 drop-shadow-2xl relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 hover:shadow-2xl">
        <div className="w-56 h-72 bg-purple-200 text-gray-">
          <div className="flex flex-row justify-between">
          </div>
      </div>
        <div className="absolute bg-purple-400 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 group-hover:bg-purple-700">
          <span className="text-white font-bold text-sm pb-3">Locations areas...</span>
          <hr />
          <p className="text-neutral-800">
            <ul className='text-white'>
              <li>Sta. Maria</li>
              <li> Marilao</li>
              <li>Meycauayan and more...</li>
            </ul>
            </p>
        </div>  
      </div>
    </>
  )
}

export default Cards
