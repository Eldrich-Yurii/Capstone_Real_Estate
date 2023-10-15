import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import CreateAccount from './CreateAccount'


const AccountsManager = () => {

  const [openModal, setOpenModal] = useState(false)

  const TABLE_HEAD = ["ID", "Position", "Email", "Username", "Password", "", ""];
 
const TABLE_ROWS = [
  {
    id : "1",
    position : "Broker",
    email: "jilsu@gmail.com",
    username: "jiel",
    password: "jiel123",
  },
  {
    id : "2",
    position : "Agent",
    email: "jisu@gmail.com",
    username: "jackie",
    password: "jackie123",
  },
  {
    id : "3",
    position : "Agent",
    email: "jil@gmail.com",
    username: "jack",
    password: "jack123",
  }
];

  return (
    <>
    
    <div className='absolute ml-[345px] -mt-[560px]'>
        <div className='absolute -mt-10 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md '>
          <div className='flex justify-between items-center h-full pl-3 '>
              <h2 className='text-purple-900 text-xl'>Accounts Manager</h2>
              
              <div className='bg-purple-700 text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out'>
                <button onClick={() => setOpenModal(true)} className='flex items-center gap-2'>Add Account<FaPlus /></button>
              <CreateAccount open={openModal} onClose={() => setOpenModal(false)}/>
              </div>
          </div>
        </div>
        <div className='pt-10'>
            <Card className="h-full w-[1000px] rounded-3xl">
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
                {TABLE_ROWS.map(({ id, position, email, username, password}, index) => (
                  <tr key={id} className="even:bg-blue-gray-100/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {id}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {position}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {email}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {username}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {password}
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

export default AccountsManager;
