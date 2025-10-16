"use client";

import { FaSearch, FaUsers, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { ImCheckmark2 } from "react-icons/im";

export default function Convinient() {
  const steps = [
    {
      id: 1,
      title: "Insured Jobs",
      desc: "Something goes wrong? We make it right. No stress.",
      icon: <FaSearch className="text-2xl text-purple-500" />,
    },
    {
      id: 2,
      title: "Pay Smarter",
      desc: "Pay 80% upfront, 20% when you're happy.",
      icon: <TbUsers  className="text-2xl text-[#5B832B]" />,
    },
    {
      id: 3,
      title: "Track Your Service",
      desc: "Monitor every step of the job in-app.",
      icon: <FaUserCheck className="text-2xl text-orange-500" />,
    },
    {
      id: 4,
      title: "Rate Your Artisan",
      desc: "Reward good work. Flag poor service.",
      icon: <ImCheckmark2 className="text-2xl text-[#6673C7]" />,

    },
  ];

  return (
    <section className="py-8 bg-[#F5F9FD]">
      <div className="lg:px-12 pt-10 lg:1400px mx-auto px-4">
        <h2 className="text-2xl sm:text-[32px]  text-center font-[600] text-textcolor mb-10  ">
        Built for Your Convenience
        </h2>
        

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
              <h3 className="font-[600] text-textcolor text-[20px]">
                {step.title}
              </h3>
              <p className="text-[#282E3280] text-[16px] font-[400] mt-1 mb-3 px-6">{step.desc}</p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
