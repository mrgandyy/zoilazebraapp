"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Sparkles } from "lucide-react";

interface GardenItem {
  id: string;
  x: number; // percentage width
  y: number; // percentage height
  type: string;
  scale: number;
}

const PLANT_TYPES = [
  { char: "🌸", label: "Flower" },
  { char: "🌹", label: "Heart Bloom" },
  { char: "🦋", label: "Butterfly" },
  { char: "✨", label: "Sparkle" },
  { char: "🍃", label: "Leaf" },
  { char: "🌈", label: "Rainbow" }
];

export default function KindnessGarden() {
  const [items, setItems] = useState<GardenItem[]>([]);
  const [selectedType, setSelectedType] = useState(0);
  const [milestoneMsg, setMilestoneMsg] = useState("");
  const [unlockedSticker, setUnlockedSticker] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const gardenRef = useRef<HTMLDivElement>(null);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem("zoila_kindness_garden");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        requestAnimationFrame(() => {
          setItems(parsed);
        });
      } catch (e) {
        console.error("Error reading Kindness Garden save state", e);
      }
    }
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      setReducedMotion(motionPref);
    });
  }, []);

  // Save to local storage and check milestones
  useEffect(() => {
    localStorage.setItem("zoila_kindness_garden", JSON.stringify(items));
    
    // Defer state updates to avoid React Compiler cascading render warnings
    requestAnimationFrame(() => {
      if (items.length >= 10) {
        setMilestoneMsg("Beautiful! Look what kindness can grow.");
        // Unlock Great Listener sticker
        const currentStickers = JSON.parse(localStorage.getItem("zoila_stickers") || "[]");
        if (!currentStickers.includes("great-listener")) {
          localStorage.setItem("zoila_stickers", JSON.stringify([...currentStickers, "great-listener"]));
          setUnlockedSticker(true);
        }
      } else if (items.length >= 6) {
        setMilestoneMsg("You're making the world brighter!");
      } else if (items.length >= 3) {
        setMilestoneMsg("Kindness grows!");
      } else {
        setMilestoneMsg("");
      }
    });
  }, [items]);

  const handleGardenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (items.length >= 25) {
      alert("Your garden is fully grown! Clear it to plant new seeds of kindness.");
      return;
    }

    if (!gardenRef.current) return;
    const rect = gardenRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Constrain planting boundary slightly away from borders
    if (x < 3 || x > 97 || y < 5 || y > 95) return;

    const newItem: GardenItem = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      type: PLANT_TYPES[selectedType].char,
      scale: 0.8 + Math.random() * 0.4
    };

    setItems((prev) => [...prev, newItem]);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to clear your garden?")) {
      setItems([]);
      setUnlockedSticker(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50/50 via-pink-50/30 to-green-50/40 rounded-super border-2 border-pink-100 p-6 md:p-8 max-w-4xl mx-auto shadow-md">
      
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">Grow the Kindness Garden</h3>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-sans leading-relaxed">
          Seeds of kind actions bloom into a beautiful community. Choose a plant below, then click on the garden area to plant kindness!
        </p>
      </div>

      {/* Select Plant Type */}
      <div className="flex flex-wrap justify-center gap-3 mb-6" role="radiogroup" aria-label="Select a sticker to plant">
        {PLANT_TYPES.map((t, idx) => (
          <button
            key={t.label}
            role="radio"
            aria-checked={selectedType === idx}
            onClick={() => setSelectedType(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-bold transition-all cursor-pointer ${
              selectedType === idx 
                ? "bg-primary border-primary text-white shadow-md scale-105" 
                : "bg-white border-gray-100 text-gray-700 hover:border-pink-200"
            }`}
          >
            <span className="text-lg">{t.char}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Garden Area */}
      <div 
        ref={gardenRef}
        onClick={handleGardenClick}
        className="relative w-full h-[280px] sm:h-[350px] bg-gradient-to-b from-blue-100/60 to-amber-100/60 rounded-2xl border-4 border-white shadow-inner overflow-hidden cursor-crosshair mb-6 group"
        aria-label="Garden planting canvas. Click inside to grow your selection."
      >
        {/* Soft clouds background */}
        <div className="absolute top-4 left-6 w-16 h-8 bg-white/70 rounded-full filter blur-sm pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-24 h-10 bg-white/70 rounded-full filter blur-sm pointer-events-none"></div>
        
        {/* Grass bottom */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-green-300 to-green-200/80 pointer-events-none"></div>

        {/* Empty state hint */}
        {items.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <p className="text-gray-500/70 font-bold text-base sm:text-lg animate-pulse flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" /> Click here to plant a little kindness!
            </p>
          </div>
        )}

        {/* Render Planted items */}
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={reducedMotion ? { opacity: 1, scale: item.scale } : { opacity: 0, scale: 0, y: 15 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: item.scale, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              style={{ 
                position: "absolute",
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: "translate(-50%, -50%)"
              }}
              className="text-3xl sm:text-4xl select-none pointer-events-none filter drop-shadow-md z-10"
            >
              {item.type}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Control bar / milestone notifications */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100 pt-6">
        
        {/* Milestone Message & Reward */}
        <div className="text-center sm:text-left min-h-[2.5rem]">
          {milestoneMsg && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-secondary font-bold font-heading text-lg flex items-center gap-2 justify-center sm:justify-start"
            >
              <Sparkles className="w-5 h-5 text-accent animate-spin-slow" />
              {milestoneMsg}
            </motion.p>
          )}
          {unlockedSticker && (
            <p className="text-xs text-primary font-bold mt-1 font-sans">
              🏆 Unlocked sticker: <span className="underline">Great Listener</span>! Check your Sticker Book!
            </p>
          )}
          {!milestoneMsg && (
            <p className="text-gray-400 text-sm font-medium font-sans">
              Planted: {items.length} / 25 objects
            </p>
          )}
        </div>

        {/* Reset button */}
        <button
          onClick={handleReset}
          disabled={items.length === 0}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 font-bold rounded-full text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
          Reset Garden
        </button>

      </div>

    </div>
  );
}
