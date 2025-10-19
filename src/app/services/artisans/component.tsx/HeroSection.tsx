"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/images/artisan_image.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <motion.h1
          className="text-4xl md:text-[60px] font-[600] mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Become an AnyWork artisan and grow your Income with steady jobs.
        </motion.h1>

        <motion.p
          className="text-gray-200 mb-6 text-[24px] font-[400]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          If you&#39;re good at what you do but tired of chasing jobs or being
          underpaid, AnyWork brings steady, well-paying jobs to you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0096d1] transition"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 174, 239, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Worker
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
