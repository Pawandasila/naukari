"use client";

import { ArrowRight, PersonStanding } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[500px] h-[85vh] sm:h-[90vh] sm:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Professionals collaborating"
          fill
          className="h-full w-full object-cover object-[center_20%] sm:object-top"
          src="https://devbhoomiglobalservices.com/wp-content/uploads/2024/11/pexels-tima-miroshnichenko-5439371.jpg"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/75 to-slate-950/85"></div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-left text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            <span className="inline-block rounded-md text-white shadow-sm">
              Welcome to
            </span>
            <span className="inline-block rounded-md text-white shadow-md">
              Devbhoomi Global Services
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="mt-6 text-left text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
          >
            Connecting <span className="text-yellow-400">Talent</span> with{" "}
            <TypingText 
              words={["Opportunities", "Dreams", "Careers"]}
              className="text-green-400"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="mt-4 text-left text-sm sm:text-base lg:text-lg text-slate-200 italic"
          >
            At K J R Devbhoomi Global Services, we connect skilled professionals with the roles they need most. Whether you're hiring or seeking your next career move, the perfect match is just a click away.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white shadow hover:bg-blue-500 transition-colors"
            >
              <span className="material-symbols-outlined text-base">person_add</span>
              <span className="hidden xs:inline">Register Now</span>
              <span className="xs:hidden">Register</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span className="hidden xs:inline">Learn More</span>
              <span className="xs:hidden">Learn</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-xl"
          >
            <div className="rounded-md bg-white/5 px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide text-slate-300 leading-tight">
                Jobs Placed
              </p>
              <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                500+
              </p>
            </div>
            <div className="rounded-md bg-white/5 px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide text-slate-300 leading-tight">
                Companies
              </p>
              <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                200+
              </p>
            </div>
            <div className="rounded-md bg-white/5 px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide text-slate-300 leading-tight">
                Satisfaction
              </p>
              <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                98%
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.15),transparent_60%)]">
        <svg
          className="w-full h-4 sm:h-6 lg:h-8 text-white dark:text-slate-950"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C150,60 350,0 600,0 C850,0 1050,60 1200,120 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
