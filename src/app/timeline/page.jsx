"use client";

import { useContext, useState } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { FiPhone, FiMessageSquare, FiVideo, FiUsers } from "react-icons/fi";

export default function TimelinePage() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <FiPhone className="text-xl text-gray-600" />;
      case "Text":
        return <FiMessageSquare className="text-xl text-gray-600" />;
      case "Video":
        return <FiVideo className="text-xl text-gray-600" />;
      default:
        return <FiUsers className="text-xl text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen  px-4 md:px-10 py-10 container mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Timeline</h1>

      {/* Filter */}
      <div className="mb-6 ">
        <select
          className="select select-bordered w-full max-w-xs outline-0 cursor-pointer focus:outline-none font-semibold"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Filter Timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredData.length === 0 && (
          <p className="text-gray-500">No interactions yet</p>
        )}

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              {getIcon(item.type)}
            </div>

            {/* Content */}
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">{item.type}</span>
                <span className="text-[#64748b]"> with {item.name}</span>
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
