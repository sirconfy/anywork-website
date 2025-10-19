"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyAnywork() {
  const features = [
    {
      icon: (
        <Image
          src="/assets/icons/medal.png"
          alt="medal-icon"
          width={32}
          height={32}
        />
      ),
      title: "Merit-Based Recognition",
      desc: "The best artisans are rewarded for their merit. Our proprietary rating system ensures that skilled and dedicated professionals rise to the top.",
    },
    {
      icon: (
        <Image
          src="/assets/icons/tolerance.png"
          alt="tolerance-icon"
          width={32}
          height={32}
        />
      ),
      title: "Zero Tolerance Policy",
      desc: "Poor service is penalized. We have a strict zero-tolerance policy for subpar work, giving you peace of mind with every booking.",
    },
    {
      icon: (
        <Image
          src="/assets/icons/insurance.png"
          alt="insurance-icon"
          width={32}
          height={32}
        />
      ),
      title: "Insurance Protection",
      desc: "Every customer feels safe and secure. Our jobs are backed by insurance, providing an extra layer of protection for you and your home.",
    },
  ];

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 px-6 md:px-10 py-12 rounded-xl overflow-hidden">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[40px] md:text-[56px] font-[600] text-textcolor leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why AnyWork Exists
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-textcolor font-[400] text-[18px] md:text-[20px]">
              AnyWork was born from the need to solve a common problem: finding
              reliable, skilled, and trustworthy artisans.
            </p>
            <p className="text-textcolor font-[400] text-[18px] md:text-[20px] py-3">
              We believe that access to quality craftsmanship should be seamless
              and fair for everyone. Our platform bridges the gap between
              customers who need dependable service and talented artisans who
              need steady work.
            </p>
            <p className="text-textcolor font-[400] text-[18px] md:text-[20px]">
              We&apos;re changing the artisan economy in Nigeria by providing a
              performance-driven marketplace where:
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            }}
            viewport={{ once: true }}
          >
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-secondary text-white px-5 py-2 rounded-lg font-[500] text-[16px] shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              Find an Artisan
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="border border-primary text-primary px-5 py-2 rounded-lg font-[500] text-[16px] hover:bg-[#E6F8FD] hover:scale-[1.03] transition-all"
            >
              Become a Worker
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/artisan.png"
            alt="Worker painting building"
            className="w-full max-w-md rounded-2xl object-cover shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section className="py-16 px-6 md:px-10 overflow-hidden">
        <motion.div
          className="max-w-[1400px] mx-auto text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="p-6 rounded-lg border border-[#F1F1F1] text-left flex flex-col items-start space-y-2 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="border border-[#f1f1f1] rounded-full p-2">
                  {feature.icon}
                </div>
                <h3 className="font-[600] text-textcolor text-[20px]">
                  {feature.title}
                </h3>
                <p className="text-textcolor text-[16px]">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
