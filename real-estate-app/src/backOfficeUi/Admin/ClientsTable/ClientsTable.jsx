import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Card, Typography, Badge, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateClient from "./CreateClient";
import Datatable from "react-data-table-component";
import constants from "../../../components/Constant";
import axios from "axios";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    height: "50px",
    sortable: true
  },
  {
    name: "First Name",
    selector: (row) => row.first_name,
    sortable: true
  },
  {
    name: "Middle Name",
    selector: (row) => row.middle_name,
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Birth Date",
    selector: (row) => row.birth_date,
  },
  {
    name: "Contact Number",
    selector: (row) => row.contact_number,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Property",
    selector: (row) => row.property,
  },
  {
    name: "Monthly Salary",
    selector: (row) => row.monthly_salary,
  },
  {
    name: "Created At",
    selector: (row) => row.created_at,
  },
  {
    name: 'Edit',
    button: true,
    cell: (row) => <button onClick={() => handleEdit(row.id)}>Edit</button>,
},
];

const LeadPondUi = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
	const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState(false);

  const inquiryEndpoint = `${constants.ENDPOINT}/api/inquiries/`;

  useEffect(() => {
    index();
    const timeout = setTimeout(() => {
			setRows(data);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
  }, []);

  async function index() {
    await axios
      .get(inquiryEndpoint)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }


  async function destroy(id) {
    await axios.delete(inquiryEndpoint + id)
  }

  const handleDelete = () => { 
    for (let i = 0; i< selectedRows.length; i++) {
      destroy(selectedRows[i].id);
      index();
    }
  }
  
  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };


  return (
    <>
      <div className="absolute ml-[335px] -mt-[660px]">
        <div className="absolute -mt-10 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md ">
          <div className="flex justify-between items-center h-full pl-3 ">
            <h2 className="text-purple-900 text-xl">Client Pond</h2>

            <div className="ml-[660px] bg-purple-700 text-md text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out">
              <button onClick={() => setOpenModal(true)} className="flex items-center gap-2">
                Add Client
                <FaPlus />
              </button>
              <CreateClient open={openModal} onClose={() => setOpenModal(false)}/>
            </div>
            <div className="bg-red-700 text-md text-white p-3 rounded-full hover:scale-105 duration-150 ease-in-out">
              <button onClick={handleDelete}  className="flex items-center gap-2">
                 <FaTrash />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-t-3xl w-[1000px]">
          <Datatable columns={columns} data={data} progressPending={pending} pagination selectableRows onSelectedRowsChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default LeadPondUi;
