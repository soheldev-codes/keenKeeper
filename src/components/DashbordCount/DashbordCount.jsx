import React from "react";

const DashbordCount = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m:w-7xl mx-auto">
      <div className=" w-[260] text-center bg-white py-8 rounded-md">
        <h3 className="text-4xl font-semibold text-[#244d3f] ">8</h3>
        <p className="text-lg text-[#64748b]">Total Friends</p>
      </div>
      <div className="w-[260] text-center bg-white py-8 rounded-md">
        <h3 className="text-4xl font-semibold text-[#244d3f] ">3</h3>
        <p className="text-lg text-[#64748b]">On Track</p>
      </div>
      <div className="w-[260] text-center bg-white py-8 rounded-md">
        <h3 className="text-4xl font-semibold text-[#244d3f] ">6</h3>
        <p className="text-lg text-[#64748b]">Need Attention</p>
      </div>
      <div className="w-[260] text-center bg-white py-8 rounded-md">
        <h3 className="text-4xl font-semibold text-[#244d3f] ">12</h3>
        <p className="text-lg text-[#64748b]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default DashbordCount;
