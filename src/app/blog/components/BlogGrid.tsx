"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogGrid({
  tags,
  getTagStyle,
  dummyBlog,
}: {
  tags: { label: string }[];
  getTagStyle: (tag: string) => string;
  dummyBlog: {
    title: string;
    date: string;
    time: string;
    image: string;
    desc: string;
  };
}) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => {
        const tag = tags[index % tags.length];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.2, // creates staggered reveal
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <BlogCard
              tag={tag.label}
              tagColor={getTagStyle(tag.label)}
              title={dummyBlog.title}
              desc={dummyBlog.desc}
              date={dummyBlog.date}
              time={dummyBlog.time}
              image={dummyBlog.image}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
