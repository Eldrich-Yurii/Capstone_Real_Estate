import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Select, Option, Input } from "@material-tailwind/react";
import { AiFillCloseCircle } from 'react-icons/ai'
import constants from '../../../components/Constant'
import axios from 'axios'


function CreateLocation({open, onClose}) {
  if (!open) 
  return null;
  const [openModal, setOpenModal] = useState(true)

  const [city, setCity] = useState("");
  const [province, setSetProvince] = useState("");

  const formEndpoint = `${constants.ENDPOINT}/api/properties`;
  // const propertyDropDown = `${constants.ENDPOINT}/api/properties`;
  async function storeProperty(e) {
    e.preventDefault();

    const payload = {
      city: city,
      province: province,
    }

    await axios.post(formEndpoint, payload)
    .then((response) => {
      console.log(response.data)
      alert('Inquiry Sent Successfully!')
    })
    .catch((error) => {
      console.log(error);
      alert('Sending Failed.')
    });
  }
  
  useEffect(() => {
    index();
  }, []);

  async function index() {
    await axios.get(propertyDropDown)
      .then((response) => {
        setLocation(response.data.data);
      })
      .catch((response) => {
        console.log(response);
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
                                <Input 
                                label="Property Name"
                                color="purple"
                                type="text" 
                                name="name" 
                                id="name" 
                                value={propertyName}
                                className='pl-3 bg-gray-300 w-full h-10'
                                onChange={(e) => setPropertyName(e.target.value)}
                                />
                              </div>
                            </div>
                            
                            <div className='pb-2'>
                              {/* Developer */}
                              <div className='pb-2'>
                                <label htmlFor="developer" className='text-md font-semibold pl-2'>Developer</label>
                              </div>
                              <div>
                                <Input 
                                label="Property Developer"
                                color="purple"
                                type="text" 
                                name="developer" 
                                id="developer"
                                value={developerId}
                                className='pl-3 bg-gray-300 w-full h-10'
                                onChange={(e) => setDeveloperId(e.target.value)}
                                />
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
                                <Input 
                                label="Ex. 32"
                                color="purple"
                                type="text" 
                                name="sqm" 
                                id="sqm" 
                                value={squareMeter}
                                className='pl-3 bg-gray-300 w-full h-10 '
                                onChange={(e) => setSquareMeter(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Price */}
                              <div className='pb-2'>
                                <label htmlFor="price" className='text-md font-semibold pl-2'>Price</label>
                              </div>
                              <div>
                                <Input 
                                label="Ex. Php 1000000"
                                color="purple"
                                type="text" 
                                name="price" 
                                id="price" 
                                value={price}
                                className='pl-3 bg-gray-300 w-full h-10 '
                                onChange={(e) => setPrice(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-3'>
                            <div className='pb-2'>
                              {/* Required Income */}
                              <div className='pb-2'>
                                <label htmlFor="requiredIncome" className='text-md font-semibold pl-2'>Required Income</label>
                              </div>
                              <div>
                                <Input 
                                label="Ex. 30000"
                                color="purple"
                                type="number" 
                                name="requiredIncome" 
                                id="requiredIncome" 
                                value={requiredIncome}
                                className='pl-3 bg-gray-300 w-full h-10 '
                                onChange={(e) => setRequiredIncome(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className='pb-2'>
                              {/* Required Income */}
                              <div className='pb-2'>
                                <label htmlFor="location" className='text-md font-semibold pl-2'>Location ID</label>
                              </div>
                              <div>
                                <Input 
                                label="Enter Location"
                                color="purple"
                                type="text" 
                                name="location" 
                                id="location" 
                                value={location}
                                className='pl-3 bg-gray-300 w-full h-10 '
                                onChange={(e) => setLocation(e.target.value)}
                                />
                              </div>
                            </div>
                            {/* <div className='pb-2'>
                              <label htmlFor="location" className="font-semibold">
                                Location of Property
                              </label>
                              <div className="pt-1">
                                <Select color="purple" label="Location Of Property" id="location" name="location" required className="w-full h-10 p-2 text-gray-500"
                                  value={value} onChange={(e) => setValue(e.target.value)}>
                                  {value.map((property) => (
                                    <Option key={property.id} value={property.id}>{property.name} - {property.city}, {property.province}</Option>
                                  ))}
                                </Select>
                              </div>
                            </div> */}
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

export default CreateLocation
