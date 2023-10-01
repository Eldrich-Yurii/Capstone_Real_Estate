import React from 'react'
import Logo from './img/LOGO-NAME.svg'

const Form = () => {
  return (
    <>
    <h2 className='text-2xl md:lg:text-3xl font-bold text-gray-900 text-center pt-3'>INQUIRY FORM</h2>
    <div className='py-5 flex justify-center grid-cols-6'>
      <form method='POST' className='bg-white rounded-xl p-6 w-full m-5 border-2 drop-shadow-2xl md:lg:w-1/2'>
        <div className='flex justify-between items-center pb-3'>
            <h2 className=' text-2xl font-bold pb-3'>Inquire Now!</h2>
            <img src={Logo} alt="" width={100}/>
        </div>
        <p>This form inquiry form help us know if you are interested to buying a property. Fill out this inquiry form to connect with us. After you enter personal and contact information we will do our best to reach you out and you in choosing or buying a Property.</p>
        <br />
        <div>
          <div className='font-semibold pb-1'>
              <label htmlFor="name">Full Name</label>
          </div>
          <div className=''>
            <input 
            type='text' 
            name='name' 
            id="name" 
            placeholder="Enter your Full Name"
            required
            className='w-full h-10 border-2 border-purple-400 p-2 rounded-lg'
            />  
          </div>
        </div>
        <div className=' grid grid-cols-2 pt-1 gap-4'>
          <div className='pt-3 pb-1'>
              <label htmlFor="age" className='font-semibold'>Age</label>
          <div className='pt-1'>
            <input 
            type='text' 
            name='age' 
            id="age" 
            placeholder="Enter your Age" 
            required 
            className='w-full h-10 border-2 border-purple-400 p-2 rounded-lg'
            />
          </div>
          </div>
          <div className='pt-3 pb-1'>  
              <label htmlFor="number" className='font-semibold'>Contact Number</label>
          <div className='pt-1'>
              <input 
              type='text' 
              name='number' 
              id="number" 
              placeholder="Enter your Contact Number"
              required  
              className='w-full h-10 border-2 border-purple-400 p-2 rounded-lg'
              />
          </div>  
          </div>
        </div>
        <div className="">
            <div className='pt-3 pb-1 font-semibold'>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input 
              type='email' 
              name='email' 
              id="email" 
              placeholder="Ex. yourname@gmail.com"
              required
              className='w-full h-10 border-2 border-purple-400 p-2 rounded-lg'
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
                      required
                      className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg text-gray-500"
                      >
                      <option>Select a Location...</option>
                      <option>Bulacan</option>
                      <option>Metro Manila</option>
                      <option>Cavite</option>
              </select>
          </div>
          </div>
          <div className='pt-3 pb-1 '>  
              <label htmlFor="salary" className='font-semibold'>Monthly Salary</label>
          <div className='pt-1'>
            
              <input 
              type='text' 
              name='salary' 
              id="salary" 
              placeholder="Enter your Monthly Salary"
              required  
              className='w-full h-10 border-2 border-purple-400 p-2 rounded-lg text-gray-500'
              />
          </div>  
          </div>
        </div>
        <div className='pt-4'>
          <button 
          type="submit"
          id='FormSubmit'
          className='bg-purple-700 rounded-lg w-full mt-2 py-2 text-white hover:bg-purple-900 duration-500'>
            Submit
          </button>
        </div>
      </form>
    </div>
  </>
  )
}

export default Form
