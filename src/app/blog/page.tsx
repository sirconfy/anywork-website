"use client"

import { useState } from "react";
import BlogHeader from "./components/BlogHeader";
import BlogSearch from "./components/BlogSearch";
import BlogTags from "./components/BlogTags";
import BlogGrid from "./components/BlogGrid";



const tags = [
  { label: "All Post", color: "bg-white", isActive: true },
  { label: "Home Care", color: "bg-white" },
  { label: "Artisan Spotlights", color: "bg-white" },
  { label: "Customer Stories", color: "bg-white" },
  { label: "Brand & Product", color: "bg-white" },
];



export default function Page() {
  const [activeTag, setActiveTag] = useState("All Post");

  const getTagStyle = (label: string) =>
    label === activeTag
      ? "bg-primary text-white"
      : tags.find((t) => t.label === label)?.color || "bg-gray-200 text-gray-700";


      const dummyBlog = {
        title: "5 Essential Home Maintenance Tips Every Nigerian Homeowner Should Know",
        desc: "From dealing with harmattan dust to preparing for rainy season, here are practical tips to keep your home in top condition year-round.",
        date: "Mar 15, 2024",
        time: "5 mins",
        image: "/assets/images/artisan.png",
      };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <BlogHeader />
      <BlogSearch />
      <BlogTags
        tags={tags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        getTagStyle={getTagStyle}
      />
      <BlogGrid tags={tags} getTagStyle={getTagStyle} dummyBlog={dummyBlog} />
    </div>
  );
}
