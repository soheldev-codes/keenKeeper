import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-16 space-y-4 text-center">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <h4 className="text-lg text-[#64748b] max-w-xl ">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </h4>

      <button className="font-semibold px-4 py-2 flex items-center gap-2 bg-[#244d3f]  rounded text-white">
        <IoMdAdd />
        Add a Friend
      </button>
    </div>
  );
};

export default Banner;
