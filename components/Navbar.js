"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-500/20 bg-black/40 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <div className="text-[27px] font-extrabold cursor-pointer">
              <span className="text-white">Bit</span>
              <span className="text-purple-500">Links</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

            <Link href="/">
              <li className="hover:text-purple-400 transition-all duration-300">
                Home
              </li>
            </Link>

            <Link href="/about">
              <li className="hover:text-purple-400 transition-all duration-300">
                About
              </li>
            </Link>

            <Link href="/shorten">
              <li className="hover:text-purple-400 transition-all duration-300">
                Shorten
              </li>
            </Link>

            <Link href="/contact">
              <li className="hover:text-purple-400 transition-all duration-300">
                Contact Us
              </li>
            </Link>

          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">

            <Link href="/shorten">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-900/50">
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className="px-5 py-2 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300">
                GitHub
              </button>
            </Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen
              ? "max-h-96 opacity-100 pb-5"
              : "max-h-0 opacity-0"
            }`}
        >

          <ul className="flex flex-col gap-4 text-gray-300 font-medium pt-4">

            <Link href="/">
              <li className="hover:text-purple-400">
                Home
              </li>
            </Link>

            <Link href="/about">
              <li className="hover:text-purple-400">
                About
              </li>
            </Link>

            <Link href="/shorten">
              <li className="hover:text-purple-400">
                Shorten
              </li>
            </Link>

            <Link href="/contact">
              <li className="hover:text-purple-400">
                Contact Us
              </li>
            </Link>

          </ul>

          <div className="flex flex-col gap-3 mt-5">

            <Link href="/shorten">
              <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold hover:scale-105 transition">
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className="w-full px-5 py-2 rounded-xl border border-purple-500 text-purple-300">
                GitHub
              </button>
            </Link>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar