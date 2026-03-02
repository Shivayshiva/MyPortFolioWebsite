"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/lib/data";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#00D4FF] text-sm tracking-wider">06.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
              Education
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1A2A3A] to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl"
        >
          <div className="relative p-8 border border-[#1A2A3A] bg-[#0C1520] rounded-sm overflow-hidden gradient-border">
            {/* Accent strip */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#7B61FF] to-transparent" />
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="font-mono text-[10px] text-[#7B61FF] uppercase tracking-widest block mb-3">
                {edu.year} — Undergraduate Degree
              </span>
              <h3 className="font-display text-2xl font-bold mb-2" style={{ fontFamily: "'Syne', serif" }}>
                {edu.degree} in <span className="text-gradient-2">{edu.field}</span>
              </h3>
              <p className="font-body text-[#6B8FA8] mb-5">{edu.college}</p>

              <div className="flex items-center gap-4">
                <span className="px-4 py-2 font-mono text-sm border border-[#7B61FF]/30 text-[#7B61FF] bg-[#7B61FF]/5 rounded-sm">
                  Grade: {edu.grade}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF9D]" />
                  <span className="font-mono text-xs text-[#6B8FA8]">Graduated Successfully</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-4 p-4 border border-[#1A2A3A] bg-[#0C1520] rounded-sm flex items-center gap-4"
          >
            <span className="font-mono text-xs text-[#3A5A6A] uppercase tracking-wider">Languages:</span>
            {["English", "Hindi"].map((lang) => (
              <span key={lang} className="px-3 py-1 text-xs font-mono text-[#6B8FA8] border border-[#1A2A3A] bg-[#080E17] rounded-sm">
                {lang}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
