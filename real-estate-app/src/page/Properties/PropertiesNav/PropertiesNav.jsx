import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../img/LOGO-NAME_WHITE.svg'



const PropertiesNav = () => {
  return (
    <>
       <div className=" p-5  flex bg-purple-600 lg:flex-1">
            <Link to="/" className="-m-3 p-1.5"> <span className="sr-only">Your Company</span>
              <img src={LOGO} alt="" width={60} className='drop-shadow-md hover:drop-shadow-xl md:w-16 lg:w-20'/>
            </Link>
          </div>
    </>
  )
}

export default PropertiesNav
