"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Big glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-80 bg-[#00D4FF]/4 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section num */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="font-mono text-[#00D4FF] text-sm tracking-wider">07. What&apos;s Next?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-black mb-6 leading-tight"
          style={{ fontFamily: "'Syne', serif" }}
        >
          Get In <span className="text-gradient glow-text">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[#6B8FA8] text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I&apos;m open to new opportunities. Whether you have a project, a role, or
          just want to connect — my inbox is always open.
        </motion.p>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <MagneticButton href="mailto:prashantmaddheshiya@gmail.com">
            <span
              className="inline-flex items-center gap-2 px-9 py-4 border border-[#00D4FF] text-[#00D4FF] font-mono text-sm tracking-wide rounded-sm hover:bg-[#00D4FF] hover:text-[#050A0F] transition-all duration-200 group"
            >
              Say Hello ✉
            </span>
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/prashant-maddheshiya-88900b69/" >
            <span className="inline-flex items-center gap-2 px-9 py-4 border border-[#1A2A3A] text-[#6B8FA8] font-mono text-sm tracking-wide rounded-sm hover:border-[#7B61FF]/60 hover:text-[#7B61FF] transition-all duration-200">
              LinkedIn ↗
            </span>
          </MagneticButton>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Email",    value: "prashantmaddheshiya@gmail.com", href: "mailto:prashantmaddheshiya@gmail.com", icon: "✉", color: "#00D4FF" },
            { label: "Phone",    value: "+91-8505840560",                href: "tel:+918505840560",                   icon: "☎", color: "#7B61FF" },
            { label: "Location", value: "Noida, INDIA",                  href: "#",                                   icon: "◎", color: "#00FF9D" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 border border-[#1A2A3A] bg-[#0C1520] rounded-sm text-center cursor-pointer gradient-border group"
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-sm text-lg border transition-all duration-200"
                style={{ color: item.color, borderColor: `${item.color}30`, background: `${item.color}08` }}>
                {item.icon}
              </div>
              <p className="font-mono text-[10px] text-[#3A5A6A] uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-body text-sm text-[#6B8FA8] group-hover:text-[#E8F4FD] break-all transition-colors duration-200">{item.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
