"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#F5FAFD] py-16 px-6 md:px-12 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden">
      
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-[#1E2A32] mb-4 leading-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Curious <br /> about AnyWork?
        </motion.h2>

        <motion.p
          className="text-[#5A6B7A] mb-8 text-base md:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We provide reliable, vetted artisan services when you want them!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.5 },
            },
          }}
          viewport={{ once: true }}
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-secondary text-white px-5 py-2 rounded-lg font-[500] text-[16px] cursor-pointer transition"
          >
            Find an Artisan
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="border border-primary text-primary px-5 font-[500] text-[16px] py-2 rounded-lg cursor-pointer transition"
          >
            Become a Worker
          </motion.button>
        </motion.div>
      </motion.div>




      <motion.div
        className="flex-1 w-full flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-[300px] h-[260px] sm:w-[400px] sm:h-[320px] md:w-[450px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/assets/images/about_hero.png"
            alt="Worker painting a wall"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
