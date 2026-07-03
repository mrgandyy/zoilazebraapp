"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Calendar, X, Play } from "lucide-react";
import Image from "next/image";

// Import new components
import KindnessGarden from "../components/KindnessGarden";
import KindnessChallenge from "../components/KindnessChallenge";
import KindMessageBuilder from "../components/KindMessageBuilder";
import PopKindWords from "../components/PopKindWords";
import FindFriends from "../components/FindFriends";
import StickerBook from "../components/StickerBook";
import AnimationWrapper from "../components/AnimationWrapper";

export default function ActivitiesPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Close modals on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Disable background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  const activities = [
    {
      id: "pop-words",
      category: "PLAY",
      title: "Pop the Kind Words",
      desc: "Catch the floating kind words! Pop bubbles to gain points and learn positive words.",
      icon: "🎈",
      btnText: "Play Bubble Game",
      color: "from-pink-500/10 to-pink-500/5 hover:border-pink-300 border-pink-100",
      btnColor: "bg-pink-500 hover:bg-pink-600 shadow-pink-100"
    },
    {
      id: "find-friends",
      category: "PLAY",
      title: "Find Zoila's Friends",
      desc: "Search the playground scene and find Zoila, Armando, and hidden magic items!",
      icon: "🔍",
      btnText: "Start Search Game",
      color: "from-blue-500/10 to-blue-500/5 hover:border-blue-300 border-blue-100",
      btnColor: "bg-blue-500 hover:bg-blue-600 shadow-blue-100"
    },
    {
      id: "garden",
      category: "GROW",
      title: "Grow the Kindness Garden",
      desc: "Plant flowers, hearts, and rainbow blooms. Watch how your kindness makes the garden grow!",
      icon: "🌸",
      btnText: "Grow the Garden",
      color: "from-green-500/10 to-green-500/5 hover:border-green-300 border-green-100",
      btnColor: "bg-green-500 hover:bg-green-600 shadow-green-100"
    },
    {
      id: "challenge",
      category: "GROW",
      title: "Today's Kindness Challenge",
      desc: "Reveal a daily surprise mission to spread helper deeds at school or home.",
      icon: "💖",
      btnText: "Get Challenge",
      color: "from-amber-500/10 to-amber-500/5 hover:border-amber-300 border-amber-100",
      btnColor: "bg-amber-500 hover:bg-amber-600 shadow-amber-100"
    },
    {
      id: "builder",
      category: "CREATE",
      title: "Build a Kind Message",
      desc: "Mix and match kind phrases to build a beautiful card of appreciation to copy and share.",
      icon: "✍️",
      btnText: "Create a Message",
      color: "from-purple-500/10 to-purple-500/5 hover:border-purple-300 border-purple-100",
      btnColor: "bg-purple-500 hover:bg-purple-600 shadow-purple-100"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl mb-4">
            Activities & Visits
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Welcome to Zoila&apos;s interactive world! Plant kindness, play learning games, or download coloring pages.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Play & Grow Activities grid section */}
        <div>
          <AnimationWrapper animationType="fadeUp">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-1 block">Delightful Learning</span>
              <h2 className="text-3xl font-extrabold text-gray-900 font-heading">Interactive Activities</h2>
              <p className="text-gray-500 text-sm sm:text-base font-sans mt-2">
                Click any activity to open the interactive panel. Complete games to earn rewards!
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act, index) => (
              <AnimationWrapper key={act.id} animationType="scale" delay={index * 0.1}>
                <div 
                  onClick={() => setActiveModal(act.id)}
                  className={`bg-gradient-to-tr ${act.color} rounded-super p-6 border-2 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group hover:-translate-y-1 transform`}
                >
                  <div className="font-sans">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-gray-400 bg-white border border-gray-100 rounded-full px-3 py-1 tracking-widest uppercase">
                        {act.category}
                      </span>
                      <div className="text-3xl select-none group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {act.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading mb-2 leading-tight group-hover:text-primary transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                      {act.desc}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal(act.id);
                    }}
                    className={`w-full py-3 text-white font-bold rounded-full text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer ${act.btnColor}`}
                  >
                    <Play className="w-3 h-3 fill-white" />
                    {act.btnText}
                  </button>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>

        {/* Reward Shelf Section */}
        <div>
          <AnimationWrapper animationType="fadeUp">
            <StickerBook />
          </AnimationWrapper>
        </div>

        {/* Classroom Visits & Coloring Sheets (Double Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-gray-100 pt-16">
          {/* School Visits */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading">School Visits</h2>
            </div>
            <div className="prose text-gray-600 font-sans leading-relaxed">
              <p className="mb-4">
                <strong>Juanita Quiñones Gándara, M.Ed.</strong> brings her stories to life! A standard visit helps students connect with the themes of friendship, inclusion, and kindness through an engaging performance.
              </p>
              <p className="mb-6">
                Juanita uses <strong>puppets and Latin music</strong> to bring Zoila, Armando, and Little Raquel La Churros to life, creating a high-energy experience suited for <strong>Elementary and Middle Schools</strong>. She adapts her presentations to fit the specific age group of the audience.
              </p>
              <ul className="space-y-3 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Interactive Storytelling with Puppets
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Latin Music & Dance Elements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Adaptable for Elementary & Middle School
                </li>
              </ul>
              <a href="/contact" className="inline-block px-8 py-4 bg-primary hover:bg-green-600 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Request a Visit
              </a>
            </div>
          </div>

          {/* Downloads */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <Download className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading">Free Downloads</h2>
            </div>
            <p className="text-gray-600 mb-8 font-sans leading-relaxed">
              Keep the fun going with these printable color sheets and activities. Perfect for rainy days or classroom free time!
            </p>

            <div className="space-y-4 font-sans">
              {[
                { id: 1, title: 'Zoila the Zebra', file: '/coloring/zoila-coloring.png' },
                { id: 2, title: 'Armando the Armadillo', file: '/coloring/armando-coloring.png' },
                { id: 3, title: 'Zoila & Armando Reading', file: '/coloring/friends-coloring.png' }
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-accent bg-white transition-all group shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-100 overflow-hidden">
                      <Image
                        src={item.file}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.title} Coloring Page</h4>
                      <p className="text-xs text-gray-500">PNG • Printable</p>
                    </div>
                  </div>
                  <a
                    href={item.file}
                    download
                    className="p-3 bg-gray-50 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-full transition-all group-hover:scale-105"
                    title="Download coloring sheet"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* MODALS RENDER OVERLAYS */}
      <AnimatePresence>
        {activeModal && (
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
              {/* Accessible Close Trigger */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-full p-2.5 shadow transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary z-50"
                aria-label="Close activity overlay"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Render dynamic widget inside modal */}
              <div className="pt-8 pb-4">
                {activeModal === "pop-words" && <PopKindWords />}
                {activeModal === "find-friends" && <FindFriends />}
                {activeModal === "garden" && <KindnessGarden />}
                {activeModal === "challenge" && <KindnessChallenge />}
                {activeModal === "builder" && <KindMessageBuilder />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
