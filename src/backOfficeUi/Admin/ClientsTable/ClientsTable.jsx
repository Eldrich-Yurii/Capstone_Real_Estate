import React from 'react'
import { Card, Typography } from "@material-tailwind/react";


const LeadPondUi = () => {

  const TABLE_HEAD = ["Full Name", "Age", "Contact Number", "Email", "Location Of Property", " Monthly Salary", "Status", ""];
 
const TABLE_ROWS = [
  {
    id: "1",
    fullname: "John Michael",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    status: "Potential"
  },
  {
    id: "2",
    fullname: "John Michael",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    status: "Site Visit"
  },
  {
    id: "3",
    fullname: "John Michael",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    status: "Site Visit"
  },
  {
    id: "4",
    fullname: "John Cruz",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    status: "Turonver"
  },
  {
    id: "5",
    fullname: "John Michael De Guzman",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    status: "Site Visit"
  },
  {
    id: "6",
    fullname: "John Mark",
    age: "30",
    contactNumber: "0911222831212",
    email: "kapitanTiago@gmail.com",
    locationOfProperty:"Sta. Maria Bulacan",
    monthlySalary : "25, 000 php",
    status: "Site Visit"
  },
  
];

  return (
    <>
    <div className='absolute ml-[345px] -mt-[510px]'>
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
            {TABLE_ROWS.map(({id, fullname, age, contactNumber, email, locationOfProperty, monthlySalary, status }, index) => (
              <tr key={id} className="even:bg-blue-gray-100/50">
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {fullname}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {age}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {contactNumber}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {locationOfProperty}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {monthlySalary}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {status}
                  </Typography>
                </td>
              
                <td className="p-4">
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
