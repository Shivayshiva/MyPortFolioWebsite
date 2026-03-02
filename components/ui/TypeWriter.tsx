"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
  speed?: number;
  pause?: number;
}

export default function TypeWriter({
  words,
  className = "",
  speed = 80,
  pause = 2000,
}: TypeWriterProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWord((w) => (w + 1) % words.length);
    } else {
      const delta = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(() => {
        setCurrentText(
          isDeleting ? word.slice(0, currentText.length - 1) : word.slice(0, currentText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, words, speed, pause]);

  return (
    <span className={className}>
      {currentText}
      <span className="cursor-blink text-[#00D4FF]">|</span>
    </span>
  );
}
