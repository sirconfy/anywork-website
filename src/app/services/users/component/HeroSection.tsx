
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/images/user_service_hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Quality Work, <br className="hidden md:block" /> Without the
          Stress
        </h1>
        <p className="text-gray-200 mb-6">
          Say goodbye to inconsistent “my guy” referrals and random artisans who
          vanish halfway. AnyWork lets you find verified service providers with
          built-in peace of mind.
        </p>

        {/* Icons List */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#00AEEF]" /> No middlemen
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#00AEEF]" /> No inflated prices
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#00AEEF]" /> No disappointments
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0096d1] transition">
            Sign Up
          </button>
          <button className="bg-white text-[#00AEEF] px-6 py-2 rounded-lg font-medium hover:bg-[#E6F7FC] transition">
            Find an Artisan
          </button>
        </div>
      </div>
    </section>
  );
}
