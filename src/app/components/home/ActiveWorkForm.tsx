"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ActiveWorkForm() {
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    urgency: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const words = [
    "Boss,",
    "Sir,",
    "Ma,",
    "Oga,",
    "Madam,",
    "Chief,",
    "Alhaji,",
    "Mama,",
    "Uncle,",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FD] overflow-hidden">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl font-bold text-center mb-6 pt-20 flex justify-center items-center gap-2"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-secondary inline-block"
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
        <span className="text-textcolor">We’re Active. Any Work?</span>
      </motion.h1>

      {/* ===== FORM SECTION ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center pb-20"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-[90%] md:max-w-xl relative overflow-hidden"
        >
          
          <motion.div
            className="absolute inset-0 opacity-5 bg-gradient-to-br from-sky-400 via-transparent to-blue-200"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-[#282E3280] text-sm mb-6 relative z-10"
          >
            Tell us what you need and we&apos;ll connect you to the right artisan!
            <br />
            Provide the work details below.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <label className="block text-sm text-[#282E32] font-[500] mb-1">
                Service Details
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full text-[#282E3280] rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-[#F8F8F8]"
              >
                <option value="">e.g. Plumber, Waiter, Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="Waiter">Waiter</option>
                <option value="Electrician">Electrician</option>
                <option value="Cleaner">Cleaner</option>
              </select>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <label className="block text-sm text-[#282E32] font-[500] mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Victoria Island, Ikeja"
                className="w-full text-[#282E3280] rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-[#F8F8F8]"
              />
            </motion.div>

            {/* Urgency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-sm text-[#282E32] font-[500] mb-1">
                Urgency
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full text-[#282E3280] rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-[#F8F8F8]"
              >
                <option value="">
                  e.g. Immediately, Within 24 hours, Next week
                </option>
                <option value="Immediately">Immediately</option>
                <option value="Within 24 hours">Within 24 hours</option>
                <option value="Next week">Next week</option>
              </select>
            </motion.div>

            <hr className="my-6 border-[#F1F1F1]" />

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm font-semibold text-[#282E32]"
            >
              Contact Information
            </motion.h2>

            {/* Contact Fields */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm text-[#282E32] font-[500] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-md text-[#282E3280] border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-[#F8F8F8]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#282E32] font-[500] mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 xxx xxx xxxx"
                  className="w-full rounded-md border text-[#282E3280] border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-[#F8F8F8]"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-sm text-[#282E32] font-[500] mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full rounded-md border border-gray-300 px-3 text-[#282E3280] py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm bg-[#F8F8F8]"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex justify-center my-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-[40%] mx-auto bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-sky-600 transition cursor-pointer"
              >
                Find an Artisan
              </motion.button>
            </motion.div>
          </form>

          {/* Bottom Link */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center text-sm text-[#282E3280] mt-4 relative z-10"
          >
            Want to become an AnyWork artisan?{" "}
            <a href="#" className="text-secondary font-medium hover:underline">
              Create your account now.
            </a>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
