import React from "react";
import { useState, useEffect } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Button, Card, Typography } from "@material-tailwind/react";
import Pic from "./img/Logo.png";
import CreateProperty from "./CreateProperty";
import axios from "axios";
import constants from "../../../components/Constant";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "ID",
    selector: (row) => row.property_id,
    height: "50px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Developer",
    selector: (row) => row.developer_name,
    sortable: true,
  },
  {
    name: "Sqm",
    selector: (row) => row.sqm,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
  {
    name: "Required Income",
    selector: (row) => row.required_income,
  },
  {
    name: "Created At",
    selector: (row) => row.created_at,
  },
];

const RealEstateManagement = () => {
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
  const [rows, setRows] = React.useState([]);

  const propertyEndpoint = `${constants.ENDPOINT}/api/properties`;

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
      .get(propertyEndpoint)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <div className="absolute ml-[335px] -mt-[660px]">
        <div className="absolute -mt-10 bg-white  border-[1px] w-full h-16 p-2 px-4 text-white rounded-full drop-shadow-md ">
          <div className="flex justify-between items-center h-full pl-3 ">
            <h2 className="text-purple-900 text-xl">Property Manager</h2>
            <div className="bg-purple-700 text-white p-2 px-4 rounded-full hover:scale-105 duration-150 ease-in-out">
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="flex items-center gap-2"
              >
                Add Property
                <FaPlus />
              </button>
              <CreateProperty
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstateManagement;
