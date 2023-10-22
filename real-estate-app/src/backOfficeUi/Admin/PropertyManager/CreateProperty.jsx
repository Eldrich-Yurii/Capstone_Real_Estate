import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { AiFillCloseCircle } from 'react-icons/ai'
import constants from '../../../components/Constant'


function CreateProperty({open, onClose}) {
  if (!open) 
  return null;
  const [openModal, setOpenModal] = useState(true)

  const [propertyName, setPropertyName] = useState("");
  const [developerId, setDeveloperId] = useState("");
  const [squareMeter, setSquareMeter] = useState("");
  const [price, setPrice] = useState("");
  const [requiredIncome, setRequiredIncome] = useState(0);

  const formEndpoint = `${constants.ENDPOINT}/api/inquiries`;

  async function storeProperty(e) {
    e.preventDefault();

    const payload = {
      property_name: propertyName,
      developer_id: developerId,
      square_meter: squareMeter,
      price: price,
      required_income: requiredIncome,
    }

    await axios.post(formEndpoint, payload)
    .then((response) => {
      console.log(response.data)
      alert('Inquiry Sent Successfully!')
    })
    .catch((error) => {
      console.error(error);
      alert('Sending Failed.')
    });
  }

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
                          Add Property Information
                        </h2>
                        <button><AiFillCloseCircle onClick={onClose} className='pr-3 text-4xl -mt-7 text-gray-500 hover:scale-105 hover:text-red-500'/></button>
                      </div>
                      
                      <div className="mt-2">
                        <form action="" method="post" className=' p-1 pr-5'>
                          <div>
                            {/* Property */}
                            <div className='pb-3'>
                              <label htmlFor="property" className='text-md font-semibold pl-2'>Property</label>
                            </div>
                            <div className='pb-3'>
                              <input 
                              type="file" 
                              name="property" 
                              id="property" 
                              
                              className=' bg-gray-300 w-full rounded-r-full'/>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-3'>
                            <div className='pb-2'>
                              {/* Name */}
                              <div className='pb-2'>
                                <label htmlFor="name" className='text-md font-semibold pl-2'>Name</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={propertyName}
                                placeholder='Name of Property'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                              </div>
                            </div>
                            
                            <div className='pb-2'>
                              {/* Developer */}
                              <div className='pb-2'>
                                <label htmlFor="developer" className='text-md font-semibold pl-2'>Developer</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="developer" 
                                id="developer"
                                value={de}
                                placeholder='Property Developer'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                              </div>
                            </div>
                          </div>

                          <div className='grid grid-cols-2 gap-3'>
                            <div className='pb-2'>
                              {/* Square meters */}
                              <div className='pb-2'>
                                <label htmlFor="sqm" className='text-md font-semibold pl-2'>Square meters</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="sqm" 
                                id="sqm" 
                                value={squareMeter}
                                placeholder='Ex. 32 sqm'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Price */}
                              <div className='pb-2'>
                                <label htmlFor="price" className='text-md font-semibold pl-2'>Price</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="price" 
                                id="price" 
                                value={price}
                                placeholder='Ex. Php 1,000,000'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                              </div>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-3'>
                            <div className='pb-2'>
                              {/* City of Property */}
                              <div className='pb-2'>
                                <label htmlFor="city" className='text-md font-semibold pl-2'>City</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="city" 
                                id="city" 
                                value={city}
                                placeholder='Ex. Santa Maria'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Province */}
                              <div className='pb-2'>
                                <label htmlFor="province" className='text-md font-semibold pl-2'>Province</label>
                              </div>
                              <div>
                                <input 
                                type="text" 
                                name="province" 
                                id="province"
                                // value={}
                                placeholder='Ex. Bulacan'
                                className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                              </div>
                            </div>
                          </div>
                          
                          
                          <div className='pb-2'>
                            {/* Required Income */}
                            <div className='pb-2'>
                              <label htmlFor="requiredIncome" className='text-md font-semibold pl-2'>Required Income</label>
                            </div>
                            <div>
                              <input 
                              type="text" 
                              name="requiredIncome" 
                              id="requiredIncome" 
                              value={requiredIncome}
                              placeholder='Ex. Php 30, 000'
                              className='pl-3 bg-gray-300 w-full h-10 rounded-full '/>
                            </div>
                          </div>
                           <div className='pt-4 pb-1 flex justify-end gap-8'>
                              <div className='bg-gray-300 py-2 px-4 rounded-full hover:bg-gray-400 hover:text-white'>
                                <button type="reset" onClick={onClose}>Cancel</button>
                              </div>
                              <div className='text-white bg-purple-700 py-2 px-4 rounded-full hover:bg-purple-900'>
                                <button onClick={storeProperty}>Add Property</button>
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

export default CreateProperty
