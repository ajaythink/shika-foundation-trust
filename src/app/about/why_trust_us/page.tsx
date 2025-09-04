import AccordionTransition from "../../about1/AccordionTransition";
 import Link from "next/link";

function Why_trust_us() {
  return (
    <div>
      {/* sub navigations from home to current page */}
      <div className="md:m-6 lg:m-10">
        <div className="w-full  bg-green-50 p-10 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
            GOOD GOVERNANCE
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
                GOOD GOVERNANCE
              </a>
            </div>
          </nav>
        </div>
        <div>
          <p className=" p-4 py-10 text-black/80">
            At Shika Foundation Trust, we are committed to transparency,
            accountability, and impactful social work. Our trust is built on the
            foundation of integrity, dedication, and a genuine desire to serve
            communities in need. We work tirelessly to uplift underprivileged
            individuals, ensuring access to education, healthcare, employment,
            and social welfare programs. Our team comprises experienced
            professionals, social workers, and volunteers who are passionate
            about making a difference. Every initiative we undertake is
            well-planned, result-oriented, and aimed at creating long-term
            positive change. We maintain financial transparency by ensuring that
            every donation and fund is used effectively for the intended cause.
            We have a proven track record of implementing successful programs in
            areas like women’s empowerment, skill development, environmental
            conservation, and disaster relief. Our strong community engagement
            model ensures that the beneficiaries are directly involved in
            shaping their own future. When you trust Shika Foundation Trust, you
            are supporting a reliable and ethical organization that prioritizes
            the well-being of society. We invite you to join hands with us in
            our mission to create a better, more inclusive, and empowered world
            for all. Together, we can bring hope and transform lives!
          </p>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl p-4 lg:p-10 font-bold">Registration Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 *:border *:border-green-400 gap-5 *:p-5 *:rounded-lg *:bg-green-50 px-5">
            <div>
              <p className="pb-10">
                Smile Foundation is registered with the Income Tax Department
                under Section 12A. The said certificate is valid till AY
                2026-27.
                <br />
              </p>
              <span className="font-bold">
                Registration No: AACTS7973GE20212
              </span>
            </div>
            <div>
              <p className="pb-10">
                Smile Foundation is registered with the Ministry of Home Affairs
                Foreigners Division (FCRA Wing), the Government of India. The
                renewed certificate is valid till 01/04/2029.
              </p>
              <span className="font-bold pt-5">Registration No: 231660712</span>
            </div>
            <div>
              <p className="pb-10">
                All contributions to Smile Foundation are eligible for 50% tax
                exemption under Section 80G of the Income Tax Act. The said
                certificate is valid till AY 2026-27.
              </p>
              <span className="font-bold pt-5"> URN: AACTS7973GF20210</span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:p-10">
          <h1 className="text-2xl md:text-3xl font-bold  pt-8 pb-4">
            Practising Good Governance
          </h1>
          
          < AccordionTransition />
        </div>
      </div>
    </div>
  );
}

export default Why_trust_us;
