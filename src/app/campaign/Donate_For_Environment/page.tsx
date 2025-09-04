import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";

import DonationForm1 from "@/app/campaign/DonationForm1";

const Donate_For_Environment = () => {
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
          {/* <div className="p-5 rounded-lg shadow-lg bg-white border border-green-600 ">
            <h1 className="text-3xl text-green-700 text-center pb-4">
              Why Environment important
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
          </div> */}
          <div className="p-6 bg-green-50 rounded-lg border border-green-400 shadow mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
              पर्यावरण क्यों महत्वपूर्ण है? /{" "}
              <span className="italic">Why Environment is Important?</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              <b>पर्यावरण</b> हमें <b>शुद्ध वायु (pure air)</b>,{" "}
              <b>स्वच्छ पानी (clean water)</b>, और <b>खाद्य पदार्थ (food)</b>{" "}
              देता है। यदि पर्यावरण दूषित हो जाए, तो मानव जीवन, पशु-पक्षी,
              पेड़-पौधे सभी को खतरा होता है।
              <br />
              <br />
              <b>
                Environment provides us with resources essential for our
                survival
              </b>{" "}
              such as{" "}
              <b>clean air, fresh water, fertile soil, and biodiversity</b>.
              <br />
              <br />
              <b>पर्यावरण का संतुलन</b> बिगड़ने पर प्राकृतिक आपदाएँ, बिमारियाँ,
              और जलवायु परिवर्तन जैसी समस्याएँ तेजी से बढ़ जाती हैं।
              <br />
              <br />
              <b>Therefore, protecting the environment</b> is not just a
              responsibility, but a necessity for healthy and happy life for
              ourselves and future generations.
            </p>
          </div>
          {/* card */}
          {/* <div className="block sm:flex-none rounded-lg shadow-lg bg-green-50 p-5 border border-green-600">
            
            <h2 className="text-center  text-green-700 text-xl font-bold">
              SUPPORT A CAUSE
            </h2>
            <BasicTabs />
          </div> */}
          <DonationForm1 />
        </div>
      </div>
    </>
  );
};

export default Donate_For_Environment;
