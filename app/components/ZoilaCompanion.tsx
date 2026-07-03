"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const COMPANION_MESSAGES = [
  "Let's explore!",
  "You found me!",
  "Kindness counts!",
  "Every voice matters!",
  "Great job!",
  "Try another one!",
  "Start a chain reaction of kindness!",
  "You are awesome just as you are!"
];

export default function ZoilaCompanion() {
  const [isDismissed, setIsDismissed] = useState(true); // Hidden initially to prevent layout flashing
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("zoila_companion_dismissed");
    if (!dismissed) {
      // Defer state update to next frame to prevent React Compiler synchronous cascading renders
      requestAnimationFrame(() => {
        setIsDismissed(false);
      });

      // Wait 3.5 seconds before showing the first message
      const firstMessageTimer = setTimeout(() => {
        setMessage(COMPANION_MESSAGES[0]);
        setShowMessage(true);
      }, 3500);

      // Hide message bubble after 8.5 seconds
      const hideBubbleTimer = setTimeout(() => {
        setShowMessage(false);
      }, 8500);

      return () => {
        clearTimeout(firstMessageTimer);
        clearTimeout(hideBubbleTimer);
      };
    }

    // Check system preference for reduced motion
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      setReducedMotion(motionPref);
    });
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem("zoila_companion_dismissed", "true");
  };

  const handleCompanionClick = () => {
    if (showMessage) {
      setShowMessage(false);
      return;
    }
    
    // Choose a random message that is different from current if possible
    const available = COMPANION_MESSAGES.filter(m => m !== message);
    const randomMsg = available[Math.floor(Math.random() * available.length)];
    
    setMessage(randomMsg);
    setShowMessage(true);

    // Hide message bubble after 6 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 6000);

    return () => clearTimeout(timer);
  };

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none select-none max-w-[280px] sm:max-w-xs">
      
      {/* Speech Bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-800 border-2 border-primary rounded-2xl p-3 shadow-xl relative font-heading font-bold text-xs sm:text-sm text-center mb-16 pointer-events-auto leading-snug max-w-[160px] sm:max-w-[200px]"
          >
            {/* Speech bubble arrow */}
            <div className="absolute right-[-8px] bottom-4 w-4 h-4 bg-white border-r-2 border-b-2 border-primary rotate-[-45deg] z-10"></div>
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Companion Character Frame */}
      <div className="relative pointer-events-auto">
        
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -left-2 bg-gray-900/80 hover:bg-gray-950 text-white rounded-full p-1 cursor-pointer shadow-md hover:scale-110 transition-transform z-50 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Dismiss Zoila companion"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Character Image */}
        <motion.div
          onClick={handleCompanionClick}
          className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer overflow-visible"
          whileHover={reducedMotion ? {} : { scale: 1.05, y: -4 }}
          whileTap={reducedMotion ? {} : { scale: 0.95 }}
          animate={reducedMotion ? {} : {
            y: [0, -6, 0],
          }}
          transition={reducedMotion ? {} : {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        >
          {/* Subtle magical glow */}
          <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-md -z-10 animate-pulse pointer-events-none"></div>
          
          <Image
            src="/images/zoila-sitting.png"
            alt="Zoila the Zebra helper companion. Click me to talk!"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 80px, 100px"
          />
        </motion.div>
      </div>

    </div>
  );
}
