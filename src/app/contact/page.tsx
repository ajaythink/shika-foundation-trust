import Link from "next/link";
import VisitUsHere from "./VisitUsHere";

export default function Contact() {
  return (
    <div>
      <div className="md:m-6 lg:m-10">
        <div className="w-full  bg-green-50 p-10 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
            CONTACT US
          </h1>
          <nav className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4 uppercase">
              <Link
                href="/"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Home
              </Link>
              <span
                aria-hidden="true"
                className="text-sm font-medium text-gray-500"
              >
                /
              </span>
              <a
                href="/about"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                About
              </a>
              <span
                aria-hidden="true"
                className="text-sm font-medium text-gray-500"
              >
                /
              </span>
              <a
                href="#"
                aria-current="page"
                className="text-sm font-medium text-indigo-600"
              >
                CONTACT US
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pag-4 lg:px-10 px-4 py-10">
        <div>
          <h1 className="font-bold text-xl">All General Queries</h1>
          <p className="text-black/70 pb-4">info@shikafoundationtrust.org</p>
          <p className="font-bold text-xl">Donation Related Queries</p>
          <p className="font-bold text-xl py-2">FOR NEW DONORS</p>
          <p className="text-black/70 pb-4">Vivek Kumar – 9431869421</p>
          <p className="text-black/70">donation@shikafoundationtrust.org</p>
          <p className="font-bold text-xl py-2">FOR EXISTING DONORS</p>
          <p className="text-black/70">Vivke Kumar – 9431869421</p>
          <p className="text-black/70">donorcare@shikafoundationtrust.org</p>
          <p className="font-bold text-xl py-2">FOR MEDIA-RELATED QUERIES</p>
          <p className="text-black/70">Write to Ajay Kumar at</p>
          <p className="text-black/70">ajay@shikafoundationtrust.email</p>
        </div>
        <div>
          <h1 className="font-bold text-xl uppercase">Helpdesk</h1>
          <p>For any grievance, suggestions and queries kindly write to us.</p>
          <form action="#">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4">
              <div className="sm:col-span-2 ">
                <label htmlFor="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full border border-green-800 rounded-md bg-white px-5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone">Phone</label>
                <div>
                  <input
                    type="text"
                    className="w-full border border-green-800 rounded-md bg-white px-5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type="text"
                    className="w-full border border-green-800 rounded-md bg-white px-5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message">Message</label>
                <div>
                  <textarea
                    className="w-full border border-green-800 rounded-md bg-white px-5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                    
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button className="w-full bg-green-600 text-white px-5 py-2 rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <VisitUsHere />
    </div>
  );
}
