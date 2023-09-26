import React from 'react'

function Inquire() {
  return (
    <div className=' flex justify-center grid-cols-6'>
      <form action="" className='bg-white rounded-xl p-6 w-full m-5 border-2 drop-shadow-lg md:lg:w-1/2'>
        
        <h2 className=' text-2xl font-bold pb-3'>Inquire Now!</h2>
        
        <div>
          <div className='font-semibold pb-1'>
              <label htmlFor="name">Full Name</label>
          </div>
          <div className=''>
            <input 
            type='text' 
            name='' id="" 
            placeholder="Enter your Fulll Name"
            className='w-full h-10 border-2 border-purple-700 p-2 rounded-lg'
            />  
          </div>
        </div>
        <div className=' grid grid-cols-2 pt-1 gap-4'>
          <div className='pt-3 pb-1'>
              <label htmlFor="age" className='font-semibold'>Age</label>
          <div className='pt-1'>
            <input 
            type='text' 
            name='' 
            id="" 
            placeholder="Enter your Age"  
            className='w-full h-10 border-2 border-purple-700 p-2 rounded-lg'
            />
          </div>
          </div>
          <div className='pt-3 pb-1 font-semibold'>  
              <label htmlFor="number">Contact Number</label>
          <div className='pt-1'>
              <input 
              type='text' 
              name='' 
              id="" 
              placeholder="Enter your Contact Number"  
              className='w-full h-10 border-2 border-purple-700 p-2 rounded-lg'
              />
          </div>  
          </div>
        </div>
        <div className="">
            <div className='pt-3 pb-1 font-semibold'>
              <label htmlFor="name">Email</label>
            </div>
            <div>
              <input 
              type='email' 
              name='' 
              id="" 
              placeholder="Ex. yourname@gmail.com"
              className='w-full h-10 border-2 border-purple-700 p-2 rounded-lg'
              />
            </div>
        </div>
        <hr />
        <div className=' grid grid-cols-2 pt-1 gap-4'>
          <div className='pt-3 pb-1'>
              <label htmlFor="location" className='font-semibold'>Location of Property</label>
          <div className='pt-1'>
              <select
                      id="location"
                      name="location"
                      className="w-full h-10 border-2 border-purple-700 p-2 rounded-lg text-gray-500"
                      >
                      <option>Select a Location...</option>
                      <option>Bulacan</option>
                      <option>Metro Manila</option>
                      <option>Cavite</option>
              </select>
          </div>
          </div>
          <div className='pt-3 pb-1 font-semibold'>  
              <label htmlFor="number">Monthly Salary</label>
          <div className='pt-1'>
              <input 
              type='text' 
              name='salary' 
              id="" 
              placeholder="Enter your Contact Number"  
              className='w-full h-10 border-2 border-purple-700 p-2 rounded-lg'
              />
          </div>  
          </div>
        </div>
        <div className='pt-4'>
          <button 
          type="submit"
          id=''
          className='bg-purple-900 rounded-lg w-full mt-2 py-2 text-white hover:bg-purple-600 duration-500'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Inquire
