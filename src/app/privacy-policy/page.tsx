"use client"
import React, { useState } from "react";

const privacyPolicies = {
  en: {
    heading: "Privacy Policy - Shika Foundation",
    intro: `Shika Foundation (“we”, “us”, or “our”) highly values your privacy. This Privacy Policy describes how we collect, use, protect, and manage your personal information when you use our website, services, or contact us directly.`,
    sections: [
      {
        title: "1. Information We Collect",
        points: [
          "Personal details such as your name, email address, phone number, and address when you register, donate, or contact us.",
          "Payment and transaction information for donation processing.",
          "Voluntary information you provide in forms or communication.",
          "Technical data (IP address, device information, browser type, cookies, etc.) for website analytics and security."
        ],
      },
      {
        title: "2. How We Use Your Information",
        points: [
          "To process donations and maintain donor records.",
          "To communicate news, updates, events, and donation receipts.",
          "To respond to queries, support requests, and feedback.",
          "To improve our website, services, and ensure security compliance."
        ],
      },
      {
        title: "3. Information Sharing",
        points: [
          "We never sell or rent your personal information.",
          "We may share information with trusted partners (such as payment gateways) only to fulfil your requests or legal compliance.",
          "We may disclose your data if required by law or to protect our rights and users' safety."
        ],
      },
      {
        title: "4. Data Security",
        points: [
          "We implement reasonable measures to protect your personal data against unauthorized access, loss, or misuse.",
          "Secure payment gateways/processors are used for all online transactions."
        ],
      },
      {
        title: "5. Your Rights",
        points: [
          "You have the right to view, correct, or request deletion of your personal data.",
          "To exercise these rights or for privacy concerns, contact us at donate@shikafoundationtrust.in."
        ],
      },
      {
        title: "6. Children's Privacy",
        points: [
          "We do not knowingly collect information from children under 13 years of age.",
          "If you believe your child has provided us with personal information, please contact us for removal."
        ],
      },
      {
        title: "7. Changes To This Policy",
        points: [
          "We may update this Privacy Policy as required by law or operational needs.",
          "Any changes will be posted on this page and communicated when necessary."
        ],
      },
      {
        title: "8. Contact Information",
        points: [
          "For questions about this Privacy Policy, contact us at:",
          "Email: donate@shikafoundationtrust.in",
          "Address: Shika Foundation Trust, SISAUNDHA P O P S, DHANSOI, DIST BUXAR, BIHAR - 802117"
        ]
      }
    ],
    effective: "Effective date: 31 August 2025"
  },
  hi: {
    heading: "निजता नीति - शिका फाउंडेशन",
    intro: `शिका फाउंडेशन (“हम”) आपकी निजता का अत्यधिक महत्व देता है। यह निजता नीति बताती है कि हम आपकी व्यक्तिगत जानकारी किस तरह एकत्र करते हैं, उपयोग करते हैं, सुरक्षित रखते हैं और प्रबंधित करते हैं, जब आप हमारी वेबसाइट, सेवाएँ या संपर्क साधन इस्तेमाल करते हैं।`,
    sections: [
      {
        title: "1. हम कौन-सी जानकारियाँ एकत्र करते हैं",
        points: [
          "पंजीकरण, दान या संपर्क करने पर आपका नाम, ईमेल, फोन नंबर, पता आदि।",
          "दान हेतु पेमेंट व ट्रांज़ैक्शन से जुड़ी जानकारियाँ।",
          "फ़ॉर्म या संवाद में आप द्वारा दी गई स्वैच्छिक जानकारी।",
          "तकनीकी डेटा (जैसे IP एड्रेस, डिवाइस, ब्राउज़र प्रकार, कुकी) वेबसाइट एनालिटिक्स और सुरक्षा के लिए।"
        ],
      },
      {
        title: "2. जानकारी का इस्तेमाल कैसे करते हैं",
        points: [
          "दान की प्रक्रिया और डोनर रिकॉर्ड रखने के लिए।",
          "समाचार, अद्यतन, कार्यक्रम एवं रसीद भेजने और संवाद करने हेतु।",
          "सवालों, समर्थन और प्रतिक्रिया का उत्तर देने के लिए।",
          "वेबसाइट व सेवाओं की गुणवत्ता और सुरक्षा सुधारने हेतु।"
        ],
      },
      {
        title: "3. जानकारी किसके साथ साझा होती है",
        points: [
          "हम आपकी व्यक्तिगत जानकारी कभी बेचते या किराए पर नहीं देते।",
          "आपकी अनुमति या कानूनी ज़रूरत पर विश्वसनीय साझेदारों (पेमेंट गेटवे आदि) के साथ ही जानकारी साझा होगी।",
          "संवैधानिक आवश्यकता या अधिकार सुरक्षित करने हेतु जानकारी साझा की जा सकती है।"
        ],
      },
      {
        title: "4. डेटा सुरक्षा",
        points: [
          "हम आपकी व्यक्तिगत जानकारी की सुरक्षा हेतु उचित उपाय अपनाते हैं।",
          "ऑनलाइन लेन-देन के लिए केवल सुरक्षित पेमेंट गेटवे का उपयोग होता है।"
        ],
      },
      {
        title: "5. आपके अधिकार",
        points: [
          "अपनी जानकारी देखने, सुधरवाने या हटवाने का अधिकार आपको है।",
          "इन अधिकारों को लागू करने या निजता संबंधी शिकायत के लिए donate@shikafoundationtrust.in पर संपर्क करें।"
        ],
      },
      {
        title: "6. बच्चों की निजता",
        points: [
          "हम 13 वर्ष से कम आयु के बच्चों की जानकारी जानबूझकर एकत्र नहीं करते।",
          "अगर आपके बच्चे ने जानकारी भेज दी है, तो कृपया हमें हटाने हेतु सूचित करें।"
        ],
      },
      {
        title: "7. नीति में बदलाव",
        points: [
          "नियम या संचालन अनुसार यह नीति समय-समय पर बदली जा सकती है।",
          "बदलाव इस पेज पर प्रकाशित किए जाएंगे और आवश्यकतानुसार सूचित किया जाएगा।"
        ],
      },
      {
        title: "8. संपर्क जानकारी",
        points: [
          "इस नीति से संबंधित प्रश्नों हेतु संपर्क करें:",
          "ईमेल: donate@shikafoundationtrust.in",
          "पता: शिका फाउंडेशन ट्रस्ट, सिसौंधा, पोस्ट: पीएस, धनसोई, जिला: बक्सर, बिहार - 802117"
        ]
      }
    ],
    effective: "प्रभावी तिथि: 31 अगस्त 2025"
  }
};

type Language = "en" | "hi";

const PrivacyPolicy: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");
  const policy = privacyPolicies[lang];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border shadow rounded">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-green-800">{policy.heading}</h1>
        <button
          className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 font-medium"
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
        >
          {lang === "en" ? "हिन्दी में पढ़ें" : "Read in English"}
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
            </ul>
          </section>
        ))}
      </div>
      <p className="text-sm mt-8 text-gray-500">{policy.effective}</p>
    </div>
  );
};

export default PrivacyPolicy;
