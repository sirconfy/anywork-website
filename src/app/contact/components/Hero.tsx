"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ContactHeroProps = {
  imageSrc?: string;
  alt?: string;
};

const Hero: React.FC<ContactHeroProps> = ({
  imageSrc = "/assets/images/contact.png",
  alt = "vintage telephone background",
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with fade + slight zoom animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55"
        />
      </motion.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-36">
        <div className="text-center">
          {/* Animated Heading */}
          <motion.h1
            className="text-white font-[600] leading-none tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[76px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Need Help or Have
            <br className="hidden md:block" /> Questions? Contact
            <span className="block md:inline "> AnyWork.</span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 sm:mt-2 text-sm sm:text-base md:text-[20px] font-[400] text-slate-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our team is available 24/7 to assist with bookings, support,
            complaints, investment or partnership inquiries.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
