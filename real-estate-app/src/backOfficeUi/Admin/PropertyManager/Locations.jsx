import React from "react";
import { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import CreateProperty from "./CreateProperty";
import axios from "axios";
import constants from "../../../components/Constant";
import DataTable from "react-data-table-component";



const Locations = () => {
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState(false);

  const locationEndpoint = `${constants.ENDPOINT}/api/property_locations`;
  // const deleteEndpoint = `${constants.ENDPOINT}/api/delete_properties/`;

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "City",
      selector: (row) => row.city_name,
    },
    {
      name: "Province",
      selector: (row) => row.province_name,
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
    },
    // {
    //   name: 'Edit',
    //   button: true,
    //   cell: (row) => <button onClick={() => handleEdit(row.id)}>Edit</button>,
    // },
    // {
    //   name: 'Delete',
    //   button: true,
    //   cell: (row) => <button onClick={() => handleDelete(row.property_id)}>Delete</button>,
    // },
  ];

  useEffect(() => {
    index();
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  async function index() {
    await axios.get(locationEndpoint)
      .then((response) => {
        setData(response.data.data);
        console.log(response)
      })
      .catch((response) => {
        console.log(response);
      });
  }

  async function destroy(id) {
    await axios.delete(deleteEndpoint + id)
    .then((response) => {
      console.log(response.data)
    })
  
  }

  const handleDelete = (id) => { 
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
            <h2 className="text-purple-900 text-xl">Property Manager</h2>
            <div className="ml-[580px] bg-purple-700 text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out">
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="flex items-center gap-2"
              >
                Add Location
                <FaPlus />
              </button>
              <CreateProperty
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
            </div>
            <div className="bg-red-700 text-md text-white p-3 rounded-full hover:scale-105 duration-150 ease-in-out">
              <button onClick={handleDelete}  className="flex items-center gap-2">
                 <FaTrash />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className=" w-[1000px] rounded-t-3xl">
            <DataTable
              columns={columns}
              data={data}
              progressPending={pending}
              pagination
              selectableRows 
              onSelectedRowsChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
