import React from 'react'

const AccountsManagement = () => {
  return (
    <div className='absolute ml-[345px] -mt-[600px]'>
       <form action="" method="POST" className='pt-3 leading-10 px-5'>
            {/* <div>
                <label htmlFor="username" className='pl-1 font-semibold'>Username</label>
                <div>
                  <input 
                  type="username" 
                  name="username" 
                  id="username" 
                  className='shadow-inner w-full h-10  bg-gray-300 p-2 rounded-xl text-gray-500'/>
                </div>
            </div> */}
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
            <div className='pt-2'>
                <label htmlFor="newpassword" className='pl-1 font-semibold'>New Password</label>
                <div>
                  <input
                  type="password"
                  name="newpassword" 
                  id="newpassword" 
                  className='shadow-inner w-full h-10 bg-gray-300 p-2 rounded-xl text-gray-500'/>
                </div>
            </div>
            <div className='flex justify-end pt-5'>
            <button 
                type=""
                id='FormSubmit'
                className='text-white px-4 bg-purple-900 rounded-xl drop-shadow-lg hover:bg-purple-800 duration-300'>
                    Change Password
            </button>
            </div>
        </form>
    </div>
  )
}

export default AccountsManagement
