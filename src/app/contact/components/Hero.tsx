import Image from "next/image";


type ContactHeroProps = {
  
  imageSrc?: string;
  alt?: string;
};

const Hero: React.FC<ContactHeroProps> = ({
  imageSrc = "/assets/images/contact.png",
  alt = "vintage telephone background",
}) => {
  return (
    <section className="relative w-full">
      
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-36">
        <div className="text-center">
          <h1 className="text-white font-[600] leading-none tracking-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-[76px]">
            Need Help or Have
            <br className="hidden md:block" /> Questions? Contact
            <span className="block md:inline"> AnyWork.</span>
          </h1>

          <p className="mt-4 sm:mt-2 text-sm sm:text-base md:text-[20] font-[400] text-slate-100 max-w-2xl mx-auto">
            Our team is available 24/7 to assist with bookings, support, complaints,
            investment or partnership inquiries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;