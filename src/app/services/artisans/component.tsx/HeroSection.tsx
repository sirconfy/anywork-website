
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/images/artisan_image.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl md:text-[60px] font-[600] mb-4">
        Become an AnyWork artisan and grow your Income with steady jobs.
        </h1>
        <p className="text-gray-200 mb-6 text-[24px] font-[400]">
        If you&#39;re good at what you do but tired of chasing jobs or being underpaid, AnyWork brings steady, well-paying jobs to you.
        </p>


        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0096d1] transition">
           Become a Worker
          </button>
        
        </div>
      </div>
    </section>
  );
}
