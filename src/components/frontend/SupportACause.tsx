"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";
import Image from "next/image";
const SupportACausePage = [
  {
    id: 1,
    title: "Health can't wait",
    imgurl: "/SupportACausePage/Healthcantwait.webp", // WHY random image is not coming?
    description:
      "Health can't wait is a campaign that aims to provide healthcare to the underprivileged.",
    donate: "/campaign/Donate_For_Health",
    learnMore: "/campaign/Donate_For_Health",
  },
  {
    id: 2,
    title: "Tayari Kal Ki",
    imgurl: "/SupportACausePage/TayariKalKi.webp",
    description:
      "Tayari Kal Ki is a campaign that aims to provide education to the underprivileged.",
    donate: "/DonateForEducation",
    learnMore: "/DonateForEducation",
  },
  {
    id: 3,
    title: "SHIKSHA NA RUKE",
    imgurl: "/SupportACausePage/SHIKSHANARUKE.webp",
    description:
      "SHIKSHA NA RUKE is a campaign that aims to provide education to the underprivileged.",
    donate: "/campaign/Donate_For_Health",
    learnMore: "/campaign/Donate_For_Health",
  },
  {
    id: 4,
    title: "SHE CAN FLY",
    imgurl: "/SupportACausePage/SHECANFLY.webp",
    description:
      "SHE CAN FLY is a campaign that aims to provide education to the underprivileged.",
    donate: "/DonateForEducation",
    learnMore: "/DonateForEducation",
  },
];

function SupportACause() {
  // const swiperRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="px-5 lg:px-20 py-5">
      <h1 className="text-4xl font-semibold text-center p-5">
        Support A Cause
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {SupportACausePage.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="rounded-xl shadow">
              <a href={card.donate}>
                <Image
                  src={card.imgurl}
                  alt="Support A Cause"
                  width={400}
                  height={300}
                  className="rounded-xl w-full h-[300px] cursor-pointer brightness-100 hover:brightness-90 "
                />
              </a>

              <div className="p-3">
                <p className="text-xl md:text-2xl lg:text-3xl text-green-400 underline uppercase font-bold pb-5">
                  {card.title}
                </p>
                <p className="text-black/75 sm:text-xl">{card.description}</p>
                <div className="flex justify-between mt-5">
                  <a
                    href={card.donate}
                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none"
                  >
                    Donate
                  </a>
                  <a
                    href={card.learnMore}
                    className="text-green-500 hover:bg-green-50 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  );
}

export default SupportACause;
