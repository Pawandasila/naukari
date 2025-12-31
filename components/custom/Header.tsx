"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    { label: "For Employers", href: "employers" },
    { label: "For Candidates", href: "seekers" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-b-[#e7edf3] dark:border-b-gray-800 bg-white/90 dark:bg-background-dark/90 px-10 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 lg:flex-1">
            <Link href="#" className="flex items-center gap-2 group">
              <Image
                alt="Devbhoomi Global Services logo"
                height={40}
                width={40}
                className="h-10 w-10 object-cover rounded-full ring-1 ring-white/10"
                src="/logo.png"
              />
              <span className="font-semibold text-primary text-lg tracking-tight group-hover:text-primary/40 transition-colors">
                Naukari Marg
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium leading-normal text-[#0d141b] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* <div className="flex gap-3">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-2 bg-[#e7edf3] dark:bg-gray-700 text-[#0d141b] dark:text-white text-sm font-bold hover:bg-primary  hover:text-primary-foreground dark:hover:bg-gray-600 transition-colors">
              <span className="truncate">Log In</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-2 bg-primary text-white text-sm font-bold hover:bg-primary/60 transition-colors shadow-md shadow-blue-500/20">
              <span className="truncate">Sign Up</span>
            </button>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
