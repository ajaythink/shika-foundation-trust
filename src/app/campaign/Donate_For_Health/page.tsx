"use client";

import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
// import React, { useState } from "react";
import DonationForm1 from "@/app/campaign/DonationForm1";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Donate_For_Health = () => {
  const mockCarouselData = [
    {
      image: "/uploads/Banner1-scaled.webp",
      url: "#",
    },
    {
      image: "/uploads/Banner4-1.webp",
      url: "#",
    },
    {
      image: "/uploads/Banner1-scaled.webp",
      url: "#",
    },
    {
      image: "/uploads/Banner4-1.webp",
      url: "#",
    },
  ];
  return (
    <>
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {mockCarouselData.map((a, index) => (
          <div
            key={index}
            className="w-full relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <Image
              src={a.image}
              alt="photo"
              fill
              className="object-cover "
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
      <div>
        <div className="px-5 lg:px-20 py-10 grid md:grid-cols-2  gap-5 *:border *:rounded-lg">
          <div className="p-5 rounded-lg shadow-lg bg-white border border-green-600 ">
            <h1 className="text-3xl text-green-700 text-center pb-4">
              Why Health Cannot Wait
            </h1>
            <p>
              At <b> Shika Foundation Trust</b>, we believe that
              <b> good health is the foundation of a better life.</b> When
              people are healthy, they can work, learn, and take care of their
              families. But many people, especially in villages and poor areas,
              do not have access to medical care, medicines, or health
              education. That is why <b> health cannot wait</b>—we must act now
              to help those in need.
            </p>
            <h2 className="pt-4 font-bold">Our Efforts at Shika Foundation</h2>
            <ul className="list-disc pl-5 pt-2">
              <li>
                <b>Free Health Check-up Camps – </b>We organize regular free
                medical camps to help people get check-ups and early treatment
                for diseases. Recently, we provided free health check-ups and
                medicines to 187 people in Dhansoi.
              </li>
              <li>
                <b> Providing Free Medicines –</b> Many poor families cannot
                afford medicines. We give essential medicines for free to those
                who need them.
              </li>
              <li>
                <b> Health Awareness Programs –</b> We educate people about
                diseases, hygiene, nutrition, and family health so they can take
                better care of themselves.
              </li>
              <li>
                <b> Prevention is better than cure –</b> A little help today can
                save lives and reduce suffering in the future.
              </li>
            </ul>
            <p className="pt-4">
              At <b>Shika Foundation</b>, we believe that
              <b>no one should suffer because they cannot afford healthcare</b>.
              That is why we will
              <b>
                continue organizing free health camps, providing medicines, and
                spreading awareness.
              </b>
            </p>
            <p className="font-bold">
              Health cannot wait, and neither should we. Let’s work together for
              a healthier tomorrow!
            </p>
          </div>
          <DonationForm1 />
          {/* <div className="block sm:flex-none rounded-lg shadow-lg bg-green-50 p-5 border border-green-600">
             
            <h2 className="text-center  text-green-700 text-xl font-bold">
              SUPPORT A CAUSE
            </h2>
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Donate_For_Health;

