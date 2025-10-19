import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";

interface BlogCardProps {
  tag: string;
  tagColor: string;
  title: string;
  date: string;
  time: string;
  image: string;
  desc: string;
}

export default function BlogCard({
  tag,
  tagColor,
  title,
  date,
  time,
  image,
  desc,
}: BlogCardProps) {
  return (
    <div className="w-full border border-[#E6E6E6] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
      
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-out scale-105"
        />
        <span
          className={`absolute top-2 right-4 text-xs px-3 py-1 rounded-full font-semibold ${tagColor}`}
        >
          {tag}
        </span>
      </div>

      
      <div className="p-4">
        <h3 className="text-[18px] font-[600] text-textcolor mb-2">
          {title}
        </h3>
        <p className="text-[16px] font-[400] text-gray-500 mb-2">{desc}</p>

        <div className="flex justify-between items-center my-6">
          <div className="flex items-center gap-2 font-[400] text-[16px]">
            <FiCalendar className="text-[#00B8D9]" />
            <span className="text-[#282E3280]">{date}</span>
          </div>
          <div className="flex items-center rounded-full px-4 border border-[#282E3280]">
            <span className="text-[#282E3280] font-[400] text-[14px]">
              {time}
            </span>
          </div>
        </div>

        <button className="text-sm text-[#026994] text-[14px] font-[400] border border-[#026994] rounded-xl w-full px-4 py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#026994] hover:text-white">
          <span>Read Article</span>
          <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
