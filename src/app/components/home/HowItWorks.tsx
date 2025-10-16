"use client";

import { FaSearch, FaUsers, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { ImCheckmark2 } from "react-icons/im";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Request",
      desc: "Tell us what services you need",
      icon: <FaSearch className="text-2xl text-purple-500" />,
      color: "bg-purple-100",
    },
    {
      id: 2,
      title: "Connect",
      desc: "We match you instantly with nearby service providers and artisans",
      icon: <TbUsers  className="text-2xl text-[#5B832B]" />,
      color: "bg-[#F6FFEA]",
    },
    {
      id: 3,
      title: "Supervise",
      desc: "Track artisans' job progress in real-time",
      icon: <FaUserCheck className="text-2xl text-orange-500" />,
      color: "bg-orange-100",
    },
    {
      id: 4,
      title: "Relax",
      desc: "We get the job done with quality assurance and insurance",
      icon: <ImCheckmark2 className="text-2xl text-[#6673C7]" />,
      color: "bg-[#F0F2FF]",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="lg:px-12 pt-10 lg:1400px mx-auto px-4">
        <h2 className="text-2xl sm:text-[28px]  text-center font-[600] text-textcolor mb-10">
          How to Use AnyWork to Find Service Providers in Nigeria
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-[#F1F1F1] shadow-sm rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${step.color} mb-3`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold text-textcolor text-lg">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 mb-3 px-6">{step.desc}</p>
              <div className="border border-gray-400 text-gray-600 w-6 h-6 flex items-center justify-center rounded-full text-xs">
                {step.id}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary hover:bg-primary text-white px-6 py-2.5 rounded-md font-medium transition cursor-pointer">
            Find an Artisan
          </button>
        </div>
      </div>
    </section>
  );
}
