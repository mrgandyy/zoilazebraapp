"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Award, RotateCw, Heart } from "lucide-react";

const CHALLENGES = [
  "Tell someone something you appreciate about them.",
  "Invite someone new to join you at lunch or play.",
  "Help clean up or tidy up without being asked.",
  "Write or say a special thank you to a teacher.",
  "Smile and say hello to someone you haven't talked to today.",
  "Ask a friend or classmate how they are feeling.",
  "Share a toy, book, or snack with a sibling or friend.",
  "Listen carefully when someone else is speaking to you.",
  "Include someone who feels left out of a game or conversation.",
  "Hold the door open for someone behind you with a smile."
];

export default function KindnessChallenge() {
  const [challenge, setChallenge] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [stickerUnlocked, setStickerUnlocked] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Pick an initial challenge
    const initialChallenge = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      setChallenge(initialChallenge);
      setReducedMotion(motionPref);
    });
  }, []);

  const handleGetChallenge = () => {
    setIsFlipped(false);
    setCompleted(false);
    // Short timeout to allow card to flip back before changing text
    setTimeout(() => {
      let next;
      do {
        next = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
      } while (next === challenge);
      setChallenge(next);
      setIsFlipped(true);
    }, 200);
  };

  const handleCompletedClick = () => {
    if (completed) return;
    setCompleted(true);

    // Trigger local heart burst coordinates
    const spawnHearts = Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 8;
      const dist = 30 + Math.random() * 40;
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 30
      };
    });
    setHearts(spawnHearts);

    // Save Helpful Heart sticker to localStorage
    const current = JSON.parse(localStorage.getItem("zoila_stickers") || "[]");
    if (!current.includes("helpful-heart")) {
      localStorage.setItem("zoila_stickers", JSON.stringify([...current, "helpful-heart"]));
      setStickerUnlocked(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50/60 to-purple-50/50 rounded-super border-2 border-pink-100 p-6 md:p-8 max-w-md mx-auto shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">Kindness Challenge</h3>
      <p className="text-sm text-gray-500 font-sans leading-relaxed mb-8">
        Small acts of kindness make a big difference! Flip the card below to find your challenge for today.
      </p>

      {/* Interactive Card container */}
      <div className="relative w-full h-[220px] mb-8 cursor-pointer perspective-1000" onClick={() => !isFlipped && handleGetChallenge()}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full h-full"
        >
          {/* Card Front (Locked/Instruction state) */}
          <div 
            style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 text-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg border-4 border-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 animate-bounce">
              🎁
            </div>
            <h4 className="text-lg font-bold font-heading mb-1">Your Daily Kindness Action</h4>
            <p className="text-xs text-pink-100 font-sans">Click the button below or tap this card to reveal!</p>
          </div>

          {/* Card Back (Challenge revealed state) */}
          <div 
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
            className="absolute inset-0 bg-white text-gray-800 rounded-2xl flex flex-col justify-between p-6 shadow-lg border-4 border-pink-100"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase font-sans">Today&apos;s Mission</span>
              <Heart className={`w-5 h-5 ${completed ? "text-primary fill-primary animate-pulse" : "text-gray-300"}`} />
            </div>

            <p className="text-base sm:text-lg font-bold font-heading text-gray-900 leading-relaxed my-auto">
              &ldquo;{challenge}&rdquo;
            </p>

            <div className="flex justify-center mt-3">
              {completed ? (
                <div className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5 font-heading">
                  <Sparkles className="w-4 h-4 text-accent animate-spin-slow" />
                  Kindness complete!
                </div>
              ) : (
                <div className="text-xs font-medium text-gray-400 font-sans">
                  Click &ldquo;I Did It!&rdquo; when completed
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Button controls */}
      <div className="flex justify-center gap-4 relative">
        <button
          onClick={handleGetChallenge}
          className="flex items-center gap-2 px-5 py-3 border-2 border-secondary text-secondary hover:bg-secondary/5 font-bold rounded-full text-sm transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <RotateCw className="w-4 h-4" />
          {isFlipped ? "New Challenge" : "Reveal Challenge"}
        </button>

        {isFlipped && (
          <button
            onClick={handleCompletedClick}
            disabled={completed}
            className={`flex items-center gap-2 px-6 py-3 font-bold rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 relative cursor-pointer ${
              completed
                ? "bg-secondary text-white shadow-none cursor-default"
                : "bg-primary text-white hover:bg-pink-600 hover:shadow-lg"
            }`}
          >
            <Award className="w-4 h-4" />
            {completed ? "Completed!" : "I Did It!"}

            {/* Float particle hearts when clicked */}
            <AnimatePresence>
              {hearts.map((h) => (
                <motion.span
                  key={h.id}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.4, x: h.x, y: h.y }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute text-lg select-none pointer-events-none z-50 text-red-500"
                >
                  ❤️
                </motion.span>
              ))}
            </AnimatePresence>
          </button>
        )}
      </div>

      {/* Sticker Unlock Dialog */}
      {stickerUnlocked && (
        <p className="text-xs text-primary font-bold mt-4 font-sans">
          🏆 Unlocked sticker: <span className="underline">Helpful Heart</span>! Check your Sticker Book!
        </p>
      )}
    </div>
  );
}
