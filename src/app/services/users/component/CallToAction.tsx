export default function CallToAction() {
    return (
      <section className="px-4 md:px-0 py-16 flex justify-center">
        <div className="bg-[#262C2F] rounded-[32px] px-8 md:px-40 py-12 text-center max-w-4xl w-full">
          <h2 className="text-white text-2xl md:text-[28px] font-[600] mb-4">
          Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-sm md:text-[18px] font-[400] mb-8">
            Join thousands of satisfied customers who trust AnyWork for their service needs.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary cursor-pointer text-white px-6 py-2 rounded-md font-medium transition">
             Sign Up
            </button>
           
          </div>
        </div>
      </section>
    );
  }
  