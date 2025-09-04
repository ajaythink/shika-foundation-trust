"use client"
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from 'next/image'

//donate component
// import * as React from "react";
// import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// import  Label   from '@headlessui/react'
 const Donation_Form =()=> {
  return (
    <div className="block sm:flex-none rounded-lg shadow-lg bg-green-50 p-5 border border-green-600">
      {/* card */}
      <h2 className="text-center  text-green-700 text-xl font-bold">
        SUPPORT A CAUSE
      </h2>
      <BasicTabs />
    </div>
  );
}

export default Donation_Form;
type DonateProps = {
  children: React.ReactNode;
  value: number;
  index: number;
  [key: string]: any;
};

const Donate = ({ children, value, index, ...other }: DonateProps) => {
  // function Donate(props) {
  // const { children, value, index, ...other } = props;

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
};
const BasicTabs = () => {
  const [value, setValue] =  useState(0);

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
            <Tab label="Donation Form" {...a11yProps(0)} />
            <Tab label="Bank Details" {...a11yProps(1)} />
            {/* <Tab label="Registration Form" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <Donate value={value} index={0}>
          <DonationForm />
        </Donate>
        <Donate value={value} index={1}>
          <BankDetails />
        </Donate>
        {/* <Donate value={value} index={2}>
          <RegistrationForm />
        </Donate> */}
      </Box>
    </>
  );
};


function a11yProps(index:number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//donation form

const DonationForm = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  type DonationOption = {label:string; value:number}
  const [data, setDate] = useState([
    {
      label: "Donate for Education",
      value: 0,
    },
    {
      label: "Donate for Health",
      value: 1,
    },
    {
      label: "Donate for Environment",
      value: 2,
    },
    {
      label: "Donate for Women Empowerment",
      value: 3,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DonationOption | null>(null);
  const toggleDirection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div>
          {/* <h1 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
            Registration Form
          </h1> */}
          <form action="#" method="post">
            <div className="gap-4 px-2  ">
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

              <div className="relative mt-2.5">
                <label
                  htmlFor="cause"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Select a cause
                </label>
                <div
                  className="p-2  pr-6 rounded bg-white cursor-pointer"
                  onClick={toggleDirection}
                >
                  {selectedOption?.label || "Select a cause"}
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer"
                  onClick={toggleDirection}
                >
                  {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div
                  className={`absolute top-[105%] w-60 ${
                    isOpen ? "max-h-60" : "max-h-0"
                  } overflow-hidden duration-150 ease-in-out`}
                >
                  <div>
                    {data &&
                      data.map((item, index) => (
                        <div key={index}>
                          <div
                            className={`border-b p-2 text-black hover:bg-gray-300 cursor-pointer ${
                              index % 2 === 0 ? "bg-gray-200" : "bg-white"
                            }
                      ${
                        index === 0
                          ? "rounded-t"
                          : index == data.length - 1
                          ? "rounded-b"
                          : "rounded-none"
                      }`}
                            onClick={() => {
                              setSelectedOption(item);
                              toggleDirection();
                            }}
                          >
                            {item.label}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mr-2"
                  />
                  Do you want Tax Benefits?
                </label>
                {isChecked ? <AdditionalInfo /> : null}
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
//bank details
const BankDetails = () => {
  return (
    <>
      {/* support directly and get tax benefits take the screenshot and give the reason */}
      <h1 className="text-center pb-5 italic font-bold text-green-500">
        {/* write here term and condition if dononer if supporting though the QR code they should be share with us transaction screenshot and reason and personal details then only we will be able to give them tax benefits */}
        Bank Details for Direct Donation
      </h1>
      <ul>
        <li className="text-lg font-semibold">Account Name: </li>
        <li className="text-lg">M/S.SHIKA FOUNDATION TRUST</li>
        <li className="text-lg font-semibold">Account Number: </li>

        <li className="text-lg">046505003829</li>

        <li className="text-lg font-semibold">IFSC Code: </li>
        <li className="text-lg">ICIC0000465</li>

        <li className="text-lg font-semibold">Bank Name: </li>
        <li className="text-lg">ICICI Bank</li>
        <li className="text-lg font-semibold">Branch: </li>
        <li className="text-lg">BUXAR BRANCH, PP ROAD, SAHU COMPLEX, 802101</li>
      </ul>
      <h1 className="text-center pb-5 italic font-bold text-green-500">
        Scan the QR code to donate directly to our bank
        <br /> account and get tax benefits
      </h1>
      <p>Note:</p>
      <p className="text-sm">
        1. If you are donating through the QR code, please share the screenshot
        of the transaction with us along with your personal details and reason
        for donation. This is necessary for us to provide you with tax benefits.{" "}
        <br />
        Email ID: donate@shikafoundationtrust.in
      </p>
      <Image
        src="/QRCode.jpg"
        alt="qrcode"
        width={300}
        height={400}
        className="w-72 border-2 border-green-600 rounded-lg mx-auto"
      />
    </>
  );
};

const AdditionalInfo = () => {
  return (
    <>
      <div className="">
        <label
          htmlFor="aadhaar"
          className=" block text-sm/6 font-semibold text-gray-900"
        >
          Aadhaar No
        </label>
        <div className="mt-2.5">
          <input
            name="aadhaar"
            type="text"
            className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="pan"
          className=" block text-sm/6 font-semibold text-gray-900"
        >
          PAN Card
        </label>
        <div className="mt-2.5">
          <input
            name="pan"
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
      <div>
        <p className="text-xs pt-5">
          YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION
          80G AS SMILE FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION &#34;
          PAN: AACTS7973G | 80G NUMBER: AACTS7973GF20210
        </p>
      </div>
    </>
  );
};
export { AdditionalInfo };
