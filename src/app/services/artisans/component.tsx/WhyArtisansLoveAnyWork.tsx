import {
  FaBriefcase,
  FaCalendarAlt,
  FaCreditCard,
  FaUserTie,
} from "react-icons/fa";

const WhyArtisansLoveAnyWork = () => {
  const features = [
    {
      icon: <FaBriefcase className="text-xl text-[#00B8D9]" />,
      title: "Get job requests daily near you",
      description:
        "Receive consistent job opportunities from customers in your area every day.",
    },
    {
      icon: <FaCalendarAlt className="text-xl text-[#00B8D9]" />,
      title: "Control your schedule and availability",
      description:
        "Work when you want, how you want. Set your own hours and availability.",
    },
    {
      icon: <FaCreditCard className="text-xl text-[#00B8D9]" />,
      title: "Get paid quickly and securely",
      description:
        "Receive your payments immediately after job completion through secure channels.",
    },
    {
      icon: <FaUserTie className="text-xl text-[#00B8D9]" />,
      title: "Build a professional profile that attracts more work",
      description:
        "Showcase your skills and build your reputation to get even more job opportunities.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl md:text-[32px] font-[600] text-center mb-10 text-textcolor">
        Why Artisans Love AnyWork
      </h2>

      <div className="max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white  border border-[#F1F1F1] rounded-xl  transition-shadow duration-300"
          >
            <div className="flex-shrink-0 border border-[#00B8D9] p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="font-[600] text-textcolor text-[20px] mb-1">
                {item.title}
              </h3>
              <p className="text-[#282E3280] text-[16px] font-[400] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyArtisansLoveAnyWork;
