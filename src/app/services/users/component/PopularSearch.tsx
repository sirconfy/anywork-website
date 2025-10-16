import { FaMapMarkerAlt } from "react-icons/fa";

const searches = [
  {
    id: 1,
    label: "Plumber near me in Surulere",
    style: "top-[20%] left-[15%]",
  },
  { id: 2, label: "AC repair in Iyowa Igbaja", style: "top-[55%] left-[35%]" },
  {
    id: 3,
    label: "Electrician in Magodo, Oshodi",
    style: "top-[25%] right-[10%]",
  },
  { id: 4, label: "Carpenter in Lekki", style: "top-[60%] right-[25%]" },
];

export default function PopularSearches() {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center mt-6"
      style={{
        backgroundImage: "url('/assets/images/map.png')",
      }}
    >
      <h2 className="text-[48px] font-[600] text-center pt-20 text-textcolor">
        Popular Searches Near You
      </h2>

      {/* Search bubbles */}
      {searches.map((search) => (
        <div
          key={search.id}
          className={`absolute ${search.style} mt-[10rem] bg-[#282E32] text-white text-[14px] px-4 py-2 rounded-md flex items-center font-[400]`}
        >
          <FaMapMarkerAlt className="text-[#EA7641] mr-2" />
          {search.label}
        </div>
      ))}
    </div>
  );
}
