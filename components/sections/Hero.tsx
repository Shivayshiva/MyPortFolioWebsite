"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TypeWriter from "@/components/ui/TypeWriter";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const ParticleCanvas = dynamic(() => import("@/components/ui/ParticleCanvas"), { ssr: false });

function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block">
      {text}
      {glitch && (
        <>
          <span className="absolute inset-0 text-[#00D4FF]" style={{ clipPath: "inset(0 0 55% 0)", transform: "translate(-3px,0)", opacity: 0.7 }}>{text}</span>
          <span className="absolute inset-0 text-[#7B61FF]" style={{ clipPath: "inset(55% 0 0 0)", transform: "translate(3px,0)", opacity: 0.7 }}>{text}</span>
        </>
      )}
    </span>
  );
}

const stats = [
  { label: "Experience",    raw: "4+" },
  { label: "Users Served",  raw: "100K+" },
  { label: "Perf Boost",    raw: "30%" },
  { label: "Test Coverage", raw: "70%+" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-texture">
      <ParticleCanvas />

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00D4FF]/4 blur-[160px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#7B61FF]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-[#00FF9D]/4 blur-[100px]" />
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[700px] h-[700px] rounded-full border border-[#00D4FF]/5 spin-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-[#7B61FF]/5 spin-slow-r" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-[#00FF9D]/4" style={{ animation: "spinSlow 30s linear infinite" }} />
      </div>

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-[#00D4FF]/25" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-[#00D4FF]/25" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#7B61FF]/25" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#7B61FF]/25" />

      {/* Floating code fragments */}
      {["const dev = {}", "=> excellence", "SSR | SSG | ISR", "30% faster ↑", "TypeScript first", "10K+ users"].map((frag, i) => (
        <motion.div
          key={frag}
          className="absolute font-mono text-xs text-[#00D4FF]/20 hidden xl:block select-none"
          style={{ left: `${5 + (i * 15) % 87}%`, top: `${12 + (i * 19) % 76}%` }}
          animate={{ y: [0, -15, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          {frag}
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Status badge */}
          <motion.div variants={item} className="flex justify-center mb-10">
            <div className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/5 text-sm font-mono text-[#00FF9D]">
              <span className="w-2 h-2 rounded-full bg-[#00FF9D] status-pulse" />
              Open to new opportunities
              <span className="absolute -inset-px rounded-full shimmer" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="mb-6">
            <p className="font-mono text-[#6B8FA8] text-sm tracking-[0.35em] uppercase mb-5">Hello, I&apos;m</p>
            <h1 className="font-display font-black leading-[0.88] tracking-tight mb-2" style={{ fontFamily: "'Syne', serif" }}>
              <span className="block text-[clamp(52px,8vw,96px)] text-[#E8F4FD]"><GlitchText text="Prashant" /></span>
              <span className="block text-[clamp(52px,8vw,96px)] text-gradient">Kumar</span>
              <span className="block text-[clamp(40px,6vw,76px)] text-[#E8F4FD]/70">Madheshiya</span>
            </h1>
          </motion.div>

          {/* Typewriter title */}
          <motion.div variants={item} className="mb-10 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00D4FF]/60" />
            <p className="font-body text-[#6B8FA8] text-lg md:text-xl min-w-[280px] md:min-w-[360px]">
              <TypeWriter
                words={["Senior Software Engineer", "React / Next.js Architect", "Performance Optimizer", "SaaS Builder", "Full-Stack Contributor"]}
                className="text-[#E8F4FD]"
                speed={70}
                pause={2200}
              />
            </p>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00D4FF]/60" />
          </motion.div>

          {/* Tag pills */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-12">
            {["React/Next.js", "TypeScript", "4+ Years", "10K+ Users", "SSR/SSG Expert", "WCAG A11y"].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.08, borderColor: "#00D4FF", color: "#00D4FF" }}
                className="px-3 py-1.5 text-xs font-mono text-[#6B8FA8] border border-[#1A2A3A] bg-[#0C1520] rounded-full cursor-default transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <MagneticButton href="#projects">
              <span
                className="inline-flex items-center gap-2 px-9 py-4 bg-[#00D4FF] text-[#050A0F] font-mono font-bold text-sm tracking-wide rounded-sm transition-shadow duration-300"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(0,212,255,0.5)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
              >
                View Projects <span>→</span>
              </span>
            </MagneticButton>
            <MagneticButton href="#contact">
              <span className="inline-flex items-center gap-2 px-9 py-4 border border-[#1A2A3A] text-[#6B8FA8] font-mono text-sm tracking-wide rounded-sm hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all duration-200 group">
                Get in Touch <span className="transition-transform duration-200 group-hover:translate-x-1">✉</span>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="relative text-center p-5 border border-[#1A2A3A] bg-[#0C1520]/60 rounded-sm overflow-hidden group cursor-default gradient-border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer transition-opacity duration-500" />
                <div className="font-display text-3xl md:text-4xl font-black text-gradient relative" style={{ fontFamily: "'Syne', serif" }}>
                  <AnimatedCounter target={stat.raw} />
                </div>
                <div className="font-mono text-xs text-[#6B8FA8] uppercase tracking-widest mt-1 relative">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll mouse indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-mono text-[10px] text-[#6B8FA8] tracking-[0.3em] uppercase">scroll</span>
        <div className="w-5 h-9 border border-[#1A2A3A] rounded-full flex items-start justify-center pt-1.5">
          <motion.div className="w-1 h-2 bg-[#00D4FF] rounded-full" animate={{ y: [0, 14, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
