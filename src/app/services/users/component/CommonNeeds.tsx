

const commonNeeds = [
  {
    id: 1,
    img: "/assets/images/bucket.png",
    bubbleText: `"My bathroom is leaking"`,
    description: "Get a vetted plumber in 10 mins.",
  },
  {
    id: 2,
    img: "/assets/images/laptop.png",
    bubbleText: `"Light don go!"`,
    description: "Find a trusted electrician who won’t shock your wallet.",
  },
  {
    id: 3,
    img: "/assets/images/think.png",
    bubbleText: `"Who go install this my AC?"`,
    description: "Sorted.",
  },
];

// ✅ Position helper
const getBubblePosition = (id: number) => {
  if (id === 1) return "top-[25%] left-[65%] -translate-x-1/2 -translate-y-1/2";
  if (id === 2) return "top-1/2 left-1/2 transform -translate-x-1/2 ";
  if (id === 3)
    return "top-[25%] left-[60%] transform -translate-x-1/2 -translate-y-1/2";
  return "top-4 left-4";
};

export default function CommonNeeds() {
  return (
    <div className="py-18 bg-white text-center">
      <h2 className="text-[32px] text-textcolor font-[600] mb-8">
        Common Needs We Solve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-[1350px] mx-auto">
        {commonNeeds.map((need) => (
          <div
            key={need.id}
            className="relative h-96 rounded-3xl overflow-hidden shadow-md"
          >
            {/* Image layer */}
            <img
              src={need.img}
              alt="need visual"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dynamic speech bubble */}
            <div
              className={`absolute z-10 bg-tertiary text-white text-left text-[14px] font-[600] px-4 py-2 rounded-[8px]  relative max-w-[250px] ${getBubblePosition(
                need.id
              )}`}
            >
              {need.bubbleText}
              <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-400"></div>
            </div>

            {/* Description box at bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/70 p-4 flex items-center gap-4 border-t border-gray-200 z-10 rounded-lg shadow-md">
              <img
                src="/assets/icons/mark.png"
                alt="check icon"
                className="w-5 h-5 flex-shrink-0"
              />
              <p className="text-[16px] text-texrcolor text-left font-[600]">
                {need.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
