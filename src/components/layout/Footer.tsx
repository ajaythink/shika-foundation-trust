"use client";

import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 ">
        {/* we need create five section, horizontal wise ABOUT US, OUR WORK, CAMPAIGNS, GET INVOLVED, RESOURCE CENTRE.  after then we need to create sub section for each section. */}
        <div className="bg-gray-800 text-gray-500 text-center pt-4 lg:flex lg:justify-between lg:ml-20 lg:mr-20 lg:pl-10 lg:pr-10 lg:pt-10 ">
          <div className="pb-4 bt-4 ">
            <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
              ABOUT US
            </p>
            <div className="pt-2">
              <Link href="/about">
                <p className="lg:pb-2">Our Mission</p>
              </Link>
              <Link href="/about">
                <p className="lg:pb-2">Our Vision</p>
              </Link>
              <Link href="/member">
                <p className="lg:pb-2">Our Team</p>
              </Link>
            </div>
          </div>
          <div className="pb-4 bt-4 ">
            <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
              OUR WORK
            </p>
            <div className="pt-2">
              <Link href="/campaign/Donate_For_Health">
                <p className="lg:pb-2">Education</p>
              </Link>
              <Link href="/campaign/Donate_For_Health">
                <p className="lg:pb-2">Health</p>
              </Link>
              <Link href="/campaign/Donate_For_Environment">
                <p className="lg:pb-2">Environment</p>
              </Link>

              {/* <p className="lg:pb-2">Health</p> */}
            </div>
          </div>
          <div className="pb-4 bt-4 ">
            <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
              GET INVOLVED
            </p>
            <div className="pt-2">
              <Link href="/campaign">
                <p className="lg:pb-2">Donate</p>
              </Link>

              <Link href="/volunteer">
                <p className="lg:pb-2">Volunteer</p>
              </Link>
              <Link href="/internship">
                <p className="lg:pb-2">Internship</p>
              </Link>
              {/* <Link to="/work-with-us">
            <p className="lg:pb-2">Work with Us</p>
            </Link>

            <Link to="/join-our-team">
            <p className="lg:pb-2">Join Our Team</p>
            </Link>
             */}

              {/* <p className="lg:pb-2">Volunteer</p>

            <p className="lg:pb-2">Work with Us</p>

            <p className="lg:pb-2">Join Our Team</p>

            <p className="lg:pb-2">Internship</p> */}
            </div>
          </div>
          <div className="pb-4 bt-4 ">
            <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
              CAMPAIGNS
            </p>

            <div className="pt-2">
              {/* <Link to="/campiagn">
              <p className="lg:pb-2">Our Campaigns</p>
            </Link>
            <Link to="/back-to-school">
              <p className="lg:pb-2">Back to School</p>
            </Link>
            <Link to="/end-child-marriage">
              <p className="lg:pb-2">End Child Marriage</p>
            </Link>
            <Link to="/end-child-labour">
              <p className="lg:pb-2">End Child Labour</p>
            </Link> */}
              <Link href="/campaign/Donate_For_Environment">
                <p className="lg:pb-2">Aao Pedh Lagaye</p>
              </Link>

              {/* <p className="lg:pb-2">Back to School</p>
            <p className="lg:pb-2">End Child Marriage</p>
            <p className="lg:pb-2">End Child Labour</p>
            <p className="lg:pb-2">End Violence Against Children</p> */}
            </div>
          </div>
          <div className="pb-4 bt-4 ">
            <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
              RESOURCE CENTRE
            </p>
            <div className="pt-2">
              {/* <Link href="/blog">
                <p className="lg:pb-2">Blog</p>
              </Link> */}
              <Link href="/media">
                <p className="lg:pb-2">Media</p>
              </Link>
              <Link href="/financial">
                <p className="lg:pb-2">Financial</p>
              </Link>
              <Link href="/annual-report">
                <p className="lg:pb-2">Annual Report</p>
              </Link>
              <Link href="/privacy-policy">
                <p className="lg:pb-2">Privacy Policy</p>
              </Link>
              <Link href="/refund_policy_donations">
                <p className="lg:pb-2">Refund Policy (Donations)</p>
              </Link>
              {/* <p className="lg:pb-2">Publications</p>
            <p className="lg:pb-2">Research</p>
            <p className="lg:pb-2">Reports</p>
            <p className="lg:pb-2">Policy & Advocacy</p> 
            <p className="lg:pb-2">Media</p>*/}
            </div>
          </div>
        </div>
        <div className="lg:ml-20 lg:mr-20 lg:pl-10 lg:pr-10 lg:pt-10 p-4 text-justify bg-gray-800 text-gray-500 lg:flex gap-5">
          <div>
            <div className="lg:flex gap-5">
              {/* /trust logo */}
              <Image
                src="/shikalogo.png"
                alt="logo"
                width={250}
                height={250}
                className="rounded-lg"
              />
              {/* about to the trust */}
              <p>
                Shika Foundation is a non-profit organization that aims to
                provide education to children in need. We believe that every
                child has the right to education, regardless of their background
                or financial status. Our mission is to empower children through
                education and help them reach their full potential. We work with
                local communities, schools, and other organizations to provide
                quality education to children in need. Our programs focus on
                improving literacy rates, reducing dropout rates, and promoting
              </p>
            </div>

            {/* tust address */}
            <p className="text-center">
              <i className="fas fa-map-marker-alt"></i> 123, near Central bank,
              Dhansoi, buxar, Bihar, India, Contact Us: Tel: +91-94318 69421 |
              E-mail: info@shikafoundationtrust.in
            </p>
            {/* social media icons */}
            <div className="flex justify-center py-4 gap-2 ">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsDiscord className=" hover:bg-gray-300 hover:text-gray-700 text-3xl rounded"></BsDiscord>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noonpener noreferrer"
              >
                <FaFacebookSquare className=" hover:bg-gray-300 hover:text-gray-700 text-3xl rounded"></FaFacebookSquare>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className=" hover:bg-gray-300 hover:text-gray-700 text-3xl rounded"></FaInstagramSquare>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className=" hover:bg-gray-300 hover:text-gray-700 text-3xl rounded"></FaTwitterSquare>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareYoutube className=" hover:bg-gray-300 hover:text-gray-700 text-3xl rounded"></FaSquareYoutube>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className=" hover:bg-gray-300 hover:text-gray-700 text-3xl rounded"></FaLinkedin>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 text-black text-center text-xs p-3  bottom-0 w-full">
          <p>Shika Foundation &copy; 2018</p>
        </div>
      </footer>
    </>
  );
}
