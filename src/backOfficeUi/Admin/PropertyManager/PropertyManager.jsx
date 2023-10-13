import React from 'react'
import { useState, useRef } from 'react';
import { FaPlus, FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { Button, Card, Typography } from "@material-tailwind/react";
import Pic from './img/Logo.png';
import CreateProperty from './CreateProperty';


const RealEstateManagement = () => {

  const [openModal, setOpenModal] = useState(false)

  const cancelButtonRef = useRef(null)

  const TABLE_HEAD = ["Property_ID", "Name", "Sqm", "Price", "City", "Province", "Required income (Php)", "", ""];
 
const TABLE_ROWS = [
  {
    id : "1" ,
    // img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    city: "Sta. Maria",
    province: "Bulacan",
    price:"1 million",
    requiredincome : "30, 000"
  },
  {
    id : "2" ,
    // img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    city: "Sta. Maria",
    province: "Bulacan",
    price:"1 million",
    requiredincome : "30, 000"
  },
  {
    id : "3" ,
    // img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    city: "Sta. Maria",
    province: "Bulacan",
    price:"1 million",
    requiredincome : "30, 000"
  },
  {
    id : "4" ,
    // img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    city: "Sta. Maria",
    province: "Bulacan",
    price:"1 million",
    requiredincome : "30, 000"
  },
  {
    id : "5" ,
    // img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    city: "Sta. Maria",
    province: "Bulacan",
    price:"1 million",
    requiredincome : "30, 000"
  },
  {
    id : "6" ,
    // img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    city: "Sta. Maria",
    province: "Bulacan",
    price:"1 million",
    requiredincome : "30, 000"
  },
];

  return (
    <>
    
    <div className='absolute ml-[345px] -mt-[560px]'>
        <div className='absolute -mt-10 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md '>
          <div className='flex justify-between items-center h-full pl-3 '>
              <h2 className='text-purple-900 text-xl'>Property Manager</h2>
              <div className='pl-72'>
                <input 
                type="search" 
                name="searchproperty" 
                id="searchproperty" 
                placeholder='Search...' 
                className='bg-gray-100 shadow-inner px-4 w-64 h-10 p-2 rounded-full text-black'/>
              </div>
              <div className='bg-purple-700 text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out'>
                <button type='button' onClick={() => setOpenModal(true)} className='flex items-center gap-2'>Add Property<FaPlus /></button>
                <CreateProperty open={openModal} onClose={() => setOpenModal(false)}/>
              </div>
          </div>
        </div>
        <div className='pt-10'>
            <Card className="h-[420px] w-[1000px] rounded-3xl">
            <table className="w-full min-w-max table-auto text-center">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                        >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({id, img, name, sqm, city, province, price, requiredincome}, index) => (
                  <tr key={id} className="even:bg-blue-gray-100/50">
                    <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {id}
                      </Typography>
                    {/* <img src={img} alt="" width={100}/> */}
                    </td>
                    {/* <td className="p-4">
                    <img src={ima} alt="" width={100}/>
                    </td> */}
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {sqm}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {city}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {province}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {requiredincome}
                      </Typography>
                    </td>
                  
                    <td className="p-4">
                      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                      <FaEdit  className='text-xl text-green-500'/>
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                      <AiFillDelete className='text-xl text-red-500'/>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  )
}

export default RealEstateManagement;
