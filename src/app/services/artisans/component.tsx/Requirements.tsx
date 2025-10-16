"use client";

import { FaSearch, FaUsers, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { ImCheckmark2 } from "react-icons/im";

export default function Requirements() {
  const steps = [
    {
      id: 1,
      title: "Valid ID & NIN",
      desc: "Government-issued identification and National Identification Number for verification.",
      icon: <FaSearch className="text-2xl text-secondary" />,

    },
    {
      id: 2,
      title: "At least 2 guarantor",
      desc: "Provide at least 2 verifiable guarantors who can vouch for your skills and reliability.",
      icon: <TbUsers  className="text-2xl text-secondary" />,
 
    },
    {
      id: 3,
      title: "Smartphone",
      desc: "A smartphone to receive job notifications and communicate with customers.",
      icon: <FaUserCheck className="text-2xl text-secondary" />,

    },
    
  ];

  return (
    <section className="py-4 bg-white">
      <div className="lg:px-12 pt-4 lg:1400px mx-auto px-4">
        <h2 className="text-2xl sm:text-[32px]  text-center font-[600] text-textcolor mb-10">
        Requirements to Join
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-[#F1F1F1] shadow-sm rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-3`}
              >
                {step.icon}
              </div>
              <h3 className="font-[600] text-textcolor text-[20px]">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[16px]  font-[400] mt-1 mb-3 px-6">{step.desc}</p>
             
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center space-x-6  mt-10">
        <button className="bg-primary hover:bg-primary text-white px-6 py-2.5 rounded-md text-[16px]  font-[500] transition cursor-pointer">
        Become an Anywork artisan
          </button>
         
        </div>
      </div>
    </section>
  );
}
