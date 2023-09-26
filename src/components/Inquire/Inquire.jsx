import React from 'react'

function Inquire() {
  return (
    <div className='flex justify-center'>
      <form action="" className='p-5 w-96 border-2'>
        <h2 className=' text-xl font-bold pb-3'>Inquire Form</h2>
        <div className=" col-span-3">
              <div className=''>  
                <label for="name">Name</label>
              </div>
              <div className='sm:col-span-6'>
                <input 
                type='text' 
                name='' id="" 
                placeholder="Enter your Fullname"
                className='w-full h-10 border-2 border-blue-400' />  
              </div>
        </div>
        <div className="">
              <div className=''>
                <label for="name">Email</label>
              </div>
              <div className=''>
                <input 
                type='email' 
                name='' 
                id="" 
                placeholder="Ex. yourname@gmail.com"
                className='w-full h-10 border-2 border-blue-400' />
              </div>
        </div>
        <div className="">
              <div className=''>
                <label for="name">Age</label>
              </div>
              <div className=''>
                <input 
                type='number' 
                name='' id="" 
                placeholder="Age"  
                className='w-full h-10 border-2 border-blue-400'/>
              </div>
        </div>
        <hr />
        <div className="sm:col-span-3">
              <label htmlFor="location" className="">
                Location of Property
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select Location...</option>
                  <option>Sta. Maria</option>
                  <option>Quezon City</option>
                  <option>Imus</option>
                </select>
              </div>
            </div>

        
      </form>
    </div>
  )
}

export default Inquire
