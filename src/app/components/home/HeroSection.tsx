"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const images = [
    {
      src: "/assets/images/image1.png",
      alt: "artisan 1",
      text: " Cleaner",
      height: "h-72 sm:h-80",
    },
    {
      src: "/assets/images/image2.png",
      alt: "artisan 4",
      text: "Laundary",
      height: "h-40 sm:h-50",
    },
    {
      src: "/assets/images/image3.png",
      alt: "artisan 2",
      text: "Painter",
      height: "h-60 sm:h-72",
    },
    {
      src: "/assets/images/image4.png",
      alt: "artisan 5",
      text: "Technician",
      height: "h-52 sm:h-60",
    },
    {
      src: "/assets/images/image5.png",
      alt: "artisan 3",
      text: "Plumber",
      height: "h-56 sm:h-64",
    },
    {
      src: "/assets/images/image6.png",
      alt: "artisan 6",
      text: "Capenter",
      height: "h-55 sm:h-68",
    },
  ];

  interface ImageCardProps {
    src: string;
    alt: string;
    text: string;
    height: string;
  }

  const renderImageCard = ({ src, alt, text, height }: ImageCardProps) => (
    <div
      className={`relative group overflow-hidden rounded-2xl w-full ${height}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg sm:text-xl font-semibold text-center">
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-[600] text-textcolor leading-none">
            Nigeria&apos;s #1 for
            <br />
            <span className="text-textcolor">Vetted Artisans & Services</span>
          </h1>

          <p className=" text-base  max-w-lg font-[400] sm:text-[20px] text-textcolor leading-tight">
            Anywork controls a network of verified and reliable artisans,
            service providers and blue-collar professionals in Nigeria available
            for quick on-demand services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <button className="px-6 py-3 bg-[#00B8D9] text-white font-[500] rounded-[8px] text-[16px] hover:bg-[#00B8D9] transition focus:outline-none">
              Find an Artisan
            </button>
            <button className="px-6 py-3 border border-[#00B8D9] text-[#00B8D9] font-[500] text-[16px]  rounded-[8px] transition">
              Become an Anywork Artisan
            </button>
          </div>
        </motion.div>

        {/* Right Side Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          {/* First Column */}
          <div className="space-y-3 sm:space-y-6">
            {renderImageCard(images[0])}
            {renderImageCard(images[1])}
          </div>

          {/* Second Column */}
          <div className="space-y-3 sm:space-y-4">
            {renderImageCard(images[2])}
            {renderImageCard(images[3])}
          </div>

          {/* Third Column */}
          <div className="space-y-3 sm:space-y-4">
            {renderImageCard(images[4])}
            {renderImageCard(images[5])}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
