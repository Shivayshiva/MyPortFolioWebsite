"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioData } from "@/lib/data";

const statusColors: Record<string, string> = {
  "Completed":    "#00FF9D",
  "In Progress":  "#FFB347",
};

export default function PersonalProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState<string>("All");
  const projects = portfolioData.personalProjects;
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.status)))];

  const filtered = filter === "All" ? projects : projects.filter(p => p.status === filter);

  return (
    <section id="personal-projects" className="py-32 relative" ref={ref}>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-[700px] h-64 bg-[#7B61FF]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#00D4FF] text-sm tracking-wider">04.</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
              Personal <span className="text-gradient-2">Projects</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1A2A3A] to-transparent" />
          </div>
          <p className="font-body text-[#6B8FA8] mt-3 ml-14 text-sm">
            Side projects built out of curiosity, learning, and passion — shipped in free time
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-10 ml-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-xs font-mono rounded-sm border transition-all duration-200 ${
                filter === cat
                  ? "border-[#7B61FF] text-[#7B61FF] bg-[#7B61FF]/10"
                  : "border-[#1A2A3A] text-[#6B8FA8] hover:border-[#7B61FF]/40 hover:text-[#7B61FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const statusColor = statusColors[project.status] ?? "#6B8FA8";
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <motion.div
                  className="h-full relative border border-[#1A2A3A] bg-[#0C1520] rounded-sm overflow-hidden group gradient-border"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top bar with icon & color */}
                  <div className="p-5 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-10 h-10 flex items-center justify-center text-xl rounded-sm"
                          style={{ background: `${project.color}12`, border: `1px solid ${project.color}25` }}
                        >
                          {project.icon}
                        </span>
                        <div>
                          <span className="font-mono text-[10px] text-[#3A5A6A] block">{project.year}</span>
                          <span
                            className="font-mono text-[10px] font-bold"
                            style={{ color: statusColor }}
                          >
                            ● {project.status}
                          </span>
                        </div>
                      </div>
                      {/* Links */}
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border border-[#1A2A3A] text-[#6B8FA8] hover:text-[#E8F4FD] hover:border-[#E8F4FD]/30 rounded-sm text-xs transition-all duration-150 font-mono"
                          >⌥</a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border rounded-sm text-xs transition-all duration-150 font-mono"
                            style={{ borderColor: `${project.color}30`, color: project.color }}
                          >↗</a>
                        )}
                      </div>
                    </div>

                    <h3
                      className="font-display font-bold text-base mb-2 group-hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "'Syne', serif", color: "#E8F4FD" }}
                    >
                      {project.title}
                    </h3>

                    <span
                      className="inline-block px-2 py-0.5 text-[10px] font-mono rounded-sm mb-3"
                      style={{ color: project.color, background: `${project.color}10`, border: `1px solid ${project.color}25` }}
                    >
                      {project.category}
                    </span>

                    <p className="font-body text-[#6B8FA8] text-sm leading-relaxed mb-4">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="px-5 pb-2">
                    <p className="font-mono text-[10px] text-[#3A5A6A] uppercase tracking-wider mb-2">Key Features</p>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fi) => (
                        <li key={fi} className="flex gap-2 text-xs font-body text-[#6B8FA8]">
                          <span style={{ color: project.color }} className="mt-0.5 shrink-0 text-[10px]">▹</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="px-5 pb-5 mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-[#3A5A6A] border border-[#1A2A3A] bg-[#080E17] rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
