"use client";
import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <>
      <motion.h1
        className="text-3xl md:text-[76px] font-[600] text-textcolor text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        Welcome to the <br /> AnyWork Blog
      </motion.h1>

      <motion.p
        className="text-center text-textcolor font-[400] text-[20px] mb-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        Enjoy helpful DIY tips, artisan success stories, and updates from our
        community on the AnyWork blog. Our blog helps you stay informed,
        inspired, and empowered.
      </motion.p>
    </>
  );
}
