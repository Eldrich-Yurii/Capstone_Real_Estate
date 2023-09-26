import React from 'react'

function Footer() {
  return (
    <>
      <footer className='flex justify-around bg-purple-900 pt-14 pb-14  text-white'>
        <div className=''>
          <div>
            <h1>LOGO</h1>
          </div>
          <p>&copy;  Copyright © 2023 - All Rights Reserved.</p>
        </div>
        <div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Properties</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Real Estate Agent</a></li>
          </ul>
        </div>
        <div>
          <p>Contact Information</p>
          <ul>
            <li><a href="">number</a></li>
            <li><a href="">email</a></li>
          </ul>
        </div>
        <div>
          <p>Social Media</p>
          <ul className='flex gap-3'>
            <li><a href="">fb</a></li>
            <li><a href="">Ig</a></li>
            <li><a href="">li</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
