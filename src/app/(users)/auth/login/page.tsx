"use client";
import Link from "next/link";
import Image from "next/image";
import ForgotPasswordModal from "@/components/frontend/ForgotPasswordModal";
import { useState } from "react";

export default function Login() {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <div className="blur-none w-full flex flex-col justify-center items-center  px-6 py-12 lg:px-8 bg-gradient-to-b from-green-200 to-green-600">
        <div className="rounded-lg z-10 !blur-none w-1/2 flex flex-col justify-center items-center p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
            <Image
              alt="Shika Foundation logo"
              src="/shikalogo.png"
              className="rounded-2xl"
              width={200}
              height={200}
            />
            <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Login
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <form action="dashboard.jsx" method="" className="space-y-6"> */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg  font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    // required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password1"
                    className="block  text-lg  font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <button
                      className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                      onClick={() => setShowForgot(true)}
                    >
                      Forgot password?
                    </button>
                    <ForgotPasswordModal
                      show={showForgot}
                      onClose={() => setShowForgot(false)}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    // required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border"
                  />
                </div>
              </div>

              <div>
                {/* Link to dashboard */}
                {/* <a href="/dashboard" className="font-semibold text-indigo-600 hover:text-indigo-500"></a> */}
                <Link
                  href={"/dashboard"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </div>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
          </div>
        </div>
        {/* {forgetPassword ? <ForgotPasswordModal /> : ""} */}
      </div>
    </>
  );
}
