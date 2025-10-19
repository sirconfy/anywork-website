"use client";

import { motion } from "framer-motion";
import { FaSearch, FaUserCheck } from "react-icons/fa";
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
      icon: <TbUsers className="text-2xl text-[#5B832B]" />,
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
    <section className="py-20 bg-white">
      <div className="lg:px-12 max-w-[1400px] mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-[32px] text-center font-[700] text-[#282E32] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How to Get Started as an AnyWork User
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-white border border-[#F1F1F1] rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Floating Icon */}
              <motion.div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${step.color} mb-3`}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                {step.icon}
              </motion.div>

              <motion.h3
                className="font-[600] text-[#282E32] text-[20px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.title}
              </motion.h3>

              <p className="text-gray-500 text-[16px] font-[400] mt-2 mb-3 px-6">
                {step.desc}
              </p>

              {/* Step Number */}
              <motion.div
                className="border border-gray-400 text-gray-600 w-6 h-6 flex items-center justify-center rounded-full text-xs"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {step.id}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00AEEF] text-white px-6 py-2.5 rounded-md text-[16px] font-[500] shadow-md hover:shadow-lg transition"
          >
            Sign Up
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#00AEEF] text-[#00AEEF] px-6 py-2.5 text-[16px] rounded-md font-[500] hover:bg-[#E6F7FC] transition"
          >
            Find an Artisan
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
