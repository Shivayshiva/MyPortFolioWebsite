"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/lib/data";



const skillBars = [
  { name: "React.js", level: 95, color: "#00D4FF" },
  { name: "Next.js (App Router, SSR, SSG, ISR)", level: 85, color: "#00A8E8" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "JavaScript (ES6+)", level: 95, color: "#F7DF1E" },
  { name: "Redux Toolkit / RTK Query", level: 90, color: "#764ABC" },
  { name: "Tailwind CSS / ShadCN UI / Material UI", level: 94, color: "#38B2AC" },
  { name: "Performance Optimization / Core Web Vitals", level: 88, color: "#FF6B6B" },
  { name: "Node.js / Express / REST APIs", level: 80, color: "#68A063" },
  { name: "JWT / OAuth / RBAC", level: 75, color: "#3F51B5" },
];

const skillCategories = [
  { label: "Frontend",       icon: "⚡", color: "#00D4FF", skills: portfolioData.skills.frontend },
  { label: "Backend & APIs", icon: "⚙", color: "#7B61FF", skills: portfolioData.skills.backend },
  { label: "Tools & DevOps", icon: "🛠", color: "#00FF9D", skills: portfolioData.skills.tools },
  { label: "Concepts",       icon: "◉", color: "#FFB347", skills: portfolioData.skills.concepts },
];

function SkillBar({ name, level, color, index, inView }: { name: string; level: number; color: string; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.08 }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-sm text-[#6B8FA8] group-hover:text-[#E8F4FD] transition-colors duration-200">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1A2A3A] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#7B61FF]/4 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#00D4FF] text-sm tracking-wider">05.</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1A2A3A] to-transparent" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-mono text-xs text-[#3A5A6A] uppercase tracking-widest mb-6">Proficiency Levels</p>
            <div className="space-y-5">
              {skillBars.map((bar, i) => (
                <SkillBar key={bar.name} {...bar} index={i} inView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* Right: Category tags */}
          <div className="space-y-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * ci }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{cat.icon}</span>
                  <span className="font-display font-bold text-sm uppercase tracking-wider" style={{ color: cat.color, fontFamily: "'Syne', serif" }}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + ci * 0.05 + si * 0.025 }}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1.5 text-xs font-mono border bg-[#080E17] rounded-sm cursor-default transition-all duration-200"
                      style={{ borderColor: `${cat.color}28`, color: "#6B8FA8" }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = cat.color;
                        el.style.borderColor = cat.color;
                        el.style.boxShadow = `0 0 12px ${cat.color}25`;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#6B8FA8";
                        el.style.borderColor = `${cat.color}28`;
                        el.style.boxShadow = "none";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#1A2A3A]"
        >
          {[
            { label: "Performance Boost",    value: "30%+",  sub: "Core Web Vitals",     color: "#00D4FF" },
            { label: "Test Coverage",         value: "70%+",  sub: "Jest & RTL",           color: "#7B61FF" },
            { label: "Load Time Reduction",   value: "25%",   sub: "Page load improvement",color: "#00FF9D" },
            { label: "Auth Security Gain",    value: "40%",   sub: "Reduced access risk",  color: "#FFB347" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.08 }}
              whileHover={{ y: -4, borderColor: item.color }}
              className="p-5 border border-[#1A2A3A] bg-[#0C1520] rounded-sm text-center transition-all duration-200 cursor-default"
            >
              <div className="font-display text-3xl font-black mb-1" style={{ color: item.color, fontFamily: "'Syne', serif" }}>
                {item.value}
              </div>
              <div className="font-mono text-xs text-[#6B8FA8] uppercase tracking-wide mb-1">{item.label}</div>
              <div className="font-body text-xs text-[#3A5A6A]">{item.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
