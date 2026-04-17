import Image from "next/image";
import React from "react";
import FriendCard from "../FriendCard/FriendCard";

async function getFriends() {
  const res = await fetch("https://keen-keeper-roan.vercel.app/friends.json", {
    cache: "no-store",
  });
  return res.json();
}

const Friends = async () => {
  const friends = await getFriends();

  return (
    <div className=" mt-20 w-7xl   mx-auto p-4">
      <h2 className="pb-8 text-2xl font-semibold">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {friends.map((friend, ind) => (
          <FriendCard key={ind} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
