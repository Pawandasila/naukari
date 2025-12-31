"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Employers: React.FC = () => {
  const features = [
    {
      icon: "verified",
      title: "Qualified Talent",
      description:
        "Access a pre-vetted pool of candidates ready to contribute from day one.",
    },
    {
      icon: "support",
      title: "Recruitment Support",
      description:
        "Dedicated account managers to guide you through sourcing and interviewing.",
    },
    {
      icon: "handshake",
      title: "Outsource Hiring",
      description:
        "Let us handle the entire recruitment lifecycle so you can focus on business.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50" id="employers">
      <div className="px-4 md:px-10 lg:px-20 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <span className="w-8 h-[2px] bg-primary"></span>
                For Employers
              </div>
              <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Build Your Dream Team with Confidence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Streamline your hiring process with our enterprise-grade
                solutions. We provide the tools and talent pool you need to
                scale effectively.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-fit mt-2 h-12 px-6 font-bold shadow-md">
              Start Hiring Now
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuckBqNkTfuKJqOsw8O9nscM-u0hvAanlm7QN5-KFWOl55Cj5Ry0Mn8G6gXS9UpivRCOdqi7-EUm4GCuzT3tFV7C1CrttTKzZlpeLsyu7GIP0GfCsVRkAGn2muYoEvqwBkksOIgfsKa92erekWLGjmk1bo2UP8F5bxnB1_Fq_aCsTXgrT34wt_U19Xgxp4TKrQpxvJZLwd-vm3Sy1cFSufcO-8dVP4HlrO11E9W4RddGSjQqJRDVdLbVM2Jg6rJI8nR2nsKelBKhcc')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employers;
