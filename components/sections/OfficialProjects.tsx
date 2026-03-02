"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioData } from "@/lib/data";

const categoryColors: Record<string, string> = {
  FinTech:     "#00FF9D",
  "EdTech · SaaS": "#00D4FF",
  "AgriTech · SaaS": "#7B61FF",
  "Logistics · Operations": "#FFB347",
};

export default function OfficialProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = portfolioData.officialProjects;

  return (
    <section id="official-projects" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#00D4FF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#00D4FF] text-sm tracking-wider">03.</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
              Official <span className="text-gradient">Projects</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1A2A3A] to-transparent" />
          </div>
          <p className="font-body text-[#6B8FA8] mt-3 ml-14 text-sm">
            Professional projects contributed to at Radiant Infonet & HCLTech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const catColor = categoryColors[project.category] ?? "#00D4FF";
            const isOpen = expanded === i;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  className="relative border border-[#1A2A3A] bg-[#0C1520] rounded-sm overflow-hidden gradient-border cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  {/* Color stripe */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${catColor}, transparent)` }} />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(500px at 0% 0%, ${catColor}08, transparent)` }}
                  />

                  <div className="p-6 relative">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded-sm border" style={{ color: catColor, borderColor: `${catColor}30`, background: `${catColor}0a` }}>
                            {project.category}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-mono text-[#3A5A6A] border border-[#1A2A3A] rounded-sm bg-[#050A0F]">
                            {project.status}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold" style={{ fontFamily: "'Syne', serif" }}>
                          {project.title}
                        </h3>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="font-mono text-xs text-[#6B8FA8]">{project.duration}</p>
                        <p className="font-mono text-xs mt-1" style={{ color: catColor }}>{project.impact}</p>
                      </div>
                    </div>

                    <p className="font-body text-[#6B8FA8] text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs font-mono text-[#3A5A6A] border border-[#1A2A3A] bg-[#080E17] rounded-sm">{t}</span>
                      ))}
                    </div>

                    {/* Expand toggle */}
                    <button
                      className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-200"
                      style={{ color: catColor }}
                    >
                      {isOpen ? "Hide details ↑" : "View highlights ↓"}
                    </button>

                    {/* Expanded highlights */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-4 space-y-2 border-t border-[#1A2A3A] mt-4">
                        {project.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-[#6B8FA8] text-sm font-body">
                            <span style={{ color: catColor }} className="mt-1.5 shrink-0 text-xs">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Metrics pills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {Object.entries(project.metrics).map(([k, v]) => (
                          <span key={k} className="px-3 py-1 text-xs font-mono rounded-full" style={{ color: catColor, background: `${catColor}15`, border: `1px solid ${catColor}30` }}>
                            {k}: {v}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
