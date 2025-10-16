
export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F5F9FD] px-6 md:px-10 py-12 rounded-xl">
      {/* Left side - Text */}
      <div className="max-w-[1500px] text-center md:text-left space-y-4">
        <h2 className="text-[76px] font-[600] text-textcolor leading-none">
          Curious
          <br />
          <span className="text-textcolor">about AnyWork?</span>
        </h2>

        <p className="text-textcolor text-[20px]">
          We provide reliable, vetted artisan services when you want them!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="bg-secondary text-white  px-5 py-2 rounded-lg font-[500] text-[16px] cursor-pointer transition">
            Find an Artisan
          </button>
          <button className="border border-primary text-primary px-5 font-[500] text-[16px]  py-2 rounded-lg  cursor-pointer transition">
            Become a worker
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="mt-8 md:mt-0">
        <img
          src="/assets/images/about_hero.png"
          alt="Worker painting building"
          className="w-full max-w-md rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
