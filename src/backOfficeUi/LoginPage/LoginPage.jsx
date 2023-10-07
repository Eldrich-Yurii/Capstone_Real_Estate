import React from 'react'
import Logo from './img/LOGO-NAME_WHITE.svg'

const LoginPage = () => {
  return (
    <>
    <div className='bg-blue-gray-50 flex justify-center items-center h-screen'>
      <div className='w-80 h-[385px] drop-shadow-2xl text-base bg-white rounded-3xl'>
        <div className='flex justify-center py-6 bg-purple-800 rounded-t-2xl'>
            <img src={Logo} alt="" width={150} className=''/>
        </div>
        <form action="" method="POST" className='pt-3 leading-10 px-5'>
            <div>
                <label htmlFor="username" className='pl-1 font-semibold'>Username</label>
                <div>
                  <input 
                  type="username" 
                  name="username" 
                  id="username" 
                  className='shadow-inner w-full h-10  bg-gray-300 p-2 rounded-xl text-gray-500'/>
                </div>
            </div>
            <div className='pt-2'>
                <label htmlFor="password" className='pl-1 font-semibold'>Password</label>
                <div>
                  <input
                  type="password"
                  name="password" 
                  id="password" 
                  className='shadow-inner w-full h-10 bg-gray-300 p-2 rounded-xl text-gray-500'/>
                </div>
            </div>
            <div className='flex justify-end pt-5'>
            <button 
                type=""
                id='FormSubmit'
                className='text-white px-4 bg-purple-900 rounded-xl drop-shadow-lg hover:bg-purple-800 duration-300'>
                    Log in
            </button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginPage
