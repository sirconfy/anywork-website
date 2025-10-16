"use client";

import { FaSearch, FaUsers, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { ImCheckmark2 } from "react-icons/im";

export default function GetStarted() {
  const steps = [
    {
      id: 1,
      title: "Sign up on AnyWork",
      desc: "Create your account in seconds",
      icon: <FaSearch className="text-2xl text-[#C133D5]" />,
      color: "bg-[#C133D50F]",
    },
    {
      id: 2,
      title: "Fill in your contact details",
      desc: "Quick setup for better service",
      icon: <TbUsers  className="text-2xl text-[#5B832B]" />,
      color: "bg-[#5B832B0F]",
    },
    {
      id: 3,
      title: "Book from 40+ services",
      desc: "Choose what you need",
      icon: <FaUserCheck className="text-2xl text-[#E77141]" />,
      color: "bg-[#E771410F]",
    },
    {
      id: 4,
      title: "Chill. We handle the stress",
      desc: "Sit back and relax",
      icon: <ImCheckmark2 className="text-2xl text-[#6673C7]" />,
      color: "bg-[#6673C70F]",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="lg:px-12 pt-10 lg:1400px mx-auto px-4">
        <h2 className="text-2xl sm:text-[32pxpx]  text-center font-[600] text-textcolor mb-10">
        How to Get Started as an AnyWork User
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
              <h3 className="font-[600] text-textcolor text-[20px]">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[16px]  font-[400] mt-1 mb-3 px-6">{step.desc}</p>
              <div className="border border-gray-400 text-gray-600 w-6 h-6 flex items-center justify-center rounded-full text-xs">
                {step.id}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center space-x-6  mt-10">
        <button className="bg-secondary hover:bg-secondary text-white px-6 py-2.5 rounded-md text-[16px]  font-[500] transition cursor-pointer">
            Sign Up
          </button>
          <button className="border border-secondary  text-secondary px-6 py-2.5 text-[16px]  rounded-md font-[500] transition cursor-pointer">
            Find an Artisan
          </button>
        </div>
      </div>
    </section>
  );
}
