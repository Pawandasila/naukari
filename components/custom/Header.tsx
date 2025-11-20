"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-colors duration-300 ${
        isScrolled ? "bg-slate-950/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between px-6 lg:px-10 py-3 max-w-7xl"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 lg:flex-1">
          <Link href="#" className="flex items-center gap-2 group">
            <Image
              alt="Devbhoomi Global Services logo"
              height={40}
              width={40}
              className="h-10 w-10 object-cover rounded-full ring-1 ring-white/10"
              src="/logo.png"
            />
            <span className="font-semibold text-white text-lg tracking-tight group-hover:text-blue-300 transition-colors">
              Devbhoomi
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8">
          {['Services','Process','Jobs','Contact'].map(label => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 transition-colors"
          >
            Register
          </Link>
        </div>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <Button
            type="button"
            variant="default"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white rounded-md hover:bg-white/10"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md px-6 pt-20 pb-10 flex flex-col">
          <div className="flex flex-col gap-4 flex-1">
            {['Services','Process','Jobs','Contact'].map(label => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-100 py-3 border-b border-white/10"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500 transition-colors"
          >
            Register →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;