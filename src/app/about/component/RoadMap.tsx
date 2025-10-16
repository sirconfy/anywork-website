import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";;
import { MdLocationCity } from "react-icons/md";
import { LuBadgeDollarSign } from "react-icons/lu";
import { IoIosPhonePortrait } from "react-icons/io";

const roadmapItems = [
  {
    title: "Serving customers in Lagos",
    description: "Currently operational across major Lagos areas",
    icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
    badge: "We are Here",
    badgeStyle: "bg-[#00B8D9] text-white",
  },
  {
    title: "USSD option for artisans",
    description:
      "Making the platform accessible for artisans without smartphones",
    icon: <IoIosPhonePortrait className="text-yellow-500 text-xl" />,
    badge: "Coming Soon",
    badgeStyle: "bg-[#EBEBEB] text-[#282E3280]",
  },
  {
    title: "Subscription-based service plans",
    description: "Long-term service plans for regular users and businesses",
    icon: <LuBadgeDollarSign className="text-orange-500 text-xl" />,
    badge: "Coming Soon",
    badgeStyle: "bg-[#EBEBEB] text-[#282E3280]",
  },
  {
    title: "Expansion into other Nigerian cities",
    description: "Taking AnyWork to Abuja, Port Harcourt, Kano, and beyond",
    icon: <MdLocationCity className="text-cyan-700 text-xl" />,
    badge: "Future",
    badgeStyle: "bg-[#00B8D9] text-white",
  },
];

export default function Roadmap() {
  return (
    <section className="bg-[#F5F9FD] py-16 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-[32px] font-[600] text-textcolor">
          Our Roadmap
        </h2>
        <p className="text-gray-600 font-[400]  text-[18px] mt-2">
          Building the future of artisan services in Nigeria
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmapItems.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col sm:flex-row bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition"
          >
            {/* Content */}
            <div className="flex-1  mt-4">
              {/* Icon */}
              <div className="mr-4 mb-4 sm:mb-2">{item.icon}</div>
              <h3 className="text-md font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>

            {/* Badge */}
            {item.badge && (
              <div
                className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-lg font-medium ${item.badgeStyle}`}
              >
                {item.badge}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
