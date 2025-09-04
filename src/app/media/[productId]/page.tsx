// import { useRouter } from "next/router";
import Image from "next/image";
const MediaData = [
  {
    id: 1,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
  },
  {
    id: 2,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
  },
  {
    id: 3,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
  },
  {
    id: 4,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
  },
  {
    id: 5,
    title: "कार्बन अवशोषित करने के लिए पौधारोपण जरूरी",
    description:
      'शिका फाउंडेशन ट्रस्ट द्वारा धनसोई में "पेड़ लगाएं, पर्यावरण बचाएं" अभियान के तहत एक विशेष कार्यक्रम का आयोजन किया गया। इस दौरान छात्रों और स्थानीय लोगों को पौधारोपण के महत्व के बारे में जागरूक किया गया और पौधे वितरित किए गए। कार्यक्रम में बताया गया कि वृक्षारोपण से कार्बन अवशोषित कर पर्यावरण को संतुलित बनाए रखा जा सकता है। उपस्थित लोगों ने पौधारोपण में बढ़-चढ़कर हिस्सा लिया और पर्यावरण संरक्षण का संकल्प लिया।',
    imgurl: "/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
  },
];
export default async function Media({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const productId = (await params).productId;
  const mediaIndex = MediaData.findIndex((item) => item.id == productId);
  const mediaItem = MediaData[mediaIndex];

  if (!mediaItem) {
    return <p>मीडिया नहीं मिला।</p>;
  }

  const prevItem = MediaData[mediaIndex - 1];
  const nextItem = MediaData[mediaIndex + 1];

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="md:text-lg font-bold py-5">{mediaItem.title}</h1>
        <Image
          src={mediaItem.imgurl}
          alt={mediaItem.title}
          width={800}
          height={400}
          className="border-2 border-[rgb(7,147,71)] rounded-2xl "
        />
        <p className="text-center p-10 ">{mediaItem.description}</p>
      </div>
      <div className="flex justify-between w-full px-10 py-4">
        <div>
          {prevItem ? (
            <a
              href={`/media/${prevItem.id}`}
              className="text-amber-700 hover:underline"
            >
              ⟵ Prev : {prevItem.title}
            </a>
          ) : (
            <span className="text-gray-400">No previous blog</span>
          )}
        </div>
        {/* Next Blog */}
        <div>
          {nextItem ? (
            <a
              href={`/media/${nextItem.id}`}
              className="text-amber-700 hover:underline"
            >
              Next : {nextItem.title} ⟶
            </a>
          ) : (
            <span className="text-gray-400">No next blog</span>
          )}
        </div>
      </div>
    </>
  );
}
