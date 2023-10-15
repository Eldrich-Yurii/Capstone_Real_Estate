import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiFillCloseCircle } from 'react-icons/ai'



function CreateClient({open, onClose}) {
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
                          Add Potential Client
                        </h2>
                        <button><AiFillCloseCircle onClick={onClose} className='pr-3 text-4xl -mt-7 text-gray-500 hover:scale-105 hover:text-red-500'/></button>
                      </div>
                     
                      <div className="mt-2">
                        <form action="" method="post" className=' p-1 pr-5'>
                         
                          <div className='grid grid-cols-2 gap-3'>
                            <div>
                              {/* First Name */}
                              <div className='pb-2'>
                                <label htmlFor="firstName" className='text-md font-semibold pl-2'>First Name</label>
                              </div>
                              <div className='pb-2'>
                                <input 
                                type="text" 
                                name="firstName" 
                                id="firstName" 
                                placeholder='Enter a First Name'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl pr-3'/>
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Middle Name */}
                              <div className='pb-2'>
                                <label htmlFor="middleName" className='text-md font-semibold pl-2'>Middle Name</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="middleName" 
                                id="middleName"
                                placeholder='Enter a Middle Name'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl pr-3'/>
                              </div>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-3'>
                            <div className='pb-2'>
                              {/* Last Name */}
                              <div className='pb-2'>
                                <label htmlFor="lastName" className='text-md font-semibold pl-2'>Last Name</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="lastName" 
                                id="lastName" 
                                placeholder='Enter a Last Name'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl '/>
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Date Of Birth */}
                              <div className='pb-2'>
                                <label htmlFor="dateOfBirth" className='text-md font-semibold pl-2'>Date Of Birth</label>
                              </div>
                              <div>
                                <input 
                                type="date" 
                                name="dateOfBirth" 
                                id="dateOfBirth"
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl pr-3'/>
                              </div>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-3'>
                            <div className='pb-2'>
                              {/* Contact Number */}
                              <div className='pb-2'>
                                <label htmlFor="contactNumber" className='text-md font-semibold pl-2'>Contact Number</label>
                              </div>
                              <div>
                                <input 
                                type="tel"
                                name="contactNumber" 
                                id="contactNumber" 
                                placeholder='Ex. 09180328112'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl '/>
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Email */}
                              <div className='pb-2'>
                                <label htmlFor="email" className='text-md font-semibold pl-2'>Email</label>
                              </div>
                              <div>
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder='Ex. yourname@gmailcom'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-2xl '/>
                              </div>
                            </div>
                          </div>
                          <div className='py-2 border-b-[.5px] border-purple-500'/> 
                          
                          <div className='pt-2 grid grid-cols-2 gap-3'>
                              <div className='pb-2'>
                              <label htmlFor="property" className='pl-2 font-semibold'>Property</label>
                              <div className='pt-2'>
                                  <select
                                      id="property"
                                      name="property"
                                      required
                                      className="px-3 bg-gray-300 w-full h-10 rounded-2xl "
                                      >
                                      <option>Select a Location...</option>
                                      <option>Bulacan</option>
                                      <option>Metro Manila</option>
                                      <option>Cavite</option>
                                      <option>Select a Location...</option>
                                      <option>Bulacan</option>
                                      <option>Metro Manila</option>
                                      <option>Cavite</option>
                                      <option>Select a Location...</option>
                                      <option>Bulacan</option>
                                      <option>Metro Manila</option>
                                      <option>Cavite</option>
                                      <option>Select a Location...</option>
                                      <option>Bulacan</option>
                                      <option>Metro Manila</option>
                                      <option>Cavite</option>
                                      <option>Select a Location...</option>
                                      <option>Bulacan</option>
                                      <option>Metro Manila</option>
                                      <option>Cavite</option>
                                      <option>Select a Location...</option>
                                      <option>Bulacan</option>
                                      <option>Metro Manila</option>
                                      <option>Cavite</option>
                                  </select>
                              </div>
                              </div>
                              <div className='pb-2'>
                                {/* MOnthly Salary */}
                                <div className='pb-2'>
                                  <label htmlFor="monthlySalary" className='text-md font-semibold pl-2'>Monthly Salary</label>
                                </div>
                                <div>
                                  <input 
                                  type="number" 
                                  name="monthlySalary" 
                                  id="monthlySalary" 
                                  placeholder='Ex. 30000'
                                  className='px-3 bg-gray-300 w-full h-10 rounded-2xl '/>
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

export default CreateClient
