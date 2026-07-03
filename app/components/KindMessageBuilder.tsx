"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, RefreshCw, Check } from "lucide-react";

const PHRASES = {
  start: [
    { text: "You are", value: "You are" },
    { text: "Thank you for", value: "Thank you for" },
    { text: "I like how you", value: "I like how you" }
  ],
  middle: [
    { text: "being kind", value: "being kind" },
    { text: "helping others", value: "helping others" },
    { text: "being yourself", value: "being yourself" },
    { text: "trying your best", value: "trying your best" },
    { text: "including everyone", value: "including everyone" }
  ],
  ending: [
    { text: "today!", value: "today!" },
    { text: "every day!", value: "every day!" },
    { text: "You make a difference!", value: "You make a difference!" },
    { text: "Keep shining!", value: "Keep shining!" }
  ]
};

export default function KindMessageBuilder() {
  const [startIdx, setStartIdx] = useState<number | null>(null);
  const [middleIdx, setMiddleIdx] = useState<number | null>(null);
  const [endingIdx, setEndingIdx] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [stickerUnlocked, setStickerUnlocked] = useState(false);

  const getFullMessage = () => {
    if (startIdx === null || middleIdx === null || endingIdx === null) return "";
    
    const startStr = PHRASES.start[startIdx].value;
    const middleStr = PHRASES.middle[middleIdx].value;
    const endingStr = PHRASES.ending[endingIdx].value;

    // Grammatical adjustments:
    // If start is "I like how you" + "being kind" -> "I like how you are being kind" or similar.
    // To make it super simple and grammatically matching, we can align:
    // "You are" + "being kind" + "today!" -> "You are being kind today!" (Correct)
    // "Thank you for" + "being kind" + "today!" -> "Thank you for being kind today!" (Correct)
    // "I like how you" -> if starting, add "are" before "being/helping/trying/including"
    let finalMiddle = middleStr;
    if (startStr === "I like how you") {
      if (middleStr.startsWith("being") || middleStr.startsWith("helping") || middleStr.startsWith("trying") || middleStr.startsWith("including")) {
        finalMiddle = "are " + middleStr;
      }
    }
    
    return `${startStr} ${finalMiddle} ${endingStr}`;
  };

  const handleCopy = () => {
    const text = getFullMessage();
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);

      // Unlock Kindness Star sticker
      const current = JSON.parse(localStorage.getItem("zoila_stickers") || "[]");
      if (!current.includes("kindness-star")) {
        localStorage.setItem("zoila_stickers", JSON.stringify([...current, "kindness-star"]));
        setStickerUnlocked(true);
      }
    });
  };

  const handleReset = () => {
    setStartIdx(null);
    setMiddleIdx(null);
    setEndingIdx(null);
    setCopied(false);
  };

  const isComplete = startIdx !== null && middleIdx !== null && endingIdx !== null;

  return (
    <div className="bg-gradient-to-tr from-blue-50/50 via-cream-50/30 to-purple-50/40 rounded-super border-2 border-pink-100 p-6 md:p-8 max-w-2xl mx-auto shadow-md">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">Build a Kind Message</h3>
        <p className="text-sm text-gray-500 max-w-lg mx-auto font-sans leading-relaxed">
          Create a message of appreciation to share with a classmate, friend, teacher, or family member. Pick one bubble from each column!
        </p>
      </div>

      {/* Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left font-sans">
        
        {/* Start Column */}
        <div className="flex flex-col">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">1. How to Start</h4>
          <div className="space-y-2">
            {PHRASES.start.map((p, idx) => (
              <button
                key={p.text}
                onClick={() => setStartIdx(idx)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  startIdx === idx
                    ? "bg-primary border-primary text-white shadow-md scale-[1.02]"
                    : "bg-white border-gray-100 text-gray-700 hover:border-pink-200"
                }`}
              >
                {p.text}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">2. The Action</h4>
          <div className="space-y-2">
            {PHRASES.middle.map((p, idx) => (
              <button
                key={p.text}
                onClick={() => setMiddleIdx(idx)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  middleIdx === idx
                    ? "bg-secondary border-secondary text-white shadow-md scale-[1.02]"
                    : "bg-white border-gray-100 text-gray-700 hover:border-pink-200"
                }`}
              >
                {p.text}
              </button>
            ))}
          </div>
        </div>

        {/* Ending Column */}
        <div className="flex flex-col">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">3. How to End</h4>
          <div className="space-y-2">
            {PHRASES.ending.map((p, idx) => (
              <button
                key={p.text}
                onClick={() => setEndingIdx(idx)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  endingIdx === idx
                    ? "bg-accent border-accent text-white shadow-md scale-[1.02]"
                    : "bg-white border-gray-100 text-gray-700 hover:border-pink-200"
                }`}
              >
                {p.text}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Live Preview Display (Speech Bubble Card) */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 relative">
        <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-4 font-sans text-left">Live Message Preview</h4>

        <div className="min-h-[4.5rem] flex items-center justify-center text-center">
          {isComplete ? (
            <motion.p
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-lg sm:text-xl font-bold font-heading text-gray-900 leading-relaxed max-w-md"
            >
              &ldquo;{getFullMessage()}&rdquo;
            </motion.p>
          ) : (
            <p className="text-gray-400 font-sans italic text-sm">
              Your kind message will appear here as you click on choices...
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleCopy}
          disabled={!isComplete}
          className={`flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer ${
            copied
              ? "bg-green-500 text-white"
              : "bg-primary text-white hover:bg-pink-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied to Clipboard!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Message
            </>
          )}
        </button>

        <button
          onClick={handleReset}
          disabled={startIdx === null && middleIdx === null && endingIdx === null}
          className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-full text-sm transition-all transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          Create Another
        </button>
      </div>

      {/* Sticker Unlock Dialog */}
      {stickerUnlocked && (
        <p className="text-xs text-primary font-bold mt-6 font-sans">
          🏆 Unlocked sticker: <span className="underline">Kindness Star</span>! Check your Sticker Book!
        </p>
      )}

    </div>
  );
}
