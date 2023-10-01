import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bulacan from './img/bulacan.png';
import Manila from './img/metro_manila.png';
import Cavite from './img/cavite.png';

function Cards() {
  return (
    <>
    <div id='properties'>
      <h1 className=' pt-10 text-2xl text-gray-900 md:lg:text-3xl font-bold text-center'>Popular Locations</h1>
      <div className='mt-8 mb-8 mx-10 w-[405px] border-b-2 border-purple-400 rounded-xl md:lg:mt-10 md:lg:mx-16 md:lg:w-11/12'/>
      <div className='pb-7 mx-14 md:lg:flex justify-center gap-10'>
          <div className="w-full mt-5 ml-1 drop-shadow-2xl group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 md:lg:h-72 md:lg:w-80 hover:duration-700 hover:shadow-2xl">
            <div className="w-full bg-purple-200 text-gray-100 md:lg:h-72 md:lg:w-80">
              <img src={Bulacan} alt=""  className='absolute w-full'/>
                
              
              <span className='relative text-white text-xl font-bold flex justify-center pt-5 h-72'>BULACAN</span>
            </div>
            <div className="w-full absolute bg-purple-500 opacity-90 -bottom-36 md:lg:w-80 p-3 flex flex-col gap-1 group-hover:opacity-100 group-hover:-bottom-0 group-hover:duration-600 duration-500 group-hover:bg-purple-900">
              <span className="text-white font-bold text-md pb-3">See Locations area...</span>
                    <hr/>
                <ul className='text-gray-200 font-bold'>
                  <li className='hover:text-white'>Sta. Maria</li>
                  <li className='hover:text-white'> Marilao</li>
                  <li className='hover:text-white'> Pandi</li>
                  <li className='hover:text-white'> Baliuag</li>
                  <li className='hover:text-white'>Meycauayan</li>
                </ul> 
            </div>  
          </div>
          <div className="w-full mt-5 ml-1 drop-shadow-2xl group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 md:lg:h-72 md:lg:w-80 hover:duration-700 hover:shadow-2xl">
            <div className="w-full bg-purple-200 text-gray-100 md:lg:h-72 md:lg:w-80 ">
              <div className=' flex justify-center'>
              <img src={Manila} alt=""  className='absolute w-full'/>
              </div>
              <span className='relative text-white text-xl font-bold flex justify-center pt-5 h-72 '>METRO MANILA</span>
            </div>
            <div className="w-full absolute bg-purple-500 opacity-90 -bottom-[120px] md:lg:w-80 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:opacity-100 group-hover:duration-600 duration-500 group-hover:bg-purple-900">
              <span className="text-white font-bold text-md pb-3">See Locations areas...</span>
                      <hr />
                    <ul className='text-gray-200 font-bold'>
                      <li className='hover:text-white'>Quezon City</li>
                      <li className='hover:text-white'> Pasay</li>
                      <li className='hover:text-white'>Taguig</li>
                      <li className='hover:text-white'>Makati</li>
                    </ul>
                  
            </div>  
          </div>
          <div className="w-full mt-5 ml-1 mb-10 drop-shadow-2xl group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 md:lg:h-72 md:lg:w-80 hover:duration-700 hover:shadow-2xl">
            <div className="w-full bg-purple-200 text-gray-100 md:lg:h-72 md:lg:w-80">
              <div className=' flex justify-center '>
              <img src={Cavite} alt=""  className='absolute w-full'/>
              </div>
              <span className='relative text-white text-xl font-bold flex justify-center pt-5 h-72'>CAVITE</span>
            </div>
            <div className="w-full absolute bg-purple-500 opacity-90 -bottom-24 md:lg:w-80 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:opacity-100 group-hover:duration-600 duration-500 group-hover:bg-purple-900">
              <span className="text-white font-bold text-md pb-3">See Locations areas...</span>
                        <hr />
                  <p className="text-neutral-800">
                    <ul className='text-gray-200 font-bold'>
                      <li className='hover:text-white'>Imus</li>
                      <li className='hover:text-white'> Dasmariñas</li>
                      <li className='hover:text-white'>Naic</li>
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
