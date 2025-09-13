"use client"
import React, { useState } from "react";

const refundPolicies = {
  en: {
    heading: "Refund Policy (Donations) - Shika Foundation",
    intro: `At Shika Foundation, we deeply value your support and your trust in our mission. As a non-profit organization, transparency and fairness are central to our relationship with our donors. Please read our refund policy below for donations made via our website or other channels.`,
    sections: [
      {
        title: "1. Donations are Voluntary",
        points: [
          "All donations to Shika Foundation are voluntary and made with the donor’s full consent.",
          "We encourage donors to carefully check the amount, cause, and personal details before submitting any donation."
        ],
      },
      {
        title: "2. Refund Circumstances",
        points: [
          "Refunds for donations are possible only in cases of genuine error, unauthorized transaction, or fraudulent/double payments.",
          "No refunds will be given for valid donations voluntarily made to support our initiatives."
        ],
      },
      {
        title: "3. Refund Request Procedure",
        points: [
          "To initiate a refund, donors must contact us at donate@shikafoundationtrust.in within 7 days of the transaction, providing:"
        ],
        list: [
            "Full Name",
            "Donation Date and Transaction Reference/Receipt",
            "Donation Amount",
            "Payment Method",
            "Reason for requesting a refund"
        ]
      },
      {
        title: "4. Refund Process",
        points: [
          "Upon receiving your request, our team will review and may contact you for additional information or clarification.",
          "Approved refunds will be processed using the same payment method within 15 working days.",
          "The foundation is not responsible for delays caused by banks, payment gateways, or technical issues."
        ],
      },
      {
        title: "5. Tax Benefits and Receipts",
        points: [
          "If a refund is issued, the donor must return or destroy any tax receipts/certificates issued.",
          "Tax exemptions claimed on refunded donations are subject to statutory reversal as per regulations."
        ],
      },
      {
        title: "6. Contact Us",
        points: [
          "For any donation refund queries or assistance, email us at donate@shikafoundationtrust.in or write to:",
          "Shika Foundation Trust, SISAUNDHA P O P S, DHANSOI, DIST BUXAR, BIHAR - 802117"
        ]
      }
    ],
    note: "Shika Foundation reserves the right to amend this policy as required. Any changes will be updated on this page."
  },
  hi: {
    heading: "रिफंड नीति (दान) - शिका फाउंडेशन",
    intro: `शिका फाउंडेशन में, हम आपके समर्थन और विश्वास की सराहना करते हैं। एक गैर-लाभकारी संस्था के रूप में पारदर्शिता एवं निष्पक्षता हमारे सभी दाताओं के साथ संबंध का आधार है। कृपया हमारे रिफंड नीति (दान) का विस्तार से पढ़ें, जिससे यह स्पष्ट हो सके कि किसी भी माध्यम से जमा किए गए दान में रिफंड कैसे संभव है।`,
    sections: [
      {
        title: "1. दान स्वैच्छिक होता है",
        points: [
          "शिका फाउंडेशन को दिया गया प्रत्येक दान दाता की पूरी सहमति व इच्छा से होता है।",
          "दान भेजने से पूर्व राशि, कार्य, और व्यक्तिगत जानकारी की जाँच अवश्य कर लें।"
        ],
      },
      {
        title: "2. रिफंड किन परिस्थितियों में संभव है",
        points: [
          "रिफंड केवल वास्तविक त्रुटि, गलत/अनधिकृत या धोखाधड़ीपूर्ण/डबल भुगतान की स्थिति में ही संभव है।",
          "हमारे अभियानों हेतु स्वेच्छा से दिए गए दान की राशि वापस नहीं की जाएगी।"
        ],
      },
      {
        title: "3. रिफंड के लिए अनुरोध कैसे करें",
        points: [
          "रिफंड के लिए दाता को donate@shikafoundationtrust.in पर ट्रांजैक्शन के 7 दिनों के भीतर निम्न जानकारी भेजनी होगी:"
        ],
        list: [
            "पूरा नाम",
            "दान की तिथि और ट्रांजैक्शन रसीद/रेफरेंस",
            "दान की राशि",
            "भुगतान का तरीका",
            "रिफंड के लिए कारण"
        ]
      },
      {
        title: "4. रिफंड प्रक्रिया",
        points: [
          "आपका अनुरोध मिलने के बाद हमारी टीम जांच करेगी, आवश्यकता अनुसार अतिरिक्त जानकारी मांगी जा सकती है।",
          "मान्य पाए जाने पर रिफंड उसी पेमेंट माध्यम से 15 कार्य दिवसों के भीतर किया जाएगा।",
          "बैंक/पेमेंट गेटवे या तकनीकी विलंब के लिए फाउंडेशन जिम्मेदार नहीं होगा।"
        ],
      },
      {
        title: "5. टैक्स छूट और रसीद",
        points: [
          "रिफंड होने की स्थिति में जारी टैक्स रसीद/प्रमाण पत्र दाता द्वारा लौटाना या नष्ट करना आवश्यक है।",
          "रिफंड किए गए दान पर ली गई टैक्स छूट कानून अनुसार स्वतः निरस्त होगी।"
        ],
      },
      {
        title: "6. संपर्क करें",
        points: [
          "किसी भी दान रिफंड से जुड़ी जानकारी या सहायता हेतु donate@shikafoundationtrust.in पर ईमेल करें या लिखें:",
          "शिका फाउंडेशन ट्रस्ट, सिसौंधा, पोस्टः पी.एस., धनसोई, जिला बक्सर, बिहार – 802117"
        ]
      }
    ],
    note: "शिका फाउंडेशन इस नीति में आवश्यकतानुसार परिवर्तन करने का अधिकार रखता है। सभी बदलाव इस पृष्ठ पर दर्शाए जाएंगे।"
  }
};

type Language = "en" | "hi";

const RefundPolicyDonations: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");
  const policy = refundPolicies[lang];

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 bg-gray-50">
      <div className="max-w-3xl w-full bg-white border border-gray-200 rounded shadow-lg p-6 md:p-10 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800">{policy.heading}</h1>
          <button
            className="w-fit px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 font-medium"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
          >
            {lang === "en" ? "हिन्दी में पढ़ें" : "Read in English"}
          </button>
        </div>
        <p className="mb-5 text-base text-gray-800">{policy.intro}</p>
        <div className="space-y-6">
          {policy.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="font-bold text-lg text-green-700 mb-1">{section.title}</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
                {/* For sections with sub-lists */}
                {"list" in section && section.list && (
                  <ul className="list-decimal pl-6 text-gray-600 mt-2">
                    {section.list.map((lpt, k) => (
                      <li key={k}>{lpt}</li>
                    ))}
                  </ul>
                )}
              </ul>
            </section>
          ))}
        </div>
        <p className="text-sm mt-8 text-gray-500">{policy.note}</p>
      </div>
    </div>
  );
};

export default RefundPolicyDonations;
