import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import OurImpact from "@/components/frontend/OurImpact";
import OurProgram from "@/components/frontend/OurProgram";
import StoryInMotion from "@/components/frontend/StoryInMotion";
import SupportACausePage from "@/components/frontend/SupportACause";

const mockCarouselData = [
  {
    image: "/uploads/Banner1-scaled.webp",
    url: "#",
  },
  {
    image: "/uploads/EducationBanner2.png",
    url: "#",
  },
  {
    image: "/uploads/Banner4-1.webp",
    url: "#",
  },
  {
    image: "/uploads/EducationBanner1.png",
    url: "#",
  },
  {
    image: "/uploads/EducationBanner.png",
    url: "#",
  },
];

// E:\ShikaFoundationTrust\shika-foundation-trust\uploads\Banner1-scaled.webp
// E:\ShikaFoundationTrust\shika-foundation-trust\src\app\home\page.tsx
const HomePage = () => {
  return (
    <>
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {mockCarouselData.map((a, index) => (
          <div
            key={index}
            className="w-full relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
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
      <OurImpact />
      <OurProgram />
      <StoryInMotion />
      <SupportACausePage />
    </>
  );
};
export default HomePage;
