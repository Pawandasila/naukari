"use client";

import React from "react";

const Footer: React.FC = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sitemapLinks = [
    { label: "Home", href: "top" },
    { label: "Services", href: "services" },
    { label: "Employers", href: "employers" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <footer className="bg-foreground dark:bg-card border-t border-background/10 dark:border-border pt-20 pb-8 px-6 md:px-10 lg:px-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Sitemap */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-background/50 dark:text-muted-foreground">
              Sitemap
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-wide text-background dark:text-foreground">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-background/50 dark:text-muted-foreground">
              Socials
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-wide text-background dark:text-foreground">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-background/50 dark:text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-wide text-background dark:text-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-background/60 dark:hover:text-muted-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-background/50 dark:text-muted-foreground">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-background/70 dark:text-muted-foreground">
              <p>India (HQ)</p>
              <p>info@devbhoomiglobalservices.com</p>
              <p>+91 9084017662</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 dark:border-border pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-background/40 dark:text-muted-foreground font-bold">
          <p>© 2025 Naukari Marg. All Rights Reserved.</p>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="flex justify-center mt-12 select-none pointer-events-none opacity-10">
        <h1 className="text-[11.5vw] leading-none font-black text-background dark:text-foreground tracking-tighter uppercase">
          Naukari Marg
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
