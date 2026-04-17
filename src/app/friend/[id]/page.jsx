import FriendDetailsBtn from "@/components/FriendDetailsBtn/FriendDetailsBtn";
import Image from "next/image";

import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiClock,
  FiArchive,
  FiTrash2,
} from "react-icons/fi";

async function getFriend(id) {
  const res = await fetch("http://localhost:3000/friends.json", {
    cache: "no-store",
  });
  const data = await res.json();

  return data.find((f) => f.id === parseInt(id));
}

export default async function FriendDetails({ params }) {
  const { id } = await params;
  const friend = await getFriend(id);
  if (!friend) return <p>Friend not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full mx-auto"
          />

          <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

          <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-red-500 text-white capitalize">
            {friend?.status}
          </span>

          <div className="mt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-green-200 text-green-800">
              {friend?.tags?.[1]?.toUpperCase()}
            </span>
          </div>

          <p className="italic text-gray-500 mt-4">{friend?.bio}</p>

          <p className="text-sm text-gray-400 mt-2">
            Preferred: {friend?.email}
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2 space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-green-700">
                {friend?.days_since_contact}
              </h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-green-700">
                {friend?.goal}
              </h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-green-700">
                {friend?.next_due_date}
              </h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-green-800">
                Relationship Goal
              </h3>
              <p className="text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-semibold text-black">30 days</span>
              </p>
            </div>
            <button className="px-4 py-1 shadow cursor-pointer rounded-md text-sm hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-green-800 mb-4">
              Quick Check-In
            </h3>

            <FriendDetailsBtn friend={friend} />
          </div>
        </div>

        {/* LEFT ACTION BUTTONS */}
        <div className="md:col-span-1 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white cursor-pointer transition rounded-lg py-3 hover:bg-gray-50">
            <FiClock /> Snooze 2 Weeks
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-white cursor-pointer transition rounded-lg py-3 hover:bg-gray-50">
            <FiArchive /> Archive
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-white cursor-pointer transition rounded-lg py-3 text-red-500 hover:bg-red-50">
            <FiTrash2 /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
