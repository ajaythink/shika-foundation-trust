"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";


const youtubeVideos = [
  { id: 1, url: "_DpK4SsvgC8" },
  { id: 2, url: "_DpK4SsvgC8" },
  { id: 3, url: "_DpK4SsvgC8" },
  { id: 4, url: "gDUgVb14E1Q" },
  { id: 5, url: "_DpK4SsvgC8" },
];

function StoryInMotion() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Function to stop autoplay when a video is clicked
  const handleVideoClick = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop(); // Stops autoplay when video is clicked
    }
  };

  return (
    <div className="p-4 md:px-20 py-5">
      <h1 className="text-4xl font-semibold text-center p-5">Story In Motion</h1>
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
        {youtubeVideos.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="rounded-xl ">
              <iframe
                className="rounded-xl w-full h-[250px] cursor-pointer"
                src={`https://www.youtube.com/embed/${card.url}?enablejsapi=1`} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onClick={handleVideoClick} // Stop autoplay when clicked
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StoryInMotion;
