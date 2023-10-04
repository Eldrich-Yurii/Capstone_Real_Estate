import React from 'react'
import { FaPlus, FaBell } from "react-icons/fa"
import { Card, Typography, Badge, IconButton } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const LeadPondUi = () => {

  const TABLE_HEAD = ["Full Name", "Age", "Contact Number", "Email", "Location Of Property", " Monthly Salary", "Tags", ""];
 
const TABLE_ROWS = [
  {
    id: "1",
    fullname: "John Michael",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    tags: "Potential"
  },
  {
    id: "2",
    fullname: "John Michael",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    tags: "Site Visit"
  },
  {
    id: "3",
    fullname: "John Michael",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    tags: "Site Visit"
  },
  {
    id: "4",
    fullname: "John Cruz",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    tags: "Turonver"
  },
  {
    id: "5",
    fullname: "John De Guzman ",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    tags: "Site Visit"
  },
  {
    id: "6",
    fullname: "John Mark",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    tags: "Site Visit"
  },
  
];

  return (
    <>
    <div className='absolute ml-[345px] -mt-[480px]'>
    <div className='absolute -mt-24 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md '>
          <div className='flex justify-between items-center h-full pl-3 '>
              <h2 className='text-purple-900 text-xl'>Clients Pond</h2>
              <div className='pl-96'>
                <input 
                type="search" 
                name="searchproperty" 
                id="searchproperty" 
                placeholder='Search' 
                className='bg-gray-100 shadow-inner px-4 w-64 h-10 p-2 rounded-full text-black'/>
              </div>
              <div className='bg-purple-500 text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out'>
                <Link to="" className='flex items-center gap-2'>Add Client<span><FaPlus /></span></Link >
              </div>
                <Badge>
                  <IconButton className='rounded-full bg-purple-500 hover:scale-105 duration-150 ease-in-out'>
                    <FaBell className="h-4 w-4" />
                  </IconButton>
                </Badge>
          </div>
        </div>
        <Card className="h-[450px] w-[1000px] overflow-scroll">
        <table className=" w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 px-3 py-4">
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
            {TABLE_ROWS.map(({id, fullname, age, contactNumber, email, locationOfProperty, monthlySalary, tags }, index) => (
              <tr key={id} className="even:bg-blue-gray-100/50">
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {fullname}
                  </Typography>
                </td>
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {age}
                  </Typography>
                </td>
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {contactNumber}
                  </Typography>
                </td>
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {locationOfProperty}
                  </Typography>
                </td>
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {monthlySalary}
                  </Typography>
                </td>
                <td className="px-3 py-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {tags}
                  </Typography>
                </td>
              
                <td className="px-3 py-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    Edit
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
