import React, { useState, useEffect } from "react";
import axios from "axios";
import constants from "../../../components/Constant";
import { Select, Option, Input } from "@material-tailwind/react";

const UpdateClient = () => {
//   const [firstName, setFirstName] = useState("");
//   const [middleName, setMiddleName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [contactNumber, setContactNumber] = useState(null);
//   const [email, setEmail] = useState("");
//   const [property, setProperty] = useState([]);
//   const [monthlySalary, setMonthlySalary] = useState(null);
//   const [status, setStatus] = useState(null);
  const [item, setItem] = useState([]);
  const [update, setUpdate] = useState({});

  const formEndpoint = `${constants.ENDPOINT}/api/inquiries/`;

  useEffect(() => {
    index();
  }, []);

  async function index(id) {
    await axios
      .get(formEndpoint + id)
      .then((response) => {
        setItem(response.data.data);
        console.log(response)
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <div className="absolute ml-[335px] -mt-[660px]">
      <div>
        <h1>Update Status</h1>
        
        <form action="">
          <div className="grid grid-cols-2 gap-3">
            <div>
              {/* First Name */}
              <div className="pb-2">
                <label
                  htmlFor="firstName"
                  className="text-md font-semibold pl-2"
                >
                  First Name
                </label>
              </div>
              <div className="pb-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  // value={firstName}
                  className="pl-3 w-full h-10 rounded-2xl pr-3"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="pb-2">
              {/* Middle Name */}
              <div className="pb-2">
                <label
                  htmlFor="middleName"
                  className="text-md font-semibold pl-2"
                >
                  Middle Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  // value={middleName}
                  className="pl-3 w-full h-10 rounded-2xl pr-3"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              {/* First Name */}
              <div className="pb-2">
                <label
                  htmlFor="lastname"
                  className="text-md font-semibold pl-2"
                >
                 Last Name
                </label>
              </div>
              <div className="pb-2">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  // value={lastname}
                  className="pl-3 w-full h-10 rounded-2xl pr-3"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="pb-2">
              {/* Contact Number */}
              <div className="pb-2">
                <label
                  htmlFor="contactnumber"
                  className="text-md font-semibold pl-2"
                >
                 Contact Number
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="contactnumber"
                  id="contactnumber"
                  // value={contactnumber}
                  className="pl-3 w-full h-10 rounded-2xl pr-3"
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              {/* Email */}
              <div className="pb-2">
                <label
                  htmlFor="email"
                  className="text-md font-semibold pl-2"
                >
                  Email
                </label>
              </div>
              <div className="pb-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value={email}
                  className="pl-3 w-full h-10 rounded-2xl pr-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="pb-2">
              {/* Status */}
              <div className="pb-2">
                <label
                  htmlFor="status"
                  className="text-md font-semibold pl-2"
                >
                  Status
                </label>
              </div>
              <div>
                <input
                  type="number"
                  name="status"
                  id="status"
                  // value={status}
                  className="pl-3 w-full h-10 rounded-2xl pr-3"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClient;
