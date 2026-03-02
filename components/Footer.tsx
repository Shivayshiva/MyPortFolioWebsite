"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-[#1A2A3A] relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} className="text-center md:text-left">
            <div className="font-display font-bold text-lg text-gradient" style={{ fontFamily: "'Syne', serif" }}>
              PKM<span className="text-[#1A2A3A] mx-1">/</span><span className="text-[#3A5A6A] font-mono text-sm">dev</span>
            </div>
            <p className="font-mono text-xs text-[#3A5A6A] mt-1">Prashant Kumar Madheshiya</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { label: "About",          href: "#about" },
              { label: "Experience",     href: "#experience" },
              { label: "Work Projects",  href: "#official-projects" },
              { label: "Side Projects",  href: "#personal-projects" },
              { label: "Skills",         href: "#skills" },
              { label: "Contact",        href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-[#3A5A6A] hover:text-[#00D4FF] transition-colors duration-200 underline-reveal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Built with */}
          <p className="font-mono text-xs text-[#3A5A6A] text-center md:text-right">
            Built with{" "}
            <span className="text-[#00D4FF]">Next.js</span> ·{" "}
            <span className="text-[#7B61FF]">Framer Motion</span> ·{" "}
            <span className="text-[#00FF9D]">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
