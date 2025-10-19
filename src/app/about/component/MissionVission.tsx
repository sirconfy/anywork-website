"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  const items = [
    {
      title: "Our Mission",
      description:
        "Bringing quality craftsmanship, backed by insurance, to users every day.",
      image: "/assets/images/setting.png",
    },
    {
      title: "Our Vision",
      description:
        "To restore trust, quality, and dignity in skilled work across Nigeria.",
      image: "/assets/images/telescope.png",
    },
    {
      title: "How We Do It",
      description:
        "By using technology, we match you with highly-rated, nearby artisans who are ready to get the job done right. With AnyWork, you get peace of mind, and artisans get the opportunity to build a trusted profile and a sustainable career.",
      image: "/assets/images/hands.png",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-14 py-16 overflow-hidden">
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25, delayChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          const isOddCount = items.length % 2 !== 0;
          const shouldSpanFull = isLastItem && isOddCount;

          return (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl border border-[#F1F1F1] overflow-hidden cursor-pointer ${
                shouldSpanFull ? "md:col-span-2" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: { duration: 0.4 },
              }}
            >
              {/* Image Container */}
              <motion.div
                className="overflow-hidden p-7"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="px-7 pb-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[24px] font-[900] text-[#282E32]">
                  {item.title}
                </h3>
                <p className="text-[#282E32] text-[18px] md:text-[20px] font-[400] mt-2">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
