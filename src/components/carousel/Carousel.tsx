"use client";
// E:\ShikaFoundationTrust\shika-foundation-trust\src\components\carousel\Carousel.tsx
import { Children, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

interface CarouselProps {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const items = Children.toArray(children);
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr == items.length - 1 ? 0 : curr + 1));
  const prev = () =>
    setCurr((curr) => (curr == 0 ? items.length - 1 : curr - 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {/* {children} */}
          {items.map((child, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 p-2  cursor-pointer  -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 p-2 cursor-pointer   -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2 ">
            {items.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr == i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
