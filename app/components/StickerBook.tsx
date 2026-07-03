"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Award } from "lucide-react";

interface Sticker {
  id: string;
  name: string;
  char: string;
  color: string;
  desc: string;
  task: string;
}

const STICKERS: Sticker[] = [
  {
    id: "kindness-star",
    name: "Kindness Star",
    char: "⭐",
    color: "from-yellow-400 to-amber-500 text-yellow-900 border-yellow-200",
    desc: "A bright star shining with kind thoughts.",
    task: "Build a kind message using the Kind Message Builder."
  },
  {
    id: "helpful-heart",
    name: "Helpful Heart",
    char: "❤️",
    color: "from-rose-400 to-red-500 text-red-900 border-red-200",
    desc: "A warm heart full of generous deeds.",
    task: "Complete a daily Kindness Challenge."
  },
  {
    id: "great-listener",
    name: "Great Listener",
    char: "🌸",
    color: "from-pink-400 to-primary text-pink-900 border-pink-200",
    desc: "A magic bloom that listens with patience.",
    task: "Plant 10 items in the Kindness Garden."
  },
  {
    id: "friendship-flower",
    name: "Friendship Flower",
    char: "🌻",
    color: "from-amber-400 to-orange-400 text-amber-900 border-amber-200",
    desc: "A friendly sunflower representing companionship.",
    task: "Complete a round of Pop the Kind Words."
  },
  {
    id: "inclusion-rainbow",
    name: "Inclusion Rainbow",
    char: "🌈",
    color: "from-teal-300 via-indigo-300 to-pink-300 text-purple-900 border-purple-200",
    desc: "A colourful bridge proving everyone belongs.",
    task: "Find all hidden items in Find Zoila's Friends."
  }
];

export default function StickerBook() {
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const updateStickers = () => {
      const saved = JSON.parse(localStorage.getItem("zoila_stickers") || "[]");
      setUnlocked(saved);
    };

    updateStickers();

    window.addEventListener("storage", updateStickers);
    const interval = setInterval(updateStickers, 1000);

    return () => {
      window.removeEventListener("storage", updateStickers);
      clearInterval(interval);
    };
  }, []);

  const handleReset = () => {
    if (confirm("Reset sticker book? You will lose all your earned stickers!")) {
      localStorage.removeItem("zoila_stickers");
      localStorage.removeItem("zoila_kindness_garden");
      setUnlocked([]);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const progress = (unlocked.length / STICKERS.length) * 100;

  return (
    <div className="bg-gradient-to-br from-indigo-50/50 via-purple-50/20 to-pink-50/40 rounded-super border-2 border-indigo-100 p-6 md:p-8 max-w-4xl mx-auto shadow-md">
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <Award className="w-8 h-8 text-secondary animate-pulse" />
          <h3 className="text-2xl font-bold text-gray-900 font-heading">My Sticker Book</h3>
        </div>
        <p className="text-sm text-gray-500 max-w-lg mx-auto font-sans leading-relaxed mb-6">
          Collect digital stickers by completing the play, grow, and build activities! How many can you earn?
        </p>

        <div className="max-w-md mx-auto bg-gray-100 rounded-full h-4 overflow-hidden border border-gray-200/50 shadow-inner flex relative items-center justify-center">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-secondary"
          ></motion.div>
          <span className="relative z-10 text-[10px] font-bold text-gray-600 font-sans mix-blend-difference">
            {unlocked.length} of {STICKERS.length} Stickers Earned
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-8 font-sans">
        {STICKERS.map((s) => {
          const isUnlocked = unlocked.includes(s.id);
          return (
            <div 
              key={s.id}
              className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                isUnlocked 
                  ? "bg-white border-indigo-100 shadow-md scale-[1.01]" 
                  : "bg-gray-50/40 border-gray-200/40 opacity-60"
              }`}
            >
              <div 
                className={`relative w-20 h-20 rounded-full bg-gradient-to-tr ${
                  isUnlocked 
                    ? s.color + " shadow-lg shadow-pink-100 hover:rotate-6 hover:scale-105" 
                    : "from-gray-200 to-gray-300 text-gray-400 border-gray-300"
                } border-4 transition-transform duration-300 flex items-center justify-center select-none text-4xl`}
              >
                {isUnlocked ? s.char : "🔒"}
                {isUnlocked && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border border-white text-[8px] font-bold">
                    ✓
                  </span>
                )}
              </div>

              <h4 className="text-sm font-bold text-gray-900 font-heading mt-3 text-center truncate w-full">
                {s.name}
              </h4>
              <p className="text-[10px] text-gray-500 text-center leading-tight mt-1 line-clamp-3">
                {isUnlocked ? s.desc : `Lock info: ${s.task}`}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center border-t border-gray-100 pt-6">
        <button
          onClick={handleReset}
          disabled={unlocked.length === 0}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 font-bold rounded-full text-xs transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Reset Stickers Progress
        </button>

        {showNotification && (
          <p className="text-[10px] text-red-500 font-bold mt-2 font-sans">
            Stickers book cleared successfully.
          </p>
        )}
      </div>

    </div>
  );
}
