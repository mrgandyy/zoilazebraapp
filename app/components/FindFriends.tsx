"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, HelpCircle, RotateCcw } from "lucide-react";

interface HiddenItem {
  id: string;
  name: string;
  char?: string;
  imageSrc?: string;
  x: number; // percentage left
  y: number; // percentage top
  width: string;
  height: string;
  found: boolean;
  clue: string;
}

export default function FindFriends() {
  const [items, setItems] = useState<HiddenItem[]>([
    {
      id: "zoila",
      name: "Zoila the Zebra",
      imageSrc: "/images/zoila-sitting.png",
      x: 18,
      y: 26,
      width: "w-10 sm:w-14",
      height: "h-10 sm:h-14",
      found: false,
      clue: "Hiding in the green branches of the big tree."
    },
    {
      id: "armando",
      name: "Armando the Armadillo",
      imageSrc: "/images/armando-yellow.png",
      x: 76,
      y: 72,
      width: "w-10 sm:w-14",
      height: "h-10 sm:h-14",
      found: false,
      clue: "Resting in the green bushes on the right side."
    },
    {
      id: "star",
      name: "Friendly Star",
      char: "⭐",
      x: 48,
      y: 12,
      width: "w-8 sm:w-10",
      height: "h-8 sm:h-10",
      found: false,
      clue: "Shining high up in the blue sky."
    },
    {
      id: "heart",
      name: "Kind Heart",
      char: "❤️",
      x: 88,
      y: 48,
      width: "w-8 sm:w-10",
      height: "h-8 sm:h-10",
      found: false,
      clue: "Tucked inside the colorful flowerbeds."
    },
    {
      id: "flower",
      name: "Magic Flower",
      char: "🌸",
      x: 12,
      y: 76,
      width: "w-8 sm:w-10",
      height: "h-8 sm:h-10",
      found: false,
      clue: "Blooming on the grass on the lower left."
    }
  ]);

  const [completed, setCompleted] = useState(false);
  const [stickerUnlocked, setStickerUnlocked] = useState(false);
  const [activeClue, setActiveClue] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    setItems((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          return { ...item, found: true };
        }
        return item;
      });

      // Check completion
      const allFound = updated.every((item) => item.found);
      if (allFound) {
        setCompleted(true);
        // Save Inclusion Rainbow sticker to localStorage
        const current = JSON.parse(localStorage.getItem("zoila_stickers") || "[]");
        if (!current.includes("inclusion-rainbow")) {
          localStorage.setItem("zoila_stickers", JSON.stringify([...current, "inclusion-rainbow"]));
          setStickerUnlocked(true);
        }
      }
      return updated;
    });
    setActiveClue(null);
  };

  const handleReset = () => {
    setItems((prev) => prev.map((item) => ({ ...item, found: false })));
    setCompleted(false);
    setStickerUnlocked(false);
    setActiveClue(null);
  };

  const foundCount = items.filter((item) => item.found).length;

  return (
    <div className="bg-gradient-to-b from-blue-50/50 via-green-50/20 to-pink-50/30 rounded-super border-2 border-pink-100 p-6 md:p-8 max-w-4xl mx-auto shadow-md text-center font-sans">
      
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">Find Zoila&apos;s Friends</h3>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Zoila, Armando, and their friendly items are playing hide-and-seek in the school park! Can you find all 5 of them?
        </p>
      </div>

      {/* Discovery Board / Progress */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
        {items.map((item) => (
          <div 
            key={item.id}
            onClick={() => !item.found && setActiveClue(item.clue)}
            className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
              item.found 
                ? "bg-green-50 border-green-200 text-green-700" 
                : "bg-white border-gray-100 text-gray-400 hover:border-pink-200"
            }`}
          >
            <div className="relative w-8 h-8 flex items-center justify-center text-xl mb-1 filter drop-shadow">
              {item.found ? (
                item.imageSrc ? (
                  <div className="relative w-full h-full">
                    <Image src={item.imageSrc} alt="" fill className="object-contain" />
                  </div>
                ) : (
                  <span>{item.char}</span>
                )
              ) : (
                <HelpCircle className="w-6 h-6 text-gray-300" />
              )}
            </div>
            <span className="text-[10px] font-bold tracking-wider uppercase truncate max-w-full">
              {item.name}
            </span>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-bold">
              {item.found ? (
                <span className="text-green-600 flex items-center gap-0.5"><Check className="w-2.5 h-2.5" /> Found</span>
              ) : (
                <span className="text-gray-400">Hidden</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Clue bubble box */}
      {activeClue && (
        <div className="mb-4 p-3 bg-pink-50 border border-pink-100 rounded-xl text-xs text-primary font-bold text-center animate-pulse">
          💡 Clue: {activeClue}
        </div>
      )}

      {/* The Visual Park Scene (Viewport) */}
      <div className="relative w-full h-[260px] sm:h-[360px] bg-gradient-to-b from-blue-200/80 via-sky-100/60 to-yellow-100/60 rounded-2xl border-4 border-white shadow-md overflow-hidden select-none">
        
        {/* Landscape vector details */}
        {/* Sky: Sun */}
        <div className="absolute top-4 left-[45%] w-12 h-12 bg-amber-300 rounded-full filter blur-sm pointer-events-none"></div>
        {/* Sky: Cloud */}
        <div className="absolute top-10 left-12 w-28 h-8 bg-white/70 rounded-full filter blur-sm pointer-events-none"></div>

        {/* Tree Left */}
        <div className="absolute top-16 left-6 w-32 h-32 bg-green-500 rounded-full pointer-events-none z-10"></div>
        <div className="absolute top-28 left-20 w-6 h-28 bg-amber-800 rounded pointer-events-none"></div>
        
        {/* Hills / Grass Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-green-400 to-green-300 pointer-events-none z-0"></div>
        
        {/* Bush Right */}
        <div className="absolute bottom-10 right-16 w-24 h-16 bg-green-600 rounded-full pointer-events-none z-10"></div>

        {/* Hidden Clickable targets */}
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            disabled={item.found}
            style={{
              position: "absolute",
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            className={`absolute z-20 flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${item.width} ${item.height} ${
              item.found 
                ? "bg-white/90 border-2 border-green-400 shadow-md pointer-events-none" 
                : "bg-transparent hover:bg-black/5 cursor-pointer"
            }`}
            aria-label={item.found ? `Found ${item.name}` : "Search this hidden spot"}
          >
            {item.found ? (
              item.imageSrc ? (
                <div className="relative w-4/5 h-4/5">
                  <Image src={item.imageSrc} alt="" fill className="object-contain" />
                </div>
              ) : (
                <span className="text-xl sm:text-2xl">{item.char}</span>
              )
            ) : (
              // Invisible clickable hitbox
              <div className="w-full h-full"></div>
            )}
          </button>
        ))}

        {/* Congratulations Celebration overlay */}
        <AnimatePresence>
          {completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-white"
            >
              <div className="text-4xl sm:text-5xl mb-4 animate-bounce">🌈</div>
              <h4 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Everyone Belongs!</h4>
              <p className="text-sm sm:text-base text-pink-100 max-w-sm leading-relaxed mb-6">
                You found the whole group! Kindness brings all of Zoila&apos;s friends together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-secondary hover:bg-pink-50 font-bold rounded-full text-xs shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Play Again
                </button>
              </div>

              {stickerUnlocked && (
                <p className="text-xs text-yellow-300 font-bold mt-4 font-sans">
                  🏆 Unlocked sticker: <span className="underline">Inclusion Rainbow</span>! Check your Sticker Book!
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Reset progress */}
      {!completed && (
        <div className="flex justify-between items-center text-xs text-gray-400 font-semibold">
          <span>Found: {foundCount} / 5</span>
          <button
            onClick={handleReset}
            disabled={foundCount === 0}
            className="flex items-center gap-1 hover:text-red-500 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> Reset Game
          </button>
        </div>
      )}

    </div>
  );
}
