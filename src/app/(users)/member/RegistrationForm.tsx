
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

export default RegistrationForm ;