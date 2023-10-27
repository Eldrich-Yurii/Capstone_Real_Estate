import React from 'react'
import { Link } from 'react-router-dom'
import PropertiesNav from './PropertiesNav/PropertiesNav'
import Slider from "react-slick";
import Image1 from './img/img1.jpg' 
import Image2 from './img/img2.jpg' 
import Image3 from './img/img3.jpg' 
import Image4 from './img/img4.jpg' 
import Image5 from './img/img5.jpg' 
import Image6 from './img/img6.jpg' 
import Image7 from './img/img7.jpg' 
import Image8 from './img/img8.jpg' 
import Image9 from './img/img9.jpg' 
import Image10 from './img/img10.jpg' 

const Properties = () => {
  const data = [
    {
      id : 1,
      img : Image1,
      desc : "House & Lot"
    },
    {
      id : 2,
      img : Image2,
      desc : "House & Lot"
    },
    {
      id : 3,
      img : Image3,
      desc : "House & Lot"
    },
    {
      id : 4,
      img : Image4,
      desc : "House & Lot"
    },
    {
      id : 5,
      img : Image5,
      desc : "House & Lot"
    },
    {
      id : 6,
      img : Image6,
      desc : "House & Lot"
    },
    {
      id : 7,
      img : Image7,
      desc : "House & Lot"
    },
    {
      id : 8,
      img : Image8,
      desc : "House & Lot"
    },
    {
      id : 9,
      img : Image9,
      desc : "House & Lot"
    },
    {
      id : 10,
      img : Image10,
      desc : "House & Lot"
    },
    {
      id : 11,
      img : Image1,
      desc : "House & Lot"
    },
    {
      id : 12,
      img : Image2,
      desc : "House & Lot"
    },
    {
      id : 13,
      img : Image3,
      desc : "House & Lot"
    },
    {
      id : 14,
      img : Image4,
      desc : "House & Lot"
    },
    {
      id : 15,
      img : Image5,
      desc : "House & Lot"
    },
    {
      id : 16,
      img : Image6,
      desc : "House & Lot"
    },
    {
      id : 17,
      img : Image7,
      desc : "House & Lot"
    },
    {
      id : 18,
      img : Image8,
      desc : "House & Lot"
    },
    {
      id : 19,
      img : Image9,
      desc : "House & Lot"
    },
    {
      id : 20,
      img : Image10,
      desc : "House & Lot"
    },
    {
      id : 21,
      img : Image8,
      desc : "House & Lot"
    },
    {
      id : 22,
      img : Image9,
      desc : "House & Lot"
    },
    {
      id : 23,
      img : Image10,
      desc : "House & Lot"
    },
    {
      id : 24,
      img : Image9,
      desc : "House & Lot"
    },
  ]
  return (
    <>
     <div>
        <PropertiesNav />
        <div className='p-8 grid grid-cols-3  '>
              {data.map ((item) => {
                return (
                    <div className=' h-60 pt-2 p-1 md:lg:h-72 md:lg:p-2 md:lg:pb-4' key={item.id}>
                      <div className='bg-white'>
                        <img src={item.img} alt="/" className='w-[500px] h-48 md:lg:h-56 cursor-pointer hover:scale-105 ease-in-out duration-500'/>
                          <div>
                            <h2 className='p-2 font-bold'>{item.desc}</h2>
                          </div>
                        </div>
                    </div>
                )
              })}
       </div>
     </div>
    </>
  )
}

export default Properties
