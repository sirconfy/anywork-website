export default function MissionVision() {
    const items = [
      {
        title: "Our Mission",
        description:
          "Bringing quality craftsmanship, backed by insurance, to users every day.",
        image: "/assets/images/setting.png", 
      },
      {
        title: "Our Vision",
        description:
          "To restore trust, quality, and dignity in skilled work across Nigeria.",
        image: "/assets/images/telescope.png", 
      },
      {
        title: "How We Do It",
        description:
          "By using technology, we match you with highly-rated, nearby artisans who are ready to get the job done right. With AnyWork, you get peace of mind, and artisans get the opportunity to build a trusted profile and a sustainable career.",
        image: "/assets/images/hands.png", 
      },
    ];
  
    return (
      <section className="bg-white px-6 md:px-14 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            const isOddCount = items.length % 2 !== 0;
            const shouldSpanFull = isLastItem && isOddCount;
  
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-[#F1F1F1] overflow-hidden hover:shadow-md transition ${
                  shouldSpanFull ? "md:col-span-2" : ""
                }`}
              >
                <div className="p-7 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="px-7 pb-7">
                  <h3 className="text-[24px] font-[900] text-[#282E32] ">
                    {item.title}
                  </h3>
                  <p className="text-[#282E32] text-[20px] font-[400] mt-2">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  