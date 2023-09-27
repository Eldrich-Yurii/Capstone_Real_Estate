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
    <div className='flex justify-around items-center bg-purple-100 h-48 drop-shadow-xl '>
      <div className=' drop-shadow-xl'>
          <img src={Apec} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Ayala} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Dmci} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Lumina} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Megaworld} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Raemulan} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Smdc} alt="" width={100} className='rounded-full'/>  
      </div>
      <div className=' drop-shadow-xl'>
          <img src={Solar} alt="" width={100} className='rounded-full'/>  
      </div>
    </div>
  )
}

export default Developers
