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
      className="py-12 px-4 sm:px-6 relative z-10 bg-background"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-20 lg:top-32 h-fit">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-black uppercase tracking-tighter mb-6 md:mb-8 text-foreground">
                Our <br />{" "}
                <span className="text-muted-foreground">Domains.</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-sm mb-8 md:mb-12 leading-relaxed">
                We specialize in recruiting top talent across key industries.
                Find the perfect fit for your team.
              </p>
              {/* <div className="flex flex-col gap-4">
                <button
                  type="button"
                  className="w-fit rounded-full border border-primary/30 px-6 md:px-8 py-3 md:py-4 uppercase tracking-widest text-xs font-bold text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20"
                >
                  View All Categories{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div> */}
            </div>
          </div>

          <div className="lg:w-2/3 space-y-0 pt-8 lg:pt-0">
            {categories.map((category, i) => (
              <div
                key={i}
                className="group py-8 md:py-12 lg:py-16 hover:bg-card/30 transition-all duration-300 border-b border-border/50 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
                  <div className="md:w-20 lg:w-24 shrink-0">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500 font-sans">
                      {category.num}
                    </span>
                  </div>

                  <div className="w-24 md:w-32 lg:w-40 h-36 md:h-52 lg:h-64 shrink-0 overflow-hidden relative flex items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain bg-transparent group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight mb-4 md:mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors duration-300">
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
