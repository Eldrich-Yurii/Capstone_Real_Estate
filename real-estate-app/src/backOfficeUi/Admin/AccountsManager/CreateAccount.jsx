import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiFillCloseCircle } from 'react-icons/ai'



function CreateAccount({open, onClose}) {
  if (!open) 
  return null;
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
     <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10"  onClose={setOpenModal}>
        
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
     

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white py-3">
                  <div className="">
                   
                    <div className="mt-2 ml-4 md:lg:text-left">
                      <div className='flex justify-between'>
                        <h2 className="text-lg font-semibold leading-6 text-white bg-purple-700 p-2 px-7 -ml-6 rounded-r-full">
                          Add Account
                        </h2>
                        <button type='reset'><AiFillCloseCircle onClick={onClose} className='pr-3 text-4xl -mt-7 text-gray-500 hover:scale-105 hover:text-red-500'/></button>
                      </div>
                     
                      <div className="mt-2">
                        <form action="" method="post" className=' p-1 pr-5'>
                         
                          <div>
                            <div className='pb-10'>
                              {/* Email */}
                              <div className='pb-2'>
                                <label htmlFor="email" className='text-md font-semibold pl-2'>Email</label>
                              </div>
                              <div>
                                <input 
                                type="email"
                                name="email" 
                                id="email" 
                                required
                                placeholder='Enter a email'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl '/>
                              </div>
                            </div>
                            <div className='pb-10'>
                              {/* Username */}
                              <div className='pb-2'>
                                <label htmlFor="username" className='text-md font-semibold pl-2'>Username</label>
                              </div>
                              <div>
                                <input 
                                type="text"
                                name="username" 
                                id="username" 
                                required
                                placeholder='Enter a Username'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl '/>
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Email */}
                              <div className='pb-2'>
                                <label htmlFor="password" className='text-md font-semibold pl-2'>Password</label>
                              </div>
                              <div>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                required
                                placeholder='Enter a Password'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl '/>
                              </div>
                            </div>
                          </div>
                          
                           <div className='pt-4 pb-1 flex justify-end gap-8'>
                              <div className='bg-gray-300 py-2 px-4 rounded-2xl hover:bg-gray-400 hover:text-white'>
                                <button type="reset" onClick={onClose}>Cancel</button>
                              </div>
                              <div className='text-white bg-purple-700 py-2 px-4 rounded-2xl hover:bg-purple-900'>
                                <button type="submit">Add Property</button>
                              </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}

export default CreateAccount
