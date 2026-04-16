import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#254f43] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-medium">Social Links</h3>

          <div className="flex justify-center gap-4">
            {/* Instagram */}
            <Link
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition"
            >
              <FaInstagram />
            </Link>

            {/* Facebook */}
            <Link
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition"
            >
              <FaFacebookF />
            </Link>

            {/* X */}
            <Link
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
