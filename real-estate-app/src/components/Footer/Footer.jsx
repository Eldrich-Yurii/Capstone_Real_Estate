import React from 'react'
import Logo from './img/LOGO-NAME_WHITE.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'



function Footer() {
  return (
    <>
      <footer >
            <div className='grid bg-purple-900 pt-12 pb-10 text-lg gap-1  text-gray-300 md:lg:flex justify-around'>

            <div className=''>
              <div className=''>
                <a href="#home"><img src={Logo} alt="" className='w-24 md:lg:w-80 md:lg:mt-8'/></a>
              </div>
            </div>
            <div className=' border-r-2'>

            </div>
            <div className='pt-4'>
              <p className='text-lg font-bold text-white pb-2'>Useful Links</p>
              <ul>
                <li className='font-semibold hover:text-white pb-1'><a href="#home">Home</a></li>
                <li className='font-semibold hover:text-white pb-1'><a href="#properties">Properties</a></li>
                <li className='font-semibold hover:text-white pb-1'><a href="#developers">Developers</a></li>
                <li className='font-semibold hover:text-white pb-1'><a href="#faqs">FAQs</a></li>
              </ul>
            </div>
            <div className='pt-4'>
              <p className='text-lg font-bold pb-2 text-white'>Contact Information</p>
              <ul>
                <li className='font-semibold  pb-1'><FontAwesomeIcon icon={faPhone} className='pr-2'/>+63 9294550793</li>
                <li className='font-semibold hover:text-white pb-1'><a href="mailto:jieloutorcuator@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className='pr-2'/>jieloutorcuator@gmail.com</a></li>
              </ul>
            </div>
            <div className='pt-4'>
              <p className='text-lg font-bold pb-2 text-white'>Social Media</p>
              <ul className='flex gap-6  md:lg:justify-around text-xl'>
                <li className='hover:text-white'><a href="https://www.facebook.com/yourkeytoyourhome" target='_blank'><AiFillFacebook /></a></li>
                <li className='hover:text-white'><a href="https://www.instagram.com/yourkeytoyourhome/" target='_blank'><AiFillInstagram /></a></li>
                <li className='hover:text-white'><a href="https://www.linkedin.com/in/facebookadsjiel/" target='_blank'><AiFillLinkedin /></a></li>
              </ul>
            </div>
          </div>
        <div className=' bg-purple-900 p-3 flex justify-center'>
            <p className=' text-white'>&copy;  Copyright © 2023 - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
