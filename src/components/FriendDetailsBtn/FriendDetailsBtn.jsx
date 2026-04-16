"use client";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import toast from "react-hot-toast";

export default function FriendDetailsBtn({ friend }) {
  const { addEntry } = useContext(TimelineContext);

  const handleClick = (type) => {
    addEntry(type, friend.name);

    toast.success(`${type} added with ${friend.name} ✅`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button onClick={() => handleClick("Call")} className="btn">
        📞 Call
      </button>

      <button onClick={() => handleClick("Text")} className="btn">
        💬 Text
      </button>

      <button onClick={() => handleClick("Video")} className="btn">
        🎥 Video
      </button>
    </div>
  );
}
