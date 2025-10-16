import { FiSearch } from "react-icons/fi";

export default function BlogSearch() {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-md">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <FiSearch className="text-xl" />
        </span>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 border border-gray-200 focus:outline-none "
        />
      </div>
    </div>
  );
}
