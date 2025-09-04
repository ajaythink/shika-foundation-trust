'use client';
const MediaData = [
  {
    id: 1,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
    Year: 2024,
    typeOfContent: "Photo",
  },
  {
    id: 2,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
    Year: 2023,
    typeOfContent: "Photo",
  },
  {
    id: 3,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
    Year: 2022,
    typeOfContent: "Video",
  },
  {
    id: 4,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
    Year: 2022,
    typeOfContent: "Video",
  },
  {
    id: 5,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
    Year: 2023,
    typeOfContent: "Paper Media",
  },
];


import Image from "next/image";
import Link from "next/link";
import {useState} from 'react';

const types = ["Photo", "Video", "Paper Media"];
const allYears = Array.from(new Set(MediaData.map((m) => m.Year))).sort(
  (a, b) => b - a
);
 
export default function Media() {
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredMedia = MediaData.filter(
    (item) =>
      item.typeOfContent === selectedType &&
      (selectedYear === "All" || item.Year === Number(selectedYear))
  );
  return (
    <div>
      <div className="md:m-6 lg:m-10">
        <div className="w-full bg-green-50 p-10 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase ">
            Media(Paper media, Videos and Photos)
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
                href="#"
                aria-current="page"
                className="text-sm font-medium text-indigo-600"
              >
                Media
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="w-full text-center flex flex-col items-center justify-center">
        <div className="flex gap-4 text-lg mb-4">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`cursor-pointer px-3 py-1 rounded-md ${
                selectedType === type
                  ? "bg-green-300 font-bold"
                  : "underline text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setSelectedYear("All")}
            className={`px-2 py-1 rounded  cursor-pointer ${
              selectedYear === "All" ? "bg-amber-400 font-bold" : "bg-amber-100"
            }`}
          >
            All
          </button>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year.toString())}
              className={`px-2 py-1 rounded cursor-pointer ${
                selectedYear === year.toString()
                  ? "bg-amber-400 font-bold"
                  : "bg-amber-100"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredMedia.length > 0 ? filteredMedia.map(data => (
            <div
              key={data.id}
              className="shadow shadow-green-800 rounded-lg  max-w-82 "
            >
              <div className="overflow-hidden h-60">
                {/* image */}
                <Image
                  src={data.imgurl}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-t-lg w-full"
                />
              </div>
              <div className="p-2">
                <h2 className="font-bold py-2">{data.title}</h2>
                <p className="text-black/70 pb-5">
                  {data.description.split(" ").slice(0, 30).join(" ") +
                    (data.description.split(" ").length > 30 ? "..." : "")}
                </p>
                <Link href={"/media/" + data.id} key={data.id}>
                  <button className="border border-green-800 text-green-500 hover:bg-green-50 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none">
                    know more
                  </button>
                </Link>
              </div>
            </div>
          )): (
            <div className="col-span-full text-gray-500 font-semibold text-center py-10">
              कोई मीडिया उपलब्ध नहीं है।
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

