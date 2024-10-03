"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-500 to-green-700 p-6 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mapper</h1>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/game" className="hover:underline">
            Game
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block hover:underline">
            Home
          </Link>
          <Link href="/about" className="block hover:underline">
            About
          </Link>
          <Link href="/game" className="block hover:underline">
            Game
          </Link>
          <Link href="/blog" className="block hover:underline">
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
