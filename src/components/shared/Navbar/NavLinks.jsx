"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`font-semibold px-4 py-2 flex items-center gap-2 ${pathname === "/" ? "bg-[#244d3f]  rounded text-white" : "text-[#64748b] bg-white"}`}
      >
        <IoHomeOutline /> Home
      </Link>
      <Link
        href="timeline"
        className={`font-semibold px-4 py-2 flex items-center gap-2 ${pathname === "/timeline" ? "bg-[#244d3f]  rounded text-white" : "text-[#64748b] bg-white"}`}
      >
        <MdAccessTime /> Timeline
      </Link>
      <Link
        href="stats"
        className={`font-semibold px-4 py-2 flex items-center gap-2 ${pathname === "/stats" ? "bg-[#244d3f]  rounded text-white" : "text-[#64748b] bg-white"}`}
      >
        <ImStatsDots /> Stats
      </Link>
    </>
  );
};

export default NavLinks;
