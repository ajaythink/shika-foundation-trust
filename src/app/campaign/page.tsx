import SupportACause from "@/components/frontend/SupportACause";
import Link from 'next/link'

export default function Campaign() {
  return (
    <div>
      {/* <h1>this page for Campiagn</h1> */}
      <div className="md:m-6 lg:m-10">
        <div className="w-full  bg-green-50 p-10 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase ">
            Campaign
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
                Campaign
              </a>
            </div>
          </nav>
        </div>
      </div>
      <SupportACause />
    </div>
  );
}
