"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/user_service_hero.png')",
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

      {/* Floating Light Effect */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get Quality Work, <br className="hidden md:block" /> Without the
          Stress
        </motion.h1>

        <motion.p
          className="text-gray-200 mb-6 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Say goodbye to inconsistent “my guy” referrals and random artisans who
          vanish halfway. AnyWork lets you find verified service providers with
          built-in peace of mind.
        </motion.p>

        {/* Icons List */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            "No middlemen",
            "No inflated prices",
            "No disappointments",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCheckCircle className="text-[#00AEEF]" />
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0096d1",
              boxShadow: "0px 8px 20px rgba(0, 150, 209, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Sign Up
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#E6F7FC",
              boxShadow: "0px 8px 20px rgba(230, 247, 252, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#00AEEF] px-6 py-2 rounded-lg font-medium transition"
          >
            Find an Artisan
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
