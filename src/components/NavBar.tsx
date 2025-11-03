// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Zaakiyb.svg";
import { LogIn } from "lucide-react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  // const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-white shadow-insect-200 z-50 shadow-sm">
      <div className="w-11/12 mx-auto p-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={120}
                  height={120}
                  className="w-[125px] h-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-10 text-[#0a0a60]">
            <Link
              href="/"
              className="py-1 font-medium border-b-2 border-transparent hover:text-border-b hover:border-b-2 hover:border-[#0a0a60] duration-300 transition-colors"
            >
              Home
            </Link>
            <MegaMenu />
            <Link
              href="/#pricing"
              className="py-1 font-medium border-b-2 border-transparent hover:text-border-b hover:border-b-2 hover:border-[#0a0a60] duration-300 transition-colors"
            >
              Pricing
            </Link>
          </div>

          <Link
            href="https://sprw.io/stt-NwNkd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hidden pointer text-[14px] bg-[#0a0a60] font-normal md:flex items-center space-x-4 text-white duration-300 transition-colors px-4 py-2 rounded-lg gap-3">
              Book a Demo
              <LogIn size={20} />
            </button>
          </Link>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Integrations
          </Link>
          <Link
            href="/#pricing"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Pricing
          </Link>

          <div className="flex space-x-4 px-3 py-2">
            <Link
              href="https://sprw.io/stt-NwNkd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hidden pointer text-[14px] bg-[#0a0a60] font-normal md:flex items-center space-x-4 text-white duration-300 transition-colors px-4 py-2 rounded-lg gap-3">
                Book a Demo
                <LogIn size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
