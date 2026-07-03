"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  scale: number;
  targetX: number;
  targetY: number;
}

export function ClickBurstWrapper({ 
  children, 
  type = "sparkles",
  className = "" 
}: { 
  children: React.ReactNode; 
  type?: "sparkles" | "hearts" | "stars";
  className?: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check for user reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const chars = {
      sparkles: ["✨", "🌸", "🌟", "✨"],
      hearts: ["❤️", "💖", "💕", "🌸"],
      stars: ["⭐", "🌟", "✨", "💫"],
    }[type];

    const newParticles: Particle[] = Array.from({ length: 6 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 45;
      return {
        id: Date.now() + Math.random() + i,
        x: clickX,
        y: clickY,
        char: chars[Math.floor(Math.random() * chars.length)],
        scale: 0.6 + Math.random() * 0.6,
        targetX: Math.cos(angle) * distance,
        targetY: Math.sin(angle) * distance - 30 // Drift upward
      };
    });

    setParticles((prev) => [...prev, ...newParticles].slice(-30));
  };

  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(6));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <div className={`relative overflow-hidden cursor-pointer ${className}`} onClick={handleClick}>
      {children}
      <AnimatePresence>
        {particles.map((p) => {
          return (
            <motion.span
              key={p.id}
              initial={{ opacity: 1, scale: 0, x: p.x, y: p.y }}
              animate={{
                opacity: 0,
                scale: p.scale,
                x: p.x + p.targetX,
                y: p.y + p.targetY,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute pointer-events-none select-none text-base z-40"
            >
              {p.char}
            </motion.span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

// Standalone component that triggers floating elements from a fixed element
export function triggerLocalBurst(x: number, y: number, type: "sparkles" | "hearts" | "stars" = "sparkles") {
  const chars = {
    sparkles: ["✨", "🌸", "🌟", "✨"],
    hearts: ["❤️", "💖", "💕", "🌸"],
    stars: ["⭐", "🌟", "✨", "💫"],
  }[type];

  return Array.from({ length: 6 }).map((_, i) => {
    return {
      id: Math.random() + i,
      x,
      y,
      char: chars[Math.floor(Math.random() * chars.length)],
      scale: 0.6 + Math.random() * 0.6,
    };
  });
}
