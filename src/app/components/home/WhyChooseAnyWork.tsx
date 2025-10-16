
"use client";

import Image from "next/image";
import {
  FaUserCircle,
  FaShieldAlt,
  FaRedo,
  FaSmile,
  FaCheckCircle,
} from "react-icons/fa";

import { IoCheckmarkDoneOutline } from "react-icons/io5";

const WhyChooseAnyWork = () => {
  const features = [
    {
      icon: <FaUserCircle size={24} />,
      title: "We Sabi AnyWork",
      desc: "Choose from over 40+ categories of service providers. Every artisan/service provider is background-checked, rated, and reviewed. It's excellence or nothing.",
    },
    {
      icon: <IoCheckmarkDoneOutline size={24} />,
      title: "Collect Guarantee",
      desc: "We assure you that services rendered by artisans will be done excellently and with utmost professionalism.",
    },
    {
      icon: <FaRedo size={24} />,
      title: "Insurance Cover You",
      desc: "If you're not satisfied with the work done, we'll redo it. At no extra cost to you.",
    },
    {
      icon: <FaSmile size={32} />,
      title: "You no go Explain Tire",
      desc: "Our service providers are professional, listen well and are respectful. No need for shouting.",
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Peace of Mind Dey",
      desc: "We are transparent. From booking to delivery, you can track how your work is being done. Our support team is with you all the way to handle any complaints.",
    },
  ];

  return (
    <section className="relative bg-[#25628A] text-white py-16 px-6 overflow-hidden">

      {/* Heading + Cards */}
      <div className="relative max-w-[1400] mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Why Users Choose AnyWork
        </h2>
        <p className="text-gray-300 mb-12">
          Bad Service? It Can Never be AnyWork
        </p>

        {/* Cards Grid */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#317CA8] p-6 rounded-2xl shadow-lg text-left flex flex-col items-start space-y-3 hover:shadow-xl transition-shadow"
            >
              <div className="text-white border border-white rounded-full p-2">{feature.icon}</div>
              <h3 className="font-semibold text-[20px]">{feature.title}</h3>
              <p className="text-gray-200 text-[18px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Woman Image (Touching Edge) */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-[400px] h-[500px] z-99 translate-x-[1%]">
        <Image
          src="/assets/images/woman.png"
          alt="Happy AnyWork user"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>

    </section>
  );
};

export default WhyChooseAnyWork;
