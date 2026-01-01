"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import engineerImg from "@/assests/engineer.png";
import doctorImg from "@/assests/doctor.png";
import hrImg from "@/assests/human-resource.jpg";
import marketingImg from "@/assests/marketing.png";
import pharmaImg from "@/assests/pharma.png";

const Services: React.FC = () => {
  const categories = [
    {
      num: "01",
      title: "Engineering",
      description:
        "From civil to mechanical, electrical to software - we connect top engineering talent with leading companies across India.",
      image: engineerImg,
    },
    {
      num: "02",
      title: "Healthcare",
      description:
        "Doctors, nurses, specialists and healthcare professionals. Building teams that save lives and improve patient outcomes.",
      image: doctorImg,
    },
    {
      num: "03",
      title: "Human Resources",
      description:
        "HR managers, recruiters, and talent acquisition specialists who shape company culture and drive employee success.",
      image: hrImg,
    },
    {
      num: "04",
      title: "Marketing",
      description:
        "Digital marketers, brand strategists, and creative professionals who drive growth and build memorable brands.",
      image: marketingImg,
    },
    {
      num: "05",
      title: "Pharma",
      description:
        "Pharmaceutical researchers, QA specialists, and regulatory experts powering the healthcare industry.",
      image: pharmaImg,
    },
  ];

  return (
    <section
      id="services"
      className="md:py-12 px-4 md:px-6 relative z-10 bg-background"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16">
          {/* Left Sticky Header */}
          <div className="lg:w-1/3 shrink-0">
            <div className="lg:sticky lg:top-24 h-fit text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-black uppercase tracking-tighter mb-4 md:mb-6 lg:mb-8 text-foreground">
                Our <br className="hidden lg:block" />{" "}
                <span className="text-muted-foreground">Domains.</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-sm mx-auto lg:mx-0 mb-6 md:mb-8 lg:mb-12 leading-relaxed">
                We specialize in recruiting top talent across key industries.
                Find the perfect fit for your team.
              </p>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:w-2/3 space-y-0 pt-4 lg:pt-0">
            {categories.map((category, i) => (
              <div
                key={i}
                className="group py-6 md:py-12 lg:py-16 hover:bg-card/30 transition-all duration-300 border-b border-border/50 last:border-b-0"
              >
                <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 items-center">
                  {/* Number */}
                  <div className="w-12 md:w-20 lg:w-24 shrink-0">
                    <span className="text-2xl md:text-5xl lg:text-6xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500 font-sans">
                      {category.num}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="w-16 md:w-32 lg:w-40 h-24 md:h-52 lg:h-64 shrink-0 overflow-hidden relative flex items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain bg-transparent group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight mb-2 md:mb-6 text-foreground group-hover:text-primary transition-colors duration-300 truncate md:whitespace-normal">
                      {category.title}
                    </h3>
                    <p className="hidden md:block text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                    <ArrowRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
