"use client";

import Image from "next/image";
import Link from "next/link";

export default function FriendCard({ friend }) {
  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-500 text-white",
  };

  return (
    <Link className="cursor-pointer" href={`/friend/${friend.id}`}>
      <div className="bg-gray-100 rounded-3xl p-4 py-10 text-center shadow-lg   ">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold text-gray-800">{friend.name}</h2>

        {/* Days */}
        <p className="text-gray-500 text-lg mt-2">
          {friend.days_since_contact}d ago
        </p>

        {/* Tag */}
        <div className="mt-6">
          <span className="px-6 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium">
            {friend.tags[0].toUpperCase()}
          </span>
        </div>

        {/* Status */}
        <div className="mt-6">
          <span
            className={`px-8 py-3 rounded-full text-sm font-semibold ${statusStyles[friend.status]}`}
          >
            {friend.status === "almost due"
              ? "Almost Due"
              : friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
