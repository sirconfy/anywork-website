


"use client";

import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";

export default function CustomersSay() {
  const steps = [
    {
      id: 1,
      title: "We save lives",
      desc: `"AnyWork saved me when my AC broke down. The technician arrived in 20 minutes!"`,
      icon: <FaHeart className="text-3xl text-[#DD2E44]" />,
      rating: 5,
      firstName: "Jane",
      lastName: "Doe"
    },
    {
      id: 2,
      title: "We deliver",
      desc: `"Very good communication and on-time delivery by the AnyWork mechanic. Thank you."`,
      icon: (
        <Image
          src="/assets/icons/truck.png"
          alt="truck-icon"
          width={32}
          height={32}
        />
      ),
      rating: 4.5,
       firstName: "Jane",
      lastName: "Doe"
    },
    {
      id: 3,
      title: "We are reliable",
      desc: `"The electrician was great. Perfect quality and good service for the money"`,
      icon: (
        <Image
          src="/assets/icons/medal.png"
          alt="medal-icon"
          width={32}
          height={32}
        />
      ),
      rating: 4.5,
       firstName: "Jane",
      lastName: "Doe"
    },
    {
      id: 4,
      title: "We are excellent",
      desc: `"Nigerian artisans giving you peace? Na only AnyWork dey run am. I've used them twice and the service was excellent"`,
      icon: <FaStar className="text-3xl text-[#FFE236]" />,
      rating: 4.5,
       firstName: "Jane",
      lastName: "Doe"
    },
  ];

  // ⭐ Helper function to render full and half stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex gap-1 mt-2 justify-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-[#FFE236]" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-[#FFE236]" />}
      </div>
    );
  };

  return (
    <section className="py-8 bg-white">
      <div className="lg:px-12 pt-10 max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl sm:text-[28px] text-center font-semibold text-textcolor">
          What Our Customers Say
        </h2>
        <p className="text-[#282E3280] text-[18px] text-center mb-10">
          Trusted by thousands of Nigerians
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-[#F1F1F1] shadow-sm rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full mb-3">
                {step.icon}
              </div>
              <h3 className="font-semibold text-textcolor text-lg">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[16px] mt-1 px-2 italic">
                {step.desc}
              </p>
              {renderStars(step.rating)}

                <div className="mt-4 flex items-center gap-2">

                    <FaUser className="text-md text-[#282E3252]" />
                    <p className="text-[#282E32] font-semibold text-sm">{step.firstName} <span className="font-[400]">{step.lastName}</span></p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
