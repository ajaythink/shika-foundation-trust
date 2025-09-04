"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import RegistrationForm from "./RegistrationForm";

interface MemberProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  [key: string]: any;
}

function Member(props: MemberProps) {
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

Member.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
            <Tab label="Member verification" {...a11yProps(0)} />
            <Tab label="Our Member" {...a11yProps(1)} />
            <Tab label="Registration Form" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Member value={value} index={0}>
          <MemberVerification />
        </Member>
        <Member value={value} index={1}>
          <OurMember />
        </Member>
        <Member value={value} index={2}>
          <RegistrationForm />
        </Member>
      </Box>
    </>
  );
}

const MemberVerification = () => {
  return (
    <>
      <div>
        <div className="mx-auto mt-4 max-w-xl sm:mt-10 border p-5 rounded-xl">
          <h2 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
            Member verification
          </h2>
          <label
            htmlFor="member id"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Member ID
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
            <label
              htmlFor="dob"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Date of birth
            </label>
            <input
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
export { MemberVerification };

import PersonIcon from "@mui/icons-material/Person";

const OurMember = () => {
  return (
    <>
      <div>
        <h1 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
          Our Member
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
          <div className="w-50 h-60  sm:w-60 sm:h-70 ">
            <div className="w-50 h-60 border text-center">
              {/* <img src="#" alt="person" /> */}
              <PersonIcon sx={{ fontSize: 200 }} />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Member</p>
          </div>
          <div className="w-60 h-70  ">
            <div className="w-60 h-60 border text-center">
              <Image
                src="/MemberVivek.png"
                alt="Ajay Kumar"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Member</p>
          </div>
          <div className="w-60 h-70  ">
            <div className="w-60 h-60 border text-center">
              <Image
                src="/MemberVivek.png"
                alt="Ajay Kumar"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Member</p>
          </div>
          <div className="w-60 h-70  ">
            <div className="w-60 h-60 border text-center">
              {/* <img src="#" alt="person" /> */}
              <PersonIcon sx={{ fontSize: 200 }} />
            </div>
            <p className="font-semibold text-center text-xl">Ajay Kumar</p>
            <p className="text-center ">Member</p>
          </div>
        </div>
      </div>
    </>
  );
};
export { OurMember };
