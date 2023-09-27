import React from 'react'
import Apec from './img/apec.jpg';
import Ayala from './img/ayala.jpg';
import Dmci from './img/dmci.png';
import Lumina from './img/lumina.jpg';
import Megaworld from './img/megaworld.jpg';
import Raemulan from './img/Raemulan.png';
import Smdc from './img/smdc.jpg';
import Solar from './img/solar.jpg';


function Developers() {
  return (
    <div>
        <div>
            <h1 className=' bg-purple-100 pt-7 pl-5 text-2xl md:lg:text-3xl font-bold text-gray-900'>Developers</h1>
        </div>
        <div className='grid grid-cols-4 gap-3 p-4 w-full h-60 bg-purple-100 shadow-xl md:lg:flex justify-around items-center md:lg:h-48  '>
            <div className=' drop-shadow-xl'>
                <img src={Apec} alt=""  className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>APEC HOMES</p>  
                </div>
            </div>
            <div className=' drop-shadow-xl'>
                <img src={Ayala} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>AYALA LAND</p>  
                </div>
            </div>
            <div className=' drop-shadow-xl'>
                <img src={Dmci} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>DMCI</p>  
                </div>
            </div>
            <div className=' drop-shadow-xl'>
                <img src={Lumina} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>LUMINA</p>  
                </div>
            </div>
            <div className=' drop-shadow-xl'>
                <img src={Megaworld} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>MEGAWORLD</p>  
                </div>
            </div>
            <div className=' drop-shadow-xl'>
                <img src={Raemulan} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>RAEMULAN</p>  
                </div>
            </div>
            <div className=' drop-shadow-xl'>
                <img src={Smdc} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>SMDC</p>  
                </div>
           </div>
            <div className=' drop-shadow-xl'>
                <img src={Solar} alt="" className='p-2 w-24 md:lg:w-28 rounded-full hover:scale-110 duration-500'/>  
                <div className='flex justify-center pt-2'> 
                    <p className='text-sm font-semibold'>SOLAR RESOURCE</p>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developers
