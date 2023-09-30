import React from 'react'
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
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
const Card = () => {
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
    ]

    var settings = {
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }

  return (
    <>
    <div className='pb-3 mx-auto w-11/12'>
      <Slider {...settings}  className='drop-shadow-lg'>
              {data.map ((item) => {
                return (
                  
                    <div className='h-72 p-2 pb-4' key={item.id}>
                      <div className='bg-purple-200 '>
                        <img src={item.img} alt="/" className='w-[500px] h-56 cursor-pointer hover:scale-105 ease-in-out duration-500'/>
                          <div>
                            <h2 className='p-2 font-bold'>{item.desc}</h2>
                          </div>
                        </div>
                    </div>
                )
              })}
        </Slider>
    </div>
    </>
  )
}

export default Card