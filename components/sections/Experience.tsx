"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioData } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeJob, setActiveJob] = useState(0);
  const jobs = portfolioData.experience;

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-[#7B61FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#00D4FF] text-sm tracking-wider">02.</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1A2A3A] to-transparent" />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Company tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-52 flex md:flex-col flex-row border-b md:border-b-0 md:border-l-2 border-[#1A2A3A] shrink-0"
          >
            {jobs.map((job, i) => (
              <button
                key={job.company}
                onClick={() => setActiveJob(i)}
                className={`relative px-5 py-4 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 border-l-2 -ml-0.5 ${
                  activeJob === i
                    ? "border-[#00D4FF] text-[#00D4FF] bg-[#00D4FF]/5"
                    : "border-transparent text-[#6B8FA8] hover:text-[#E8F4FD] hover:bg-[#0C1520]"
                }`}
              >
                <span className="block text-xs opacity-60 mb-0.5">{job.type}</span>
                {job.company}
                {activeJob === i && (
                  <motion.div layoutId="tab-indicator" className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00D4FF]" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Job details */}
          <motion.div
            key={activeJob}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="flex-1 min-h-[400px]"
          >
            {/* Role + date */}
            <div className="mb-8">
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center font-display font-bold text-sm shrink-0"
                  style={{ background: `${jobs[activeJob].color}15`, color: jobs[activeJob].color, border: `1px solid ${jobs[activeJob].color}30` }}
                >
                  {jobs[activeJob].logo}
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
                    {jobs[activeJob].role}{" "}
                    <span style={{ color: jobs[activeJob].color }}>@ {jobs[activeJob].company}</span>
                  </h3>
                  <p className="font-mono text-[#6B8FA8] text-sm mt-0.5">
                    {jobs[activeJob].duration}
                    <span className="mx-2 opacity-40">|</span>
                    {jobs[activeJob].period}
                  </p>
                </div>
              </div>

              {/* Projects tag line */}
              <div className="flex flex-wrap gap-2 mt-4">
                {jobs[activeJob].projects.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 text-xs font-mono border rounded-sm"
                    style={{ borderColor: `${jobs[activeJob].color}30`, color: jobs[activeJob].color, background: `${jobs[activeJob].color}08` }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights list */}
            <ul className="space-y-4">
              {jobs[activeJob].highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-3 group"
                >
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: jobs[activeJob].color }}
                  />
                  <span className="font-body text-[#6B8FA8] text-sm leading-relaxed group-hover:text-[#E8F4FD] transition-colors duration-200">
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 relative"
        >
          <p className="font-mono text-xs text-[#3A5A6A] uppercase tracking-widest mb-6 text-center">Career Timeline</p>
          {/* Line */}
          <div className="relative flex justify-between items-center">
            <motion.div
              className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-[#7B61FF] via-[#00D4FF] to-[#00FF9D]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22,1,0.36,1] }}
            />
            {[
              { year: "2018", label: "B.Tech", color: "#6B8FA8" },
              { year: "Aug '20", label: "HCLTech", color: "#7B61FF" },
              { year: "Apr '23", label: "End HCL", color: "#7B61FF" },
              { year: "Apr '24", label: "Radiant", color: "#00D4FF" },
              { year: "Now", label: "Present", color: "#00FF9D" },
            ].map((pt, i) => (
              <motion.div
                key={pt.year}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.12, type: "spring" }}
                className="flex flex-col items-center gap-2 relative"
              >
                <div className="w-3 h-3 rounded-full border-2 border-[#050A0F] ring-2"
                  style={{ background: pt.color, boxShadow: `0 0 12px ${pt.color}80`, ringColor: pt.color }}
                />
                <div className="text-center">
                  <p className="font-mono text-xs font-bold" style={{ color: pt.color }}>{pt.year}</p>
                  <p className="font-body text-xs text-[#3A5A6A] hidden sm:block">{pt.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
