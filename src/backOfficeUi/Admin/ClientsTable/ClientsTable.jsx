import React from 'react'
import { FaPlus, FaBell, FaEdit } from "react-icons/fa"
import { Card, Typography, Badge, IconButton } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateClient from './CreateClient';



const LeadPondUi = () => {

  const [openModal, setOpenModal] = useState(false)

  const TABLE_HEAD = ["First Name", "Last Name", "Birth Date", "Contact Number", "Email", "City", "Province", " Monthly Salary (Php)", "Tags", ""];
 
const TABLE_ROWS = [
  {
    id: "1",
    firstname: "John",
    lastname: "Michael",
    birthdate: "October 22, 2002",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    city:"Sta. Maria",
    province:"Bulacan",
    monthlySalary : "25, 000",
    tags: "Potential"
  },
  {
    id: "2",
    firstname: "John",
    lastname: "Michael",
    birthdate: "October 22, 2002",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    city:"Sta. Maria",
    province:"Bulacan",
    monthlySalary : "25, 000",
    tags: "Site Visit"
  },
  {
    id: "3",
    firstname: "John",
    lastname: "Michael",
    birthdate: "October 22, 2002",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    city:"Sta. Maria",
    province:"Bulacan",
    monthlySalary : "25, 000",
    tags: "Site Visit"
  },
  {
    id: "4",
    firstname: "Johnz",
    lastname: "Cruz",
    birthdate: "October 22, 2002",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    city:"Sta. Maria",
    province:"Bulacan",
    monthlySalary : "25, 000",
    tags: "Turonver"
  },
  {
    id: "5",
    firstname: "John ",
    lastname: "De Guzman ",
    birthdate: "October 22, 2002",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    city:"Sta. Maria",
    province:"Bulacan",
    monthlySalary : "25, 000",
    tags: "Site Visit"
  },
  {
    id: "6",
    firstname: "John",
    lastname: "John Marquez",
    birthdate: "October 22, 2002",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    city:"Sta. Maria",
    province:"Bulacan",
    monthlySalary : "25, 000",
    tags: "Site Visit"
  },
  
];

  return (
    <>
    <div className='absolute ml-[345px] -mt-[520px]'>
    <div className='absolute -mt-20 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md '>
          <div className='flex justify-between items-center h-full pl-3 '>
              <h2 className='text-purple-900 text-xl'>Clients Pond</h2>
              <div className='pl-96'>
                <input 
                type="search" 
                name="searchproperty" 
                id="searchproperty" 
                placeholder='Search...' 
                className='bg-gray-100 shadow-inner px-4 w-64 h-10 p-2 rounded-full text-black'/>
              </div>
              <div className='bg-purple-700 text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out'>
                <button onClick={() => setOpenModal(true)} className='flex items-center gap-2'>Add Client<FaPlus /></button >
                <CreateClient open={openModal} onClose={() => setOpenModal(false)}/>
              </div>
                <Badge>
                  <IconButton className='rounded-full bg-purple-500 hover:scale-105 duration-150 ease-in-out'>
                    <FaBell className="h-4 w-4" />
                  </IconButton>
                </Badge>
          </div>
        </div>
        <Card className="h-[420px] w-[1000px] overflow-x-scroll rounded-3xl">
        <table className=" w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 px-4 py-4">
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
            {TABLE_ROWS.map(({id, firstname, lastname, birthdate, contactNumber, email, city, province, monthlySalary, tags }, index) => (
              <tr key={id} className="even:bg-blue-gray-100/50">
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {firstname}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {lastname}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {birthdate}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {contactNumber}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {city}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {province}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {monthlySalary}
                  </Typography>
                </td>
                <td className="px-4 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {tags}
                  </Typography>
                </td>
              
                <td className="px-4 py-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  <FaEdit  className='text-xl text-green-500'/>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
    </>
  )
}

export default LeadPondUi;
