"use client";

import Image from "next/image";
import {
  FaUserCircle,
  FaShieldAlt,
  FaRedo,
  FaSmile,
} from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const WhyChooseAnyWork = () => {
  const features = [
    {
      icon: <FaUserCircle size={24} />,
      title: "We Sabi AnyWork",
      desc: "Choose from over 40+ categories of service providers. Every artisan/service provider is background-checked, rated, and reviewed. It's excellence or nothing.",
    },
    {
      icon: <IoCheckmarkDoneOutline size={24} />,
      title: "Collect Guarantee",
      desc: "We assure you that services rendered by artisans will be done excellently and with utmost professionalism.",
    },
    {
      icon: <FaRedo size={24} />,
      title: "Insurance Cover You",
      desc: "If you're not satisfied with the work done, we'll redo it. At no extra cost to you.",
    },
    {
      icon: <FaSmile size={32} />,
      title: "You no go Explain Tire",
      desc: "Our service providers are professional, listen well and are respectful. No need for shouting.",
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Peace of Mind Dey",
      desc: "We are transparent. From booking to delivery, you can track how your work is being done. Our support team is with you all the way to handle any complaints.",
    },
  ];

  return (
    <section className="relative bg-[#25628A] text-white py-20 px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1B4863] via-[#25628A] to-[#3A8FBF] opacity-70"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "300% 300%" }}
      />

      {/* Heading Section */}
      <motion.div
        className="relative max-w-5xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Why Users Choose AnyWork
        </h2>
        <p className="text-gray-200 mb-12 text-lg">
          Bad Service? It Can Never Be AnyWork.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#317CA8] p-6 rounded-2xl shadow-lg text-left flex flex-col items-start space-y-3 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Icon Animation */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white border border-white rounded-full p-3 bg-[#ffffff22]"
            >
              {feature.icon}
            </motion.div>

            {/* Text Content */}
            <motion.h3
              className="font-semibold text-[20px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-gray-200 text-[17px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {feature.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Woman Image Animation */}
      <motion.div
        className="hidden lg:block absolute right-0 bottom-0 w-[400px] h-[500px] z-20"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/images/woman.png"
          alt="Happy AnyWork user"
          fill
          className="object-contain drop-shadow-xl"
          priority
          unoptimized
        />
      </motion.div>

      {/* Floating Decorative Orbs */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-10 h-10 bg-white/10 rounded-full blur-lg"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[20%] w-14 h-14 bg-white/10 rounded-full blur-xl"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default WhyChooseAnyWork;
