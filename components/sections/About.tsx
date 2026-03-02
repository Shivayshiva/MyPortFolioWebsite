"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    {
      text: "Senior Software Engineer with 4+ years of experience designing and developing scalable, secure, and high-performance SaaS and enterprise web applications. Strong expertise in React.js and Next.js (App Router, SSR, SSG, ISR, Server Components) with TypeScript and modern JavaScript (ES6+), building component-driven, reusable, and maintainable frontend architectures.",
      delay: 0.1,
    },
    {
      text: "Experienced in advanced state management using Redux Toolkit and RTK Query, complex RESTful API integrations, and real-time application features using WebSockets and Socket.io. Proficient in implementing secure authentication and authorization mechanisms including JWT, OAuth 2.0, and Role-Based Access Control (RBAC) to ensure enterprise-grade security.",
      delay: 0.2,
    },
    {
      text: "Skilled in performance optimization techniques such as code splitting, lazy loading, dynamic imports, memoization, tree shaking, bundle analysis, and Core Web Vitals (LCP, CLS, TBT) improvements, consistently reducing load times and enhancing user experience. Strong focus on SEO optimization, responsive design, and WCAG-compliant accessibility standards across cross-browser and cross-device environments.",
      delay: 0.3,
    },
    {
      text: "Hands-on experience building internal design systems and scalable UI architectures using Tailwind CSS, ShadCN UI, and Material UI. Proficient in backend development with Node.js and Express.js, MongoDB database integration, and API-driven system design.",
      delay: 0.4,
    },
    {
      text: "Well-versed in modern development tooling and DevOps practices including Git, Docker, Webpack, Vite, Turbopack, ESLint, Jest, React Testing Library, CI/CD pipelines with GitHub Actions, and cloud deployments on Vercel and AWS. Experienced working in Agile/Scrum environments, contributing to architectural decisions, mentoring junior developers, and delivering production-ready applications serving 10K+ to 100K+ users.",
      delay: 0.5,
    },
  ];
  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background blob */}
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-[#00D4FF]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#00D4FF] text-sm tracking-wider">01.</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', serif" }}>
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1A2A3A] to-transparent" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Text (3/5) */}
          <div className="lg:col-span-3 space-y-6">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: line.delay }}
                className="font-body text-[#6B8FA8] leading-relaxed text-base md:text-lg"
              >
                {line.text}
              </motion.p>
            ))}

            {/* Contact grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4"
            >
              {[
                { label: "Location", value: "Noida, India", icon: "◎" },
                { label: "Email", value: "prashantmaddheshiya@gmail.com", icon: "✉", href: "mailto:prashantmaddheshiya@gmail.com" },
                { label: "Phone", value: "+91-8505840560", icon: "☎", href: "tel:+918505840560" },
                { label: "LinkedIn", value: "View Profile →", icon: "in", href: "https://www.linkedin.com/in/prashant-maddheshiya-88900b69/" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-7 h-7 flex items-center justify-center text-xs border border-[#1A2A3A] text-[#00D4FF] bg-[#0C1520] rounded-sm shrink-0 font-mono">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] text-[#3A5A6A] uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-sm text-[#6B8FA8] hover:text-[#00D4FF] transition-colors underline-reveal">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-[#6B8FA8]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Code card (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            {/* Terminal-style card */}
            <div className="relative border border-[#1A2A3A] bg-[#080E17] rounded-sm overflow-hidden glow-box">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0C1520] border-b border-[#1A2A3A]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="font-mono text-xs text-[#3A5A6A] ml-2">prashant.config.ts</span>
              </div>
              {/* Code content */}
              <div className="p-5 font-mono text-xs leading-relaxed">
                <div className="text-[#3A5A6A] mb-2">// Engineer profile</div>
                {[
                  { key: "name",        val: '"Prashant Kumar Madhesiya"', c: "#00D4FF" },
                  { key: "role",        val: '"Senior Software Engineer"', c: "#00FF9D" },
                  { key: "location",    val: '"Noida, India"',             c: "#38BDF8" },
                  { key: "experience",  val: '"4+ Years (4 years 5 months)"', c: "#7B61FF" },
                  { key: "frontend",    val: '["React.js", "Next.js (App Router, SSR, SSG, ISR)", "TypeScript", "JavaScript ES6+"]', c: "#00D4FF" },
                  { key: "stateMgmt",   val: '["Redux Toolkit", "RTK Query"]', c: "#7B61FF" },
                  { key: "styling",     val: '["Tailwind CSS", "ShadCN UI", "Material UI"]', c: "#00FF9D" },
                  { key: "backend",     val: '["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.io"]', c: "#FF8C42" },
                  { key: "security",    val: '["JWT", "OAuth 2.0", "RBAC"]', c: "#F43F5E" },
                  { key: "database",    val: '["MongoDB"]', c: "#10B981" },
                  { key: "testing",     val: '["Jest", "React Testing Library"]', c: "#EAB308" },
                  { key: "devops",      val: '["Docker", "GitHub Actions", "Vercel", "AWS"]', c: "#FFB347" },
                  { key: "tooling",     val: '["Webpack", "Vite", "Turbopack", "ESLint", "Git", "Lighthouse"]', c: "#6366F1" },
                  { key: "architecture",val: '"Component-Driven Architecture & Scalable SaaS Systems"', c: "#22D3EE" },
                  { key: "performance", val: '"Code Splitting, Lazy Loading, Bundle Optimization, Core Web Vitals (LCP, CLS, TBT)"', c: "#FF6B6B" },
                  { key: "accessibility", val: '"WCAG Compliant & SEO Optimized Applications"', c: "#14B8A6" },
                  { key: "openToWork",  val: "true", c: "#00FF9D" }
                ].map((row, i) => (
                  <motion.div
                    key={row.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex gap-2 mb-1"
                  >
                    <span className="text-[#6B8FA8]">{row.key}:</span>
                    <span style={{ color: row.c }}>{row.val},</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Outer glow decoration */}
            <div className="absolute -inset-3 border border-[#1A2A3A]/30 rounded-sm -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#00D4FF]/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

