"use client"


import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Volunteer(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

Volunteer.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className=" flex place-content-center p-5 md:p-8 lg:p-10 "
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Volunteer verification" {...a11yProps(0)} />
            <Tab label="Our Volunteer" {...a11yProps(1)} />
            <Tab label="Registration Form" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Volunteer value={value} index={0}>
          <VolunteerVerification />
        </Volunteer>
        <Volunteer value={value} index={1}>
          <OurVolunteer />
        </Volunteer>
        <Volunteer value={value} index={2}>
          <RegistrationForm />
        </Volunteer>
      </Box>
    </>
  );
}

const VolunteerVerification = () => {
  return (
    <>
      <div>
        <div className="mx-auto mt-4 max-w-xl sm:mt-10 border p-5 rounded-xl">
          <h2 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
            Volunteer verification
          </h2>
          <label
            htmlFor="Volunteer id"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Volunteer ID
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 focus:outline-green-600"
            />
          </div>

          <label className="text-sm/6 font-semibold text-gray-900 ">
            Date of birth
          </label>
          <div className="mt-2.5">
            <input
              htmlFor="dob"
              type="date"
              className="w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-400 focus:-outline-1 focus:-outline-offset-1 focus:outline-green-600"
            />
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className=" w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { VolunteerVerification };

import PersonIcon from "@mui/icons-material/Person";
const OurVolunteer = () => {
  return (
    <>
      <div>
        <h1 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
          Our Volunteer
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
          <div className="w-50 h-60  sm:w-60 sm:h-70 ">
            <div className="w-50 h-60 border text-center">
              {/* <img src="#" alt="person" /> */}
              <PersonIcon sx={{ fontSize: 200 }} />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Volunteer</p>
          </div>
          <div className="w-60 h-70  ">
            <div className="w-60 h-60 border text-center">
              {/* <img src="#" alt="person" /> */}
              <PersonIcon sx={{ fontSize: 200 }} />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Volunteer</p>
          </div>
          <div className="w-60 h-70  ">
            <div className="w-60 h-60 border text-center">
              {/* <img src="#" alt="person" /> */}
              <PersonIcon sx={{ fontSize: 200 }} />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Volunteer</p>
          </div>
          <div className="w-60 h-70  ">
            <div className="w-60 h-60 border text-center">
              {/* <img src="#" alt="person" /> */}
              <PersonIcon sx={{ fontSize: 200 }} />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Volunteer</p>
          </div>
        </div>
      </div>
    </>
  );
};
export { OurVolunteer };

const RegistrationForm = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
            Registration Form
          </h1>
          <form action="#" method="post">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-10 md:px-20 lg:px-32">
              <div className="">
                <label
                  htmlFor="first-name"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    name="first-name"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="middle-name"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Middle name
                </label>
                <div className="mt-2.5">
                  <input
                    name="middle-name"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="Last-name"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    name="Last-name"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="mobile"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-2.5">
                  <input
                    name="mobile"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2.5">
                  <input
                    name="address"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="state"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  State
                </label>
                <div className="mt-2.5">
                  <input
                    name="state"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="city"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  City
                </label>
                <div className="mt-2.5">
                  <input
                    name="city"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="pincode"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Pincode
                </label>
                <div className="mt-2.5">
                  <input
                    name="pincode"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="country"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2.5">
                  <input
                    name="country"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    name="email"
                    type="email"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              {/* Register button */}
              <div className="mt-10 sm:col-span-3">
                <button
                  type="submit"
                  className=" w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
