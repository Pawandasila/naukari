"use client";

import React, { useState, FormEvent, ChangeEvent, useId } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

// Floating Label Input Component
interface FloatingInputProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full bg-transparent border-b placeholder:text-background/90 dark:placeholder:text-foreground/90 border-background/20 dark:border-foreground/20 pt-6 pb-2 text-background dark:text-foreground focus:outline-none focus:border-background dark:focus:border-foreground transition-colors text-sm"
      />
      <label
        htmlFor={name}
        className={`absolute left-0 uppercase tracking-widest transition-all duration-200 pointer-events-none ${
          isFloating
            ? "top-0 text-[10px] text-background/60 dark:text-foreground/60"
            : "top-4 text-sm text-background/70 dark:text-foreground/70"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

// Floating Label Textarea Component
interface FloatingTextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  name,
  label,
  value,
  onChange,
  rows = 3,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full bg-transparent border-b border-background/20 dark:border-foreground/20 pt-6 pb-2 text-background dark:text-foreground focus:outline-none focus:border-background dark:focus:border-foreground transition-colors text-sm resize-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-0 uppercase tracking-widest transition-all duration-200 pointer-events-none ${
          isFloating
            ? "top-0 text-[10px] text-background/60 dark:text-foreground/60"
            : "top-4 text-sm text-background/70 dark:text-foreground/70"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

// Floating Label Select with shadcn
interface FloatingShadcnSelectProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
}

const FloatingShadcnSelect: React.FC<FloatingShadcnSelectProps> = ({
  label,
  value,
  onValueChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isFloating = isOpen || value.length > 0;

  // Only render Select on client to avoid hydration mismatch
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <label
        className={`absolute left-0 uppercase tracking-widest transition-all duration-200 pointer-events-none z-10 ${
          isFloating
            ? "top-0 text-[10px] text-background/60 dark:text-foreground/60"
            : "top-4 text-sm text-background/70 dark:text-foreground/70"
        }`}
      >
        {label}
      </label>
      {isMounted ? (
        <Select
          value={value}
          onValueChange={onValueChange}
          onOpenChange={setIsOpen}
        >
          <SelectTrigger className="w-full bg-transparent border-0 border-b border-background/20 dark:border-foreground/20 rounded-none pt-6 pb-2 h-auto text-background dark:text-foreground focus:ring-0 focus:border-background dark:focus:border-foreground shadow-none text-sm uppercase tracking-wider">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="bg-card border border-border shadow-lg">
            {options.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="text-card-foreground hover:bg-muted cursor-pointer"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <div className="w-full border-b border-background/20 dark:border-foreground/20 pt-6 pb-2 h-auto text-background/50 dark:text-foreground/50 text-sm">
          Loading...
        </div>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const serviceOptions = [
    { value: "permanent", label: "Permanent Staffing" },
    { value: "contract", label: "Contract Staffing" },
    { value: "executive", label: "Executive Search" },
    { value: "rpo", label: "RPO Services" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-card overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-lg">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Response within 24h
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Let's Build Your Team{" "}
              <span className="text-primary">Together</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Connect with our talent specialists to find the perfect fit for
              your company. Fill out the form and we'll start the search
              immediately.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-xl">
                    check_circle
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">
                    Verified Candidates
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Pre-screened professionals ready to hire.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-xl">
                    bolt
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">
                    Fast Placement
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Average placement time of 7 days.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-xl">
                    support_agent
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">
                    Dedicated Support
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Personal account manager for every client.
                  </span>
                </div>
              </div>
            </div>

            {/* Trust signal */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image
                    src="https://i.pravatar.cc/100?img=1"
                    alt="Customer"
                    height={100}
                    width={100}
                    className="h-10 w-10 rounded-full border-2 border-card object-cover"
                  />
                  <Image
                    src="https://i.pravatar.cc/100?img=2"
                    alt="Customer"
                    height={100}
                    width={100}
                    className="h-10 w-10 rounded-full border-2 border-card object-cover"
                  />
                  <Image
                    src="https://i.pravatar.cc/100?img=3"
                    alt="Customer"
                    height={100}
                    width={100}
                    className="h-10 w-10 rounded-full border-2 border-card object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500 text-xs">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Trusted by 500+ companies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="w-full">
            <div className="bg-foreground dark:bg-muted p-8 md:p-12 border border-border/20 backdrop-blur-sm rounded-2xl">
              <h3 className="text-2xl font-bold uppercase mb-10 text-background dark:text-foreground">
                Get a Free Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <FloatingInput
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FloatingShadcnSelect
                  label="Select Service"
                  value={formData.service}
                  onValueChange={handleServiceChange}
                  options={serviceOptions}
                />
                <FloatingTextarea
                  name="message"
                  label="Your Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                />
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-background dark:bg-foreground text-foreground dark:text-background font-bold uppercase tracking-widest py-6 h-auto mt-4 hover:bg-background/90 dark:hover:bg-foreground/90 transition-colors text-base"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent!"
                    : "Send Request"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
