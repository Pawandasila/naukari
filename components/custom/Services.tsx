"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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
      className="py-8 md:py-12 px-4 md:px-6 relative z-10 bg-background"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header - Always visible */}
        <div className="text-center lg:text-left mb-6 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-black uppercase tracking-tighter mb-3 md:mb-6 text-foreground lg:hidden">
            Our <span className="text-muted-foreground">Domains.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-sm mx-auto mb-4 leading-relaxed lg:hidden">
            We specialize in recruiting top talent across key industries.
          </p>
        </div>

        {/* Mobile Swiper Layout */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={2.2}
            centeredSlides={false}
            cardsEffect={{
              slideShadows: true,
              perSlideOffset: 20,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-16"
          >
            {categories.map((category, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="w-full h-32 relative mb-3 flex items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-sm whitespace-nowrap font-bold uppercase tracking-tight text-foreground text-center">
                    {category.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden lg:flex flex-row gap-16">
          {/* Left Sticky Header */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-24 h-fit">
              <h2 className="text-5xl xl:text-6xl leading-tight font-black uppercase tracking-tighter mb-8 text-foreground">
                Our <br />
                <span className="text-muted-foreground">Domains.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-sm mb-12 leading-relaxed">
                We specialize in recruiting top talent across key industries.
                Find the perfect fit for your team.
              </p>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:w-2/3 space-y-0">
            {categories.map((category, i) => (
              <div
                key={i}
                className="group py-16 hover:bg-card/30 transition-all duration-300 border-b border-border/50 last:border-b-0"
              >
                <div className="flex flex-row gap-12 items-center">
                  {/* Number */}
                  <div className="w-24 shrink-0">
                    <span className="text-6xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500 font-sans">
                      {category.num}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="w-40 h-64 shrink-0 overflow-hidden relative flex items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain bg-transparent group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-4xl xl:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shrink-0">
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
