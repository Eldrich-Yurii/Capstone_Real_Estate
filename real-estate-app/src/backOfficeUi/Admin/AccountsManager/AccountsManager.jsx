import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { useState, useEffect } from 'react';
import axios from 'axios';
import constants from '../../../components/Constant';
import { Card, Typography } from "@material-tailwind/react";
import CreateAccount from './CreateAccount'
import DataTable from 'react-data-table-component';

const columns = [
  {
      name: 'ID',
      selector: row => row.account_id,
  },
  {
      name: 'email',
      selector: row => row.email,
  },
  {
      name: 'Username',
      selector: row => row.user_name,
  },
  {
      name: 'Password',
      selector: row => row.password,
  }
]

const AccountsManager = () => {

  const [openModal, setOpenModal] = useState(false)

  const [accountList, setAccountList] = useState([])

  const accountEndpoint = `${constants.ENDPOINT}/api/accounts`;

  useEffect(() => {
    index()
  }, [])

  async function index() {
    await axios.get(accountEndpoint)
    .then((response) => {
      setAccountList(response.data.data)
    })
    .catch((response) => {
      console.log(response)
    })
  }
 

 

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
            <div className="h-full w-[1000px] rounded-3xl">
            <DataTable 
            columns={columns}
            data={accountList}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountsManager;
