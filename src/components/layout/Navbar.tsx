"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoReorderThree } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const NavigationMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/campaign", label: "Campaign" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/member", label: "Member" },
    { href: "/media", label: "Media" },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.label}
              onClick={closeMenu}
              className={`
              block py-3 pr-4 rounded-sm text-center ${
                pathname === item.label
                  ? "bg-orange-700 text-white"
                  : "text-gray-700"
              } hover:bg-gray-200`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/campaign", label: "Campaign" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/member", label: "Member" },
    { href: "/media", label: "Media" },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      <div className="bg-gray-200 shadow sticky z-50 top-0">
        <nav className=" bg-transparent border-gray-200 py-2.5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto px-5 md:px-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/shikalogo.png"
                alt="Org logo"
                className="mr-5 rounded-lg scale-105"
                width={100}
                height={100}
              />
            </Link>
            <div className="flex justify-between lg:flex lg:items-center lg:order-2">
              <Link
                href="/auth/login"
                className="text-gray-800   bg-white/40 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hidden lg:block"
              >
                Log In
              </Link>
              <Link
                href="/campaign/Donate_For_Health"
                className="
        inline-flex items-center gap-2 rounded-full
        px-7 py-3 text-lg font-extrabold
        text-white 
        bg-gradient-to-r from-green-700 via-green-500 to-orange-400
        shadow-lg 
        transition transform duration-300
        hover:scale-105 hover:shadow-2xl hover:from-green-800 hover:to-orange-500
        focus:outline-none focus:ring-4 focus:ring-green-200
       
      "
                style={{
                  letterSpacing: "0.05em",
                  boxShadow:
                    "0 6px 32px 0 rgba(35,150,83,0.24), 0 1.5px 8px 0 rgba(255,167,38,0.10)",
                }}
              >
                <span className="animate-ping-slow relative flex h-6 w-6 mr-1">
                  <FaHeart className="absolute text-orange-400 text-xl drop-shadow-heart" />
                  <FaHeart className="text-white text-xl opacity-60" />
                </span>
                Donate Now
              </Link>

              {/* <Link
                href="#"
                className=" animate-pulse text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg px-1 lg:px-4 lg-px-5 py-2 lg:py-2.5 focus:outline-none"
              >
                Donate Now
              </Link> */}
              <div className="lg:hidden">
                <IoReorderThree
                  className="text-5xl cursor-pointer pl-4"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>
            </div>
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md">
                <NavigationMenu closeMenu={closeMenu} />
              </div>
            )}
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 bg-gray-100 p-4 rounded-2xl">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-2 pr-4 pl-3 duration-200 ${
                        pathname === link.href
                          ? "text-orange-700"
                          : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export { NavigationMenu };
