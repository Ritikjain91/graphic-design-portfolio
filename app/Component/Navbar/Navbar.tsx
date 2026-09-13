"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";

export default function Navbar({ children }: { children?: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo / Brand Mark */}
          <a
            href="#"
            className="group flex items-center gap-3 transition duration-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-600 font-extrabold text-white shadow-md shadow-pink-500/20 group-hover:scale-105 group-hover:shadow-pink-500/40 transition-all">
              RJ
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-pink-400 transition-colors">
                Ritik Jain
              </span>
              <span className="text-xs text-neutral-400 font-medium -mt-1">
                Visual Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#work"
              className="hover:text-white transition-colors duration-200 hover:scale-105"
            >
              Featured Work
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors duration-200 hover:scale-105"
            >
              About Me
            </a>
            <a
              href="#tools"
              className="hover:text-white transition-colors duration-200 hover:scale-105"
            >
              Tools &amp; Stack
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-200 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-600/25 transition duration-300 hover:from-pink-500 hover:to-purple-500 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-neutral-800/80 px-6 py-4 mt-3 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Featured Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              About Me
            </a>
            <a
              href="#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Tools &amp; Stack
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-md"
            >
              Let&apos;s Connect
            </a>
          </div>
        )}
      </header>

      {children}
    </>
  );
}