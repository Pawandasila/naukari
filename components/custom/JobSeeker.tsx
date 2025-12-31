"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const JobSeeker: React.FC = () => {
  const features = [
    {
      icon: "rocket_launch",
      title: "Fast Application",
      description: "One-click apply to thousands of jobs.",
    },
    {
      icon: "domain",
      title: "Verified Companies",
      description: "Work with trusted, vetted employers.",
    },
    {
      icon: "psychology",
      title: "Skill Matching",
      description: "AI-driven recommendations for you.",
    },
    {
      icon: "trending_up",
      title: "Career Growth",
      description: "Resources to help you negotiate better.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="seekers">
      <div className="px-4 md:px-10 lg:px-20 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQEDJ-WgMrs1WKpq69_z8YzGR_teAg3c5h97F3iM31KoQOBKv0VZDOAEufq1tY_rvQajx1dnwjs7X_rsl5G6FfLLc0w2evsthaon0XkpOpNV5THg_QI-Ur-iyCEZukiyxy43wPu2_hMKqsDWCWQjud3Zk-9wH_WUHNmOYoTTquvu-zU6KguwRl1L6dm1mw-SSAHvxncF-LywiKLJ_WwIPPbKLfA2dxhKhVUP1b4664imRKcrQ6w4h46TbARjAAF0f-7BcLRAGoIsdN')",
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <span className="w-8 h-[2px] bg-primary"></span>
                For Job Seekers
              </div>
              <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Land Your Dream Role Faster
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stop endless searching. Create one profile and get matched with
                top companies looking for your specific skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-5 rounded-xl bg-muted/50 border border-border hover:shadow-md transition-shadow"
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {feature.icon}
                  </span>
                  <h3 className="font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-fit mt-2 h-12 px-6 font-bold shadow-md bg-foreground text-background hover:bg-foreground/90"
            >
              Find a Job
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeeker;
