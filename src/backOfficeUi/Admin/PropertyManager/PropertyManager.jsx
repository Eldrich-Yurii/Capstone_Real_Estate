import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Typography } from "@material-tailwind/react";
import Pic from './img/Logo.png';


const RealEstateManagement = () => {

  const TABLE_HEAD = ["Property", "Name", "Sqm", "Location", "Price", "Required income", "", ""];
 
const TABLE_ROWS = [
  {
    img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    location: "Sta. Maria Bulacan",
    price:"1 million",
    requiredincome : "30, 000 php"
  },
  {
    img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    location: "Sta. Maria Bulacan",
    price:"1 million",
    requiredincome : "30, 000 php"
  },
  {
    img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    location: "Sta. Maria Bulacan",
    price:"1 million",
    requiredincome : "30, 000 php"
  },
  {
    img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    location: "Sta. Maria Bulacan",
    price:"1 million",
    requiredincome : "30, 000 php"
  },
  {
    img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    location: "Sta. Maria Bulacan",
    price:"1 million",
    requiredincome : "30, 000 php"
  },
  {
    img: Pic,
    name: "Pagsibol",
    sqm: "32 sqm",
    location: "Sta. Maria Bulacan",
    price:"1 million",
    requiredincome : "30, 000 php"
  },
];

  return (
    <>
    
    <div className='absolute ml-[345px] -mt-[560px]'>
        <div className='absolute -mt-10 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md '>
          <div className='flex justify-between items-center h-full pl-3 '>
              <h2 className='text-purple-900 text-xl'>Property Manager</h2>
              <div className='pl-64'>
                <input 
                type="search" 
                name="searchproperty" 
                id="searchproperty" 
                placeholder='Search' 
                className='bg-gray-100 shadow-inner px-4 w-64 h-10 p-2 rounded-full text-black'/>
              </div>
              <div className='bg-purple-600 text-white p-2 px-3 rounded-full hover:bg-deep-purple-500 hover:scale-105 duration-150 ease-in-out'>
                <Link to="">Add Property</Link>
              </div>
          </div>
        </div>
        <div className='pt-10'>
            <Card className="h-[500px] w-[1000px] overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
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
                {TABLE_ROWS.map(({ img, name, sqm, location, price, requiredincome}, index) => (
                  <tr key={img} className="even:bg-blue-gray-100/50">
                    <td className="p-4">
                    <img src={img} alt="" width={100}/>
                    </td>
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
                        {location}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {requiredincome}
                      </Typography>
                    </td>
                  
                    <td className="p-4">
                      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                        Edit
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                        Delete
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
