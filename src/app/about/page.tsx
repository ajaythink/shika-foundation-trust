// import Image1 from "/OurProgrammes/Women.png";
// import Mission from "/about/mission.jpg";
// import Vision from "/about/vision.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="w-full relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/uploads/Banner4-1.webp"
          fill
          
          alt="Image"
        />
      </div>
      <div className="px-5 lg:px-32">
        <div className=" py-10 text-xl  text-gray-800 pb-10">
          <p>
            Shika Foundation was initiated in 2018 when a group of friends came
            together with the intention of giving back to the society. They were
            inspired by the thought and philosophy of Peter Senge, the founder
            of the Society for Organizational Learning who has propagated that
            “sustainability, social equality and the environment are now
            business problems…” and corporate leaders can’t expect governments
            to solve them alone.
          </p>
          <p className="mt-2 lg:mt-5">
            What triggered these thoughts was the liberalisation of the Indian
            economy in the 1990’s which brought with it immense opportunities.
            Business revived, and India became not just a market, but also an
            investment prospect for the developed world. Disposable incomes and
            early settlements became a living reality for the working
            middle-class. For the first time in India, professionals could think
            beyond making a living, and contribute towards the society.
          </p>
        </div>
        {/* mission */}
        <div>
          <div className="text-center text-3xl font-bold py-4">OUR MISSION</div>
          <div className="md:grid md:grid-cols-2 gap-4">
            <div className="md:py-0">
              <Image
                src="/about/mission.jpg"
                width={400}
                height={400}
                alt="mission"
              />
            </div>
            <div className="py-6 md:py-0 text-xl text-gray-800 ">
              At Shika Foundation Trust, our mission is to empower communities,
              uplift the underprivileged, and foster sustainable development
              across India. We are committed to transforming lives by promoting
              education, healthcare, women empowerment, environmental
              conservation, economic development, and social welfare. Our goal
              is to create a society where every individual, regardless of
              caste, gender, or financial status, has access to opportunities
              for growth, dignity, and prosperity.
            </div>
          </div>
        </div>
        <div className="py-7">
          <div className="text-center text-3xl font-bold py-4">OUR VISION</div>
          <div className="md:grid md:grid-cols-2 gap-4">
            <div className="md:py-0  md:hidden">
              <Image
                src="/about/vision.jpg"
                width={400}
                height={400}
                alt="vision logo"
              />
            </div>
            <div className="py-6 md:py-0 text-xl text-gray-800 ">
              At Shika Foundation Trust, our vision is to create a just,
              equitable, and empowered society where every individual,
              regardless of their background, has access to education,
              healthcare, and opportunities for a dignified life. We aspire to
              build a self-reliant and sustainable future by addressing the root
              causes of poverty, illiteracy, and social injustice. We envision a
              world where every child receives quality education, women are
              empowered to lead independent lives, and communities thrive with
              access to essential resources. Our goal is to promote economic
              development, social inclusion, and environmental sustainability
              through impactful initiatives.
            </div>
            <div className="md:py-0 hidden md:block">
              <Image
                src="/about/vision.jpg"
                width={400}
                height={400}
                alt="vision logo"
              />
            </div>
          </div>
        </div>
        <div className="py-7">
          <div className="text-center text-3xl font-bold py-4">
            WHY TRUST US?
          </div>
          <div className="text-center">
            {/* <div className="md:py-0  md:hidden">
                    <img src={Image1} alt="vision logo" />
                  </div> */}
            <div className="py-6 md:py-0 text-xl text-gray-800 md:pb-8">
              At Shika Foundation Trust, we are committed to transparency,
              accountability, and impactful social work. Our trust is built on
              the foundation of integrity, dedication, and a genuine desire to
              serve communities in need. We work tirelessly to uplift
              underprivileged individuals, ensuring access to education,
              healthcare, employment, and social welfare programs. Our team
              comprises experienced professionals, social workers, and
              volunteers who are passionate about making a difference. Every
              initiative we undertake is well-planned, result-oriented, and
              aimed at creating long-term positive change. We maintain financial
              transparency by ensuring that every donation and fund is used
              effectively for the intended cause. We have a proven track record
              of implementing successful programs in areas ...
            </div>
            <Link
              href="/about/why_trust_us"
              className="border border-green-800 text-green-500 hover:bg-green-50 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
