// components/Header.jsx
// Responsive header with brand + nav links + auth actions.

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <rect
                width="24"
                height="24"
                rx="6"
                fill="var(--brand-600)"
              ></rect>
              <path
                d="M7 12h10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold text-lg">MyApp</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-gray-900">
              Docs
            </Link>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm px-3 py-2 rounded-md hover:bg-gray-100"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden transition-max-h duration-300 overflow-hidden ${open ? "max-h-60" : "max-h-0"}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="/features" className="block px-3 py-2 rounded-md">
            Features
          </Link>
          <Link href="/pricing" className="block px-3 py-2 rounded-md">
            Pricing
          </Link>
          <Link href="/docs" className="block px-3 py-2 rounded-md">
            Docs
          </Link>
          <div className="pt-2 border-t">
            <Link href="/login" className="block px-3 py-2 rounded-md">
              Log in
            </Link>
            <Link
              href="/signup"
              className="block mt-2 px-3 py-2 rounded-md bg-teal-600 text-white text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
