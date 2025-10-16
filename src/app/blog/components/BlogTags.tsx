"use client";

interface BlogTagsProps {
  tags: { label: string }[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
  getTagStyle: (tag: string) => string;
}

export default function BlogTags({
  tags,
  activeTag,
  setActiveTag,
  getTagStyle,
}: BlogTagsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {tags.map((tag) => (
        <button
          key={tag.label}
          onClick={() => setActiveTag(tag.label)}
          className={`px-4 py-2 rounded-xl text-[16px] text-[#282E32] font-[400] transition border-1 border-[#F1F1F1] ${getTagStyle(tag.label)}`}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}
