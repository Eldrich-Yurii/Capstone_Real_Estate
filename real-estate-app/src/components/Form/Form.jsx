import React from "react";
import { useState, useEffect } from "react";
import { Select, Option, Input } from "@material-tailwind/react";
import axios from 'axios';
import constants from "../Constant";
import Logo from "./img/LOGO-NAME.svg";

const Form = () => {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState("");
  const [property, setProperty] = useState([]);
  const [monthlySalary, setMonthlySalary] = useState(null);
  const [status, setStatus] = useState(1);

  const formEndpoint = `${constants.ENDPOINT}/api/inquiries`;
  const propertyDropDown = `${constants.ENDPOINT}/api/properties`;
  async function storeInquiries(e) {
    e.preventDefault();

    const payload = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      birth_date: birthDate,
      contact_number: contactNumber,
      email: email,
      // property_id: property,
      monthly_salary: monthlySalary,
      status_id: status
    }

    await axios.post(formEndpoint, payload)
    .then((response) => {
      console.log(response.data)
      alert('Inquiry Sent Successfully!')
    })
    .catch((error) => {
      console.log(error);
      alert('Sending Failed.')
    });
  }

  useEffect(() => {
    index();
  }, []);

  async function index() {
    await axios.get(propertyDropDown)
      .then((response) => {
        setProperty(response.data.data);
      })
      .catch((response) => {
        console.log(response);
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
                <Input
                  color="purple"
                  label="Enter Your First Name"
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  autoComplete="true"
                  className="w-full h-10 p-2 rounded-lg"
                  onChange={(e) => setFirstName(e.target.value)}

                />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <label htmlFor="middlename" className="font-semibold">
                Middle Name
              </label>
              <div className="pt-1">
                <Input
                  color="purple"
                  label="Enter your Middle Name"
                  type="text"
                  name="middlename"
                  id="middlename"
                  required
                  autoComplete="true"
                  className="w-full h-10  p-2 rounded-lg"
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
              <Input
                color="purple"
                label="Enter your Last Name"
                type="text"
                name="lastname"
                id="lastname"
                required
                autoComplete="true"
                className="w-full h-10 p-2 rounded-lg"
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
                <Input
                color="purple"
                label="Enter your birth date"
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  placeholder="Enter your Birth Date"
                  required
                  autoComplete="true"
                  className="w-full h-10 border-1 p-2 rounded-lg"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <label htmlFor="number" className="font-semibold">
                Contact Number
              </label>
              <div className="pt-1">
                <Input
                  color="purple"
                  label="Enter your Contact Number"
                  type="text"
                  name="number"
                  id="number"
                  required
                  autoComplete="true"
                  className="w-full h-10 p-2 rounded-lg"

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
              <Input
                color="purple"
                label="Ex. yourname@gmail.com"
                type="email"
                name="email"
                id="email"
                required
                autoComplete="true"
                className="w-full h-10  p-2 rounded-lg"
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
                <Select color="purple" label="Location Of Property" id="location" name="location" required className="w-full h-10 p-2 rounded-lg text-gray-500"
                  value={property} onChange={(e) => setProperty(e.target.value)}>
                  {property.map((property) => (
                    <Option key={property.id} value={property.id}>{property.name} - {property.city}, {property.province}</Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="pt-3 pb-1 ">
              <label htmlFor="salary" className="font-semibold">
                Monthly Salary
              </label>
              <div className="pt-1">
                <Input
                  color="purple"
                  label="Enter your Monthly Salary"
                  type="number"
                  name="salary"
                  id="salary"
                  required
                  autoComplete="true"
                  className="w-full h-10 p-2 rounded-lg text-gray-500"
                  onChange={(e) => setMonthlySalary(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="pt-3 pb-1 ">
              <label htmlFor="status" className="font-semibold">
               Status:
              </label>
              <div className="pt-1">
                <Input
                  type="number"
                  name="status"
                  id="status"
                  value={status}
                  disabled
                  autoComplete="true"
                  className="w-full h-10 p-2 rounded-lg text-gray-500"
                  onChange={(e) => setStatus(e.target.value)}
                />
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
