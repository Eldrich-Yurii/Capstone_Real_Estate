import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Cards() {
  return (
    <>
    <div>
      <h1 className='pt-7 pl-5 text-2xl md:lg:text-3xl font-bold'>Popular Locations:</h1>
      <div className=' mx-14 md:lg:flex justify-center'>
          <div className="m-10 drop-shadow-2xl group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-96 w-80  rounded-2xl hover:duration-700 hover:shadow-2xl">
            <div className="w-80 h-96 bg-purple-200 text-gray-100 pt-10">
              <img src="" alt="" />
              <div className=' flex justify-center pt-5 group-hover:scale-75 duration-500'>
                
              </div>
              <span className='text-black text-xl font-bold flex justify-center items-center h-72 pt-4'>BULACAN</span>
            </div>
            <div className="absolute bg-purple-600 -bottom-24 w-80 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 group-hover:bg-purple-900">
              <span className="text-white font-bold text-md pb-3">See Locations area...</span>
                    <hr/>
                <ul className='text-white font-bold'>
                  <li>Sta. Maria</li>
                  <li> Marilao</li>
                  <li>Meycauayan and more...</li>
                </ul> 
            </div>  
          </div>
          <div className="m-10 drop-shadow-2xl group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-96 w-80  rounded-2xl hover:duration-700 hover:shadow-2xl">
            <div className="w-80 h-96 bg-purple-200 text-gray-100 pt-10">
              <div className=' flex justify-center pt-5'>

              </div>
              <span className='text-black text-xl font-bold flex justify-center items-center h-72  pt-4'>METRO MANILA</span>
            </div>
            <div className="absolute bg-purple-600 -bottom-24 w-80 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 group-hover:bg-purple-900">
              <span className="text-white font-bold text-md pb-3">Locations areas...</span>
                      <hr />
                  <p className="text-neutral-800">
                    <ul className='text-white font-bold'>
                      <li>Quezon City</li>
                      <li> Pasay</li>
                      <li>Taguig and more...</li>
                    </ul>
                  </p>
            </div>  
          </div>
          <div className="m-10 drop-shadow-2xl group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-96 w-80  rounded-2xl hover:duration-700 hover:shadow-2xl">
            <div className="w-80 h-96 bg-purple-200 text-gray-100 pt-10">
              <div className=' flex justify-center pt-5'>

              </div>
              <span className='text-black text-xl font-bold flex justify-center items-center h-72 pt-4'>CAVITE</span>
            </div>
            <div className="absolute bg-purple-600 -bottom-24 w-80 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 group-hover:bg-purple-900">
              <span className="text-white font-bold text-md pb-3">Locations areas...</span>
                        <hr />
                  <p className="text-neutral-800">
                    <ul className='text-white font-bold'>
                      <li>Imus</li>
                      <li> Dasmariñas</li>
                      <li>Naic and more...</li>
                    </ul>
                  </p>
            </div>  
          </div>
      </div>
    </div>
    </>
  )
}

export default Cards
