"use client";

import { FaSearch, FaUsers, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { ImCheckmark2 } from "react-icons/im";

export default function CompetetiveEdge() {
  const steps = [
    {
      id: 1,
      title: "Dual Marketplace",
      desc: "Serving B2C homeowners + B2B corporate",
      icon: <FaSearch className="text-2xl text-purple-500" />,
    },
    {
      id: 2,
      title: "Proprietary Rating System",
      desc: "With penalties for poor service",
      icon: <TbUsers  className="text-2xl text-[#5B832B]" />,
    },
    {
      id: 3,
      title: "Insurance-Backed Service",
      desc: "Every job protected by insurance coverage",
      icon: <FaUserCheck className="text-2xl text-orange-500" />,
    },
    {
      id: 4,
      title: "Multiple Access Options",
      desc: "Subscription + USSD options for scale",
      icon: <ImCheckmark2 className="text-2xl text-[#6673C7]" />,

    },
  ];

  return (
    <section className="py-8 bg-[#F5F9FD]">
      <div className="lg:px-12 pt-10 lg:1400px mx-auto px-4">
        <h2 className="text-2xl sm:text-[28px]  text-center font-[600] text-textcolor ">
        Our Competitive Edge
        </h2>
        <p className="text-[18px] text-[#282E3280] mb-10 text-center">What sets AnyWork apart in the Nigerian artisan marketplace</p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-[#F1F1F1] shadow-sm rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full  mb-3`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold text-textcolor text-lg">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 mb-3 px-6">{step.desc}</p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
