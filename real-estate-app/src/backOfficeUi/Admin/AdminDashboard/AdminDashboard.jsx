import React from 'react'
import { BsPeopleFill, BsFillHouseCheckFill, BsFillPersonPlusFill } from 'react-icons/bs'
import { BiSolidDashboard } from 'react-icons/bi'

const AdminDashboard = () => {
  return (
    <div className='absolute ml-[335px] -mt-[660px]'>
    <div className='absolute -mt-10 bg-white  border-[1px] h-16 p-2 px-4 text-white rounded-full drop-shadow-md '>
      <div className='w-[950px] h-full'>
          <div className='flex items-center justify-between px-3 py-2'>
            <h2 className='text-purple-900 text-xl'>Admin Dashboard</h2>
            <BiSolidDashboard className='text-purple-800 w-6 h-6'/>
          </div>
      </div>
    </div>
    <div className='pt-10'>
        <div className='grid grid-cols-3 gap-5'>
            <div className='flex items-center justify-start drop-shadow-lg bg-gray-100 h-[210px] w-[315px] rounded-3xl text-gray-800 px-6'>
                <div className='leading-10'>
                    <div>
                        <BsPeopleFill className='mb-1 w-16 h-16 text-purple-700'/>
                    </div>
                    <div>
                        <h2 className=' font-semibold'>Total Inquiries:</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl'>100</h1>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start drop-shadow-lg bg-gray-100 h-[210px] w-[315px] rounded-3xl text-gray-800 px-6'>
                <div className='leading-10'>
                    <div>
                        <BsFillHouseCheckFill className='mb-1 w-16 h-16 text-purple-700'/>
                    </div>
                    <div>
                        <h2 className=' font-semibold'>Total Property Posted:</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl'>20</h1>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start drop-shadow-lg bg-purple-700 h-[210px] w-[315px] rounded-3xl text-white px-6'>
                <div className='leading-10'>
                    <div>
                        <BsFillPersonPlusFill className='mb-1 w-16 h-16 '/>
                    </div>
                    <div>
                        <h2 className=' font-semibold'>New inquiries:</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl'>10</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-5'>
            <div className='pt-5 pl-5 w-full h-[270px] bg-gray-50 rounded-3xl drop-shadow-lg'>
                <h1>Table</h1>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AdminDashboard
