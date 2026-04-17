"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center py-20  px-4">
      <div className="text-center  max-w-md">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold mb-4"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-sm opacity-80 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <button className="inline-flex items-center gap-2 bg-[#244d3f] text-white px-6 py-2 rounded-full font-medium  cursor-pointer">
            <FiArrowLeft />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
