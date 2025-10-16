"use client";

import React from "react";
import {
  FiMail,
  FiPhone,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiBriefcase,
  FiUsers,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail className="w-5 h-5 text-cyan-500" />,
    title: "Email us directly",
    info: "support@anywork.ng",
  },
  {
    icon: <FiClock className="w-5 h-5 text-cyan-500" />,
    title: "Office Hours",
    info: "Monday-Saturday, 8 AM - 8 PM",
  },
  {
    icon: <FiPhone className="w-5 h-5 text-cyan-500" />,
    title: "Call Us",
    info: "+234 901 234 5678",
  },
  {
    icon: <FiMessageCircle className="w-5 h-5 text-cyan-500" />,
    title: "24/7 WhatsApp",
    info: "+234 901 234 5678",
  },
  {
    icon: <FiBriefcase className="w-5 h-5 text-cyan-500" />,
    title: "Investor Relations",
    info: "investors@anywork.ng",
  },
  {
    icon: <FiUsers className="w-5 h-5 text-cyan-500" />,
    title: "Media & Partnerships",
    info: "partnerships@anywork.ng",
  },
  {
    icon: <FiMapPin className="w-5 h-5 text-cyan-500" />,
    title: "Visit Our Office",
    info: "123 Innovation Drive, Victoria Island, Lagos, Nigeria",
  },
];

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-16 px-6 ">
      <div className="max-w-[1350px] mx-auto grid   lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white border border-[#E6E6E6] rounded-2xl  p-8">
          <h2 className="text-[32px] font-[600] mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full  text-[#282E3280] text-[16px] font-[400]  rounded-md p-3  bg-[#F7F7F7]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-[#282E3280] text-[16px] font-[400] rounded-md p-3   bg-[#F7F7F7]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full text-[#282E3280] text-[16px] font-[400] rounded-md p-3  bg-[#F7F7F7]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full text-[#282E3280] text-[16px] font-[400]  rounded-md p-3   bg-[#F7F7F7]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md  transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-[32px] font-[600] text-textcolor mb-6">
            Get In Touch
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 border border-[#F1F1F1] rounded-xl p-4 hover:shadow-md transition 
          ${index === contactInfo.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <div className="flex-shrink-0 border border-secondary p-2 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-[600] text-textcolor text-[16px]">
                    {item.title}
                  </h3>
                  <p className="font-[400] text-textcolor text-[16px]">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
