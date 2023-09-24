import React from 'react'

function Cards() {
  return (
    <>
      <div className="m-10 drop-shadow-2xl relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 hover:shadow-2xl">
        <div className="w-56 h-72 bg-gray-50 text-gray-">
          <div className="flex flex-row justify-between">
          
          </div>
      </div>
        <div className="absolute bg-purple-300 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 hover:bg-purple-400">
          <span className="text-whote font-bold text-sm">Specific Locations...</span>
          <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
          <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>  
      </div>
    </>
  )
}

export default Cards
