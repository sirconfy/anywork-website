import Image from "next/image";


export default function WhyAnywork() {
  const features = [
    {
      icon: (
        <Image
          src="/assets/icons/medal.png"
          alt="medal-icon"
          width={32}
          height={32}
        />
      ),
      title: "Merit-Based Recognition",
      desc: "The best artisans are rewarded for their merit. Our proprietary rating system ensures that skilled and dedicated professionals rise to the top.",
    },
    {
      icon: (
        <Image
          src="/assets/icons/tolerance.png"
          alt="medal-icon"
          width={32}
          height={32}
        />
      ),
      title: "Zero Tolerance Policy",
      desc: "Poor service is penalized. We have a strict zero-tolerance policy for subpar work, giving you peace of mind with every booking.",
    },
    {
      icon: (
        <Image
          src="/assets/icons/insurance.png"
          alt="medal-icon"
          width={32}
          height={32}
        />
      ),
      title: "Insurance Protection",
      desc: "Every customer feels safe and secure. Our jobs are backed by insurance, providing an extra layer of protection for you and your home.",
    },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between  gap-44 px-6 md:px-10 py-12 rounded-xl">
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-[56px] font-[600] text-textcolor leading-none">
            Why AnyWork Exists
          </h2>

          <div className="mb-4">
            <p className="text-textcolor font-[400] text-[20px]">
              AnyWork was born from the need to solve a common problem: finding
              reliable, skilled, and trustworthy artisans.
            </p>
            <p className="text-textcolor font-[400] text-[20px] py-3">
              We believe that access to quality craftsmanship should be seamless
              and fair for everyone. Our platform bridges the gap between
              customers who need dependable service and talented artisans who
              need steady work.
            </p>
            <p className="text-textcolor font-[400] text-[20px]">
              We&apos;re changing the artisan economy in Nigeria by providing a
              performance-driven marketplace where:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="bg-secondary text-white px-5 py-2 rounded-lg font-[500] text-[16px] cursor-pointer transition">
              Find an Artisan
            </button>
            <button className="border border-primary text-primary px-5 font-[500] text-[16px] py-2 rounded-lg cursor-pointer transition">
              Become a worker
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className=" mt-8 md:mt-0">
          <img
            src="/assets/images/artisan.png"
            alt="Worker painting building"
            className="w-full   max-w-md    rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="  py-16 px-6 md:px-10  overflow-hidden">
        {/* Heading + Cards */}
        <div className="max-w-[1400] mx-auto text-center z-10">
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg  text-left flex flex-col items-start space-y-2 border border-[#F1F1F1]"
              >
                <div className=" border border-white rounded-full p-2">
                  {feature.icon}
                </div>
                <h3 className="font-[600] text-textcolor text-[20px]">
                  {feature.title}
                </h3>
                <p className="text-textcolor text-[16px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
