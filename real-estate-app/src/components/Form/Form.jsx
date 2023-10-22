import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import constants from "../Constant";
import Logo from "./img/LOGO-NAME.svg";

const Form = () => {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [contactNumber, setContactNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [monthlySalary, setMonthlySalary] = useState(0);

  const formEndpoint = `${constants.ENDPOINT}/api/inquiries`;

  async function storeInquiries(e) {
    e.preventDefault();

    const payload = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      birth_date: birthDate,
      contact_number: contactNumber,
      email: email,
      property_id: value,
      monthly_salary: monthlySalary
    }

    await axios.post(formEndpoint, payload)
    .then((response) => {
      console.log(response.data)
      alert('Inquiry Sent Successfully!')
    })
    .catch((error) => {
      console.error(error);
      alert('Sending Failed.')
    });
  }


  return (
    <>
      <h2 className="text-2xl md:lg:text-3xl font-bold text-gray-900 text-center pt-3">
        INQUIRY FORM
      </h2>
      <div id="form" className="py-5 flex justify-center ">
        <form className="bg-white rounded-xl p-6 w-full m-5 border-2 drop-shadow-2xl md:lg:w-1/2">
          <div className="flex justify-between items-center pb-3">
            <h2 className=" text-2xl font-bold pb-3">Inquire Now!</h2>
            <img src={Logo} alt="" width={100} />
          </div>
          <p>
            This form inquiry form help us know if you are interested to buying
            a property. Fill out this inquiry form to connect with us. After you
            enter personal and contact information we will do our best to reach
            you out and help you in choosing or buying a Property.
          </p>
          <br />
          <div className=" grid md:lg:grid-cols-2 md:lg:pt-1 md:lg:gap-4">
            <div className="pt-3 pb-1">
              <label htmlFor="firstname" className="font-semibold">
                First Name
              </label>
              <div className="pt-1">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your First Name"
                  required
                  autoComplete="true"
                  className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg"
                  onChange={(e) => setFirstName(e.target.value)}

                />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <label htmlFor="middlename" className="font-semibold">
                Middle Name
              </label>
              <div className="pt-1">
                <input
                  type="text"
                  name="middlename"
                  id="middlename"
                  placeholder="Enter your Middle Name"
                  required
                  autoComplete="true"
                  className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold pb-1 pt-3">
              <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your Last Name"
                required
                autoComplete="true"
                className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className=" grid md:lg:grid-cols-2 md:lg:pt-1 md:lg:gap-4">
            <div className="pt-3 pb-1">
              <label htmlFor="birthdate" className="font-semibold">
                Birth Date
              </label>
              <div className="pt-1">
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  placeholder="Enter your Birth Date"
                  required
                  autoComplete="true"
                  className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <label htmlFor="number" className="font-semibold">
                Contact Number
              </label>
              <div className="pt-1">
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Enter your Contact Number"
                  required
                  autoComplete="true"
                  className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg"
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="pt-3 pb-1 font-semibold">
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex. yourname@gmail.com"
                required
                autoComplete="true"
                className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div className=" grid md:lg:grid-cols-2 md:lg:pt-1 md:lg:gap-4">
            <div className="pt-3 pb-1">
              <label htmlFor="location" className="font-semibold">
                Location of Property
              </label>
              <div className="pt-1">
                <select
                  id="location"
                  name="location"
                  required
                  className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg text-gray-500"
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                >
                  <option value="">Select a Location...</option>
                  <option value="">Meycauayan Bulacan</option>
                  <option value="">Marilao Bulacan</option>
                  <option value="">Santa Maria Bulacan</option>
                  <option value="">Pandi Bulacan</option>
                  <option value="">Metro Manila</option>
                  <option value="">Cavite</option>
                </select>
              </div>
            </div>
            <div className="pt-3 pb-1 ">
              <label htmlFor="salary" className="font-semibold">
                Monthly Salary
              </label>
              <div className="pt-1">
                <input
                  type="text"
                  name="salary"
                  id="salary"
                  placeholder="Enter your Monthly Salary"
                  required
                  autoComplete="true"
                  className="w-full h-10 border-2 border-purple-400 p-2 rounded-lg text-gray-500"
                  onChange={(e) => setMonthlySalary(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              id="FormSubmit"
              className="bg-purple-700 rounded-lg w-1/3 mt-2 py-2 text-white hover:bg-purple-900 hover:-shadow-lg ease-in-out duration-500"
              onClick={storeInquiries}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
