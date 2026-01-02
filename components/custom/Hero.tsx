"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "@/assests/bg-2.png";

const Hero: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-0 lg:min-h-screen bg-background overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center lg:min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-6 md:gap-8"
          >
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 sm:px-3 md:px-4 py-1 md:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-semibold text-primary">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary"></span>
              </span>
              #1 Recruitment Platform in India
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.1] md:leading-[1.05] tracking-tight text-foreground">
                Your Next <span className="text-primary">Hire</span> is
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>One Click Away
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with verified talent across India. From startups to
                enterprises, we power recruitment that works.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4">
              <Button
                size="lg"
                className="h-10 sm:h-11 md:h-12 lg:h-14 px-4 sm:px-5 md:px-6 lg:px-8 text-xs sm:text-sm md:text-base font-bold rounded-lg md:rounded-xl shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined mr-1.5 sm:mr-2 text-base sm:text-lg md:text-xl">
                  work
                </span>
                Hire Talent
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-10 sm:h-11 md:h-12 lg:h-14 px-4 sm:px-5 md:px-6 lg:px-8 text-xs sm:text-sm md:text-base font-bold rounded-lg md:rounded-xl"
              >
                <span className="material-symbols-outlined mr-1.5 sm:mr-2 text-base sm:text-lg md:text-xl">
                  search
                </span>
                Find Jobs
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-3 sm:pt-4">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                  50K+
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  Active Jobs
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                  10K+
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  Companies
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                  98%
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  Success Rate
                </span>
              </div>
            </div>

            {/* Trust logos */}
            <div className="pt-3 sm:pt-4 md:pt-6 border-t border-border">
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">
                Trusted by leading companies
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 opacity-50">
                {[
                  "change_history",
                  "all_inclusive",
                  "bolt",
                  "diamond",
                  "spa",
                ].map((icon, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl text-foreground"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Image - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={bgImage}
                alt="Team collaboration and recruitment network"
                width={700}
                height={700}
                className="w-full max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[750px] h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
