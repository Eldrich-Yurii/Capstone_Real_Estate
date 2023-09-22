import React from 'react'
import './Search.css';
import Image1 from './img/bg1.jpg'


function Search() {
  return (
    <div>
      <img src={Image1} alt="" className='image'/>
        <div className='mt-6 search_bar'>
          <h2 className="text-xl font-semibold leading-7 text-gray-900 title">Find Home That Fits To You.</h2>
          <form className='form'>
            <input type="text" placeholder='search' className='border-2  border-blue-300 p-3 w-1/2 search_bar'>
                
            </input>
            <button className="btn px-2 bg-blue-300">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Search;
