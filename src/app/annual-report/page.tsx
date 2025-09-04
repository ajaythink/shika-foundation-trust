import React from "react";

const AnnualReportComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg px-8 py-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Annual Report
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
          Coming Soon
        </p>
        <p className="text-base text-gray-500 text-center">
          This page is under construction. <br />
          Please check back soon for updates from Shika Foundation!
        </p>
      </div>
    </div>
  );
};

export default AnnualReportComingSoon;
