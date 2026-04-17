"use client";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import toast from "react-hot-toast";
import { FiMessageSquare, FiPhone, FiVideo } from "react-icons/fi";

export default function FriendDetailsBtn({ friend }) {
  const { addEntry } = useContext(TimelineContext);

  const handleClick = (type) => {
    addEntry(type, friend.name);

    toast.success(`${type} added with ${friend.name} ✅`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleClick("Call")}
        className="bg-white shadow cursor-pointer rounded-xl p-6 flex flex-col items-center hover:bg-gray-50"
      >
        <FiPhone size={22} />
        <span className="mt-2 text-sm">Call</span>
      </button>

      <button
        onClick={() => handleClick("Text")}
        className="bg-white shadow cursor-pointer rounded-xl p-6 flex flex-col items-center hover:bg-gray-50"
      >
        <FiMessageSquare size={22} />
        <span className="mt-2 text-sm">Text</span>
      </button>

      <button
        onClick={() => handleClick("Video")}
        className="bg-white shadow cursor-pointer rounded-xl p-6 flex flex-col items-center hover:bg-gray-50"
      >
        <FiVideo size={22} />
        <span className="mt-2 text-sm">Video</span>
      </button>
    </div>
  );
}
