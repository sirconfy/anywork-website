

"use client";

import { useState, useEffect } from "react";

export default function ActiveWorkForm() {
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    urgency: "",
    fullName: "",
    phone: "",
    email: "",
  });

  // The words that will rotate
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

  //  Change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

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
    <div className="min-h-screen bg-[#F5F9FD]">
      {/* Animated Greeting + Sentence */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 pt-20 flex justify-center items-center gap-2">
        {/* Animated Word */}
        <span
          key={currentWordIndex}
          className="text-secondary inline-block transition-all duration-700 ease-in-out animate-fadeInUp"
        >
          {words[currentWordIndex]}
        </span>
        <span className="text-textcolor">We’re Active. Any Work?</span>
      </h1>

      {/* ===== FORM SECTION ===== */}
      <div className="flex items-center justify-center pb-20">
        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-[90%] md:max-w-xl">
          <p className="text-center text-[#282E3280] text-sm mb-6">
            Tell us what you need and we&apos;ll connect you to the right artisan!
            <br />
            Provide the work details below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Service Details */}
            <div>
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
            </div>

            {/* Location */}
            <div>
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
            </div>

            {/* Urgency */}
            <div>
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
            </div>

            <hr className="my-6 border-[#F1F1F1]" />

            {/* Contact Info */}
            <h2 className="text-sm font-semibold text-[#282E32]">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>

            <div>
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
            </div>

            <div className="flex justify-center my-6">
              <button
                type="submit"
                className="w-[40%] mx-auto bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary transition cursor-pointer"
              >
                Find an Artisan
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-[#282E3280] mt-4">
            Want to become an AnyWork artisan?{" "}
            <a href="#" className="text-secondary font-medium hover:underline">
              Create your account now.
            </a>
          </p>
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-in-out;
        }
      `}</style>
    </div>
  );
}
