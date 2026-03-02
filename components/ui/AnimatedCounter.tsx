"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  duration?: number;
  className?: string;
}

function parseNumber(str: string): { num: number; prefix: string; suffix: string } {
  const match = str.match(/^([+\-]?\d*\.?\d+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: str };
  const prefix = str.startsWith("+") ? "+" : str.startsWith("-") ? "-" : "";
  const num = parseFloat(match[1].replace(/[^0-9.]/g, ""));
  const suffix = match[2] || "";
  return { num, prefix, suffix };
}

export default function AnimatedCounter({ target, duration = 2000, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const { num, prefix, suffix } = parseNumber(target);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = num;
    const steps = 60;
    const increment = (end - start) / steps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = start + increment * step;
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
        return;
      }
      const isFloat = target.includes(".");
      setDisplay(prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toString()) + suffix);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, num, target, duration, prefix, suffix]);

  return <span ref={ref} className={className}>{display}</span>;
}
