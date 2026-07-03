"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";

interface WordItem {
  word: string;
  isKind: boolean;
}

const KIND_WORDS = [
  { word: "Kind", isKind: true },
  { word: "Helpful", isKind: true },
  { word: "Brave", isKind: true },
  { word: "Caring", isKind: true },
  { word: "Honest", isKind: true },
  { word: "Patient", isKind: true },
  { word: "Friendly", isKind: true },
  { word: "Respectful", isKind: true }
];

const UNKIND_WORDS = [
  { word: "Mean", isKind: false },
  { word: "Selfish", isKind: false },
  { word: "Angry", isKind: false },
  { word: "Noisy", isKind: false },
  { word: "Greedy", isKind: false }
];

interface FloatingBubble {
  id: number;
  word: string;
  isKind: boolean;
  x: number; // percentage left
  y: number; // percentage top
  speed: number;
  size: number;
  color: string;
}

const COLORS = [
  "bg-pink-100/90 border-pink-300 text-pink-700",
  "bg-purple-100/90 border-purple-300 text-purple-700",
  "bg-blue-100/90 border-blue-300 text-blue-700",
  "bg-green-100/90 border-green-300 text-green-700",
  "bg-amber-100/90 border-amber-300 text-amber-700"
];

const FEEDBACK_RESPONSES = ["Great job!", "Awesome!", "Kindness shines!", "So sweet!"];

export default function PopKindWords() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [bubbles, setBubbles] = useState<FloatingBubble[]>([]);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [isGridMode, setIsGridMode] = useState(false); // Accessible static mode
  const [stickerUnlocked, setStickerUnlocked] = useState(false);
  const [clickedWords, setClickedWords] = useState<string[]>([]); // To track clicks in Grid Mode

  const containerRef = useRef<HTMLDivElement>(null);
  const nextBubbleId = useRef(0);

  // Setup mode check
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => {
        setIsGridMode(true);
      });
    }
  }, []);

  // Declare GameOver handler first so it is available to the timers
  const handleGameOver = () => {
    setIsPlaying(false);
    setIsGameOver(true);
    setBubbles([]);

    // Unlock sticker Friendship Flower
    const currentStickers = JSON.parse(localStorage.getItem("zoila_stickers") || "[]");
    if (!currentStickers.includes("friendship-flower")) {
      localStorage.setItem("zoila_stickers", JSON.stringify([...currentStickers, "friendship-flower"]));
      setStickerUnlocked(true);
    }
  };

  // Timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      // Defer execution using setTimeout to prevent synchronous setState warning
      const timer = setTimeout(() => {
        handleGameOver();
      }, 0);
      return () => clearTimeout(timer);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  // Floating bubbles loop (Active Animation Mode)
  useEffect(() => {
    let animFrame: number;
    let spawnTimer: NodeJS.Timeout;

    if (isPlaying && !isGridMode && !isGameOver) {
      // Game update tick
      const updatePhysics = () => {
        setBubbles((prev) => {
          return prev
            .map((b) => ({ ...b, y: b.y - b.speed })) // float up
            .filter((b) => b.y > -15); // keep bubbles within view
        });
        animFrame = requestAnimationFrame(updatePhysics);
      };
      animFrame = requestAnimationFrame(updatePhysics);

      // Spawner interval
      spawnTimer = setInterval(() => {
        setBubbles((prev) => {
          if (prev.length >= 6) return prev; // Limit concurrent bubbles for performance

          // 70% chance of kind word, 30% unkind
          const pool = Math.random() < 0.7 ? KIND_WORDS : UNKIND_WORDS;
          const selected = pool[Math.floor(Math.random() * pool.length)];
          const size = 80 + Math.random() * 40; // width/height size

          const newBubble: FloatingBubble = {
            id: nextBubbleId.current++,
            word: selected.word,
            isKind: selected.isKind,
            x: 5 + Math.random() * 80, // percentage x coordinate
            y: 105, // start below the viewport
            speed: 0.6 + Math.random() * 0.9,
            size,
            color: COLORS[Math.floor(Math.random() * COLORS.length)]
          };
          return [...prev, newBubble];
        });
      }, 1200);
    }

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(spawnTimer);
    };
  }, [isPlaying, isGridMode, isGameOver]);

  const handleStart = () => {
    setScore(0);
    setTimeLeft(30);
    setBubbles([]);
    setClickedWords([]);
    setFeedbackMsg("");
    setIsGameOver(false);
    setIsPlaying(true);
  };

  const handleBubbleClick = (b: FloatingBubble) => {
    // Pop/Remove clicked bubble
    setBubbles((prev) => prev.filter((item) => item.id !== b.id));

    if (b.isKind) {
      setScore((prev) => {
        const nextScore = prev + 10;
        // Cycle feedback message deterministically based on the score to avoid impure Math.random during render rules
        const feedbackIndex = (nextScore / 10) % FEEDBACK_RESPONSES.length;
        setFeedbackMsg(FEEDBACK_RESPONSES[feedbackIndex]);
        return nextScore;
      });
    } else {
      setFeedbackMsg("Let's try another one.");
    }

    // Auto-clear feedback after 1.5 seconds
    setTimeout(() => setFeedbackMsg(""), 1500);
  };

  const handleGridWordClick = (w: WordItem) => {
    if (clickedWords.includes(w.word)) return;
    
    setClickedWords((prev) => [...prev, w.word]);
    if (w.isKind) {
      setScore((prev) => {
        const nextScore = prev + 10;
        const feedbackIndex = (nextScore / 10) % FEEDBACK_RESPONSES.length;
        setFeedbackMsg(FEEDBACK_RESPONSES[feedbackIndex]);
        return nextScore;
      });
    } else {
      setFeedbackMsg("Let's choose kindness!");
    }
    setTimeout(() => setFeedbackMsg(""), 1500);

    // If all kind words clicked, or clicks exceed limit, end game
    const kindWordsLeft = KIND_WORDS.filter(k => !clickedWords.includes(k.word) && k.word !== w.word);
    if (kindWordsLeft.length === 0) {
      setTimeout(() => handleGameOver(), 500);
    }
  };

  // Compile full grid list for Static Mode
  const getGridList = () => {
    // Sort words statically to guarantee rendering purity
    return [...KIND_WORDS, ...UNKIND_WORDS].sort((a, b) => a.word.localeCompare(b.word));
  };

  return (
    <div className="bg-gradient-to-b from-blue-50/50 via-purple-50/20 to-pink-50/30 rounded-super border-2 border-pink-100 p-6 md:p-8 max-w-2xl mx-auto shadow-md text-center font-sans">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Pop the Kind Words</h3>
        
        {/* Toggle Grid Accessibility mode */}
        <button
          onClick={() => {
            setIsGridMode(!isGridMode);
            setBubbles([]);
          }}
          className="text-xs font-bold text-secondary border-2 border-secondary/20 hover:border-secondary px-3.5 py-1.5 rounded-full bg-white transition-all cursor-pointer"
        >
          {isGridMode ? "Switch to Floating Mode" : "Switch to Quiet Mode (Grid)"}
        </button>
      </div>

      {!isPlaying && !isGameOver ? (
        /* START SCREEN */
        <div className="py-12 px-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-4xl mx-auto mb-6">
            🎈
          </div>
          <h4 className="text-xl font-bold text-gray-900 font-heading mb-3">Learn Kind Words!</h4>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
            Click only on positive, kind words to pop the bubbles and score points. Let&apos;s see how many you can pop in 30 seconds!
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full text-base shadow-lg hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            Play Now
          </button>
        </div>
      ) : isGameOver ? (
        /* GAME OVER SCREEN */
        <div className="py-10 px-6">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-4xl mx-auto mb-6">
            🎉
          </div>
          <h4 className="text-2xl font-bold text-gray-900 font-heading mb-2">Round Complete!</h4>
          <p className="text-lg font-bold text-secondary font-heading mb-4">Final Score: {score} Points</p>
          <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8 leading-relaxed">
            Awesome job! You did fantastic planting kind words. More words build a better world!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleStart}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full text-sm shadow-md hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
          </div>

          {stickerUnlocked && (
            <p className="text-xs text-primary font-bold mt-6 font-sans">
              🏆 Unlocked sticker: <span className="underline">Friendship Flower</span>! Check your Sticker Book!
            </p>
          )}
        </div>
      ) : (
        /* GAME IN PROGRESS SCREEN */
        <div className="space-y-4">
          
          {/* Status Header */}
          <div className="flex justify-between items-center bg-white px-5 py-3.5 rounded-2xl border border-gray-100 shadow-sm text-sm font-bold">
            <div className="text-gray-500">
              Score: <span className="text-primary text-base">{score}</span>
            </div>
            <div className="text-gray-500">
              Time Left: <span className={`text-base ${timeLeft <= 5 ? "text-red-500 animate-pulse" : "text-secondary"}`}>{timeLeft}s</span>
            </div>
          </div>

          {/* Feedback response toast */}
          <div className="min-h-[2rem] flex items-center justify-center">
            <AnimatePresence>
              {feedbackMsg && (
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className={`text-sm font-bold uppercase tracking-wider font-heading ${
                    feedbackMsg.includes("try") || feedbackMsg.includes("choose")
                      ? "text-amber-500"
                      : "text-green-500"
                  }`}
                >
                  {feedbackMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {isGridMode ? (
            /* QUIET / ACCESSIBLE GRID MODE */
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-6 max-w-md mx-auto">
              {getGridList().map((w) => {
                const clicked = clickedWords.includes(w.word);
                return (
                  <button
                    key={w.word}
                    disabled={clicked}
                    onClick={() => handleGridWordClick(w)}
                    className={`p-4 rounded-xl border-2 text-center font-bold text-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary ${
                      clicked
                        ? w.isKind
                          ? "bg-green-50 border-green-200 text-green-700 scale-95"
                          : "bg-amber-50 border-amber-200 text-amber-600 scale-95"
                        : "bg-white border-gray-100 text-gray-700 hover:border-pink-200"
                    }`}
                  >
                    {w.word}
                    {clicked && (
                      <span className="block text-[10px] mt-1">
                        {w.isKind ? "❤️ Kind!" : "Try another"}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            /* ANIMATED FLOATING BUBBLES MODE */
            <div 
              ref={containerRef}
              className="relative w-full h-[320px] sm:h-[400px] bg-white rounded-2xl border border-gray-100 shadow-inner overflow-hidden"
            >
              <AnimatePresence>
                {bubbles.map((b) => (
                  <motion.button
                    key={b.id}
                    onClick={() => handleBubbleClick(b)}
                    style={{
                      position: "absolute",
                      left: `${b.x}%`,
                      top: `${b.y}%`,
                      width: b.size,
                      height: b.size,
                      transform: "translate(-50%, -50%)"
                    }}
                    className={`rounded-full border-2 p-2 flex items-center justify-center text-center font-bold text-xs sm:text-sm shadow-md transition-shadow cursor-pointer select-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary ${b.color}`}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    {b.word}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Reset button inside active round */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                if (confirm("Reset current game?")) handleGameOver();
              }}
              className="text-xs font-semibold text-gray-400 hover:text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-full cursor-pointer transition-colors"
            >
              End Game
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
