"use client";



const Newsletter = () => {
  return (
    <section className="flex justify-center items-center py-16 px-6 bg-gray-100">
      <div className="bg-[#2B2F31] text-center text-white rounded-3xl py-8 px-6 md:px-12 max-w-2xl w-full shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Subscribe to our Newsletter
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Get early access to our latest updates and receive notifications whenever we find 
          stories of people not using AnyWork.{" "}
          <span className="block md:inline">(We listen, we don’t judge 🫣)</span>
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto flex-1  border bg-white px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5EC6E8]"
          />
          <button
            type="submit"
            className="bg-secondary hover:bg-bg-secondary text-white font-semibold px-6 py-3 rounded-md transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-gray-400 text-sm mt-6">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
