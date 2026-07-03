"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { Book } from "../data/books";
import AnimationWrapper from "./AnimationWrapper";

export default function BookCard({ 
    title, 
    subtitle,
    description, 
    shortDescription, 
    imageSrc, 
    retailerName, 
    purchaseUrl, 
    newRelease, 
    illustrator,
    themes 
}: Book) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const displayDescription = shortDescription || description;

    useEffect(() => {
        const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        requestAnimationFrame(() => {
            setReducedMotion(motionPref);
        });
    }, []);

    return (
        <AnimationWrapper animationType="scale" className="h-full">
            <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-super shadow-xl overflow-hidden border-2 border-transparent hover:border-primary flex flex-col h-full group relative z-10"
            >
                {/* NEW Badge */}
                {newRelease && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20 uppercase tracking-wider">
                        New
                    </span>
                )}

                {/* Cover Image */}
                <div className="relative h-80 w-full bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-zebra opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                        <Image
                            src={imageSrc}
                            alt={`Cover of ${title}`}
                            fill
                            className="object-contain drop-shadow-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Content Box */}
                <div className="p-8 flex flex-col flex-grow bg-white relative z-10 font-sans">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading leading-tight group-hover:text-primary transition-colors min-h-[3rem] flex items-center">
                        {title}
                    </h3>
                    
                    {subtitle && (
                        <p className="text-xs font-bold text-secondary font-heading mb-3 uppercase tracking-wider">
                            {subtitle}
                        </p>
                    )}

                    {/* Short Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow leading-relaxed">
                        {displayDescription}
                    </p>

                    {/* Expandable Discover More details */}
                    <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-gray-100 pt-4 mt-2 text-xs text-gray-500 text-left space-y-3 font-sans"
                          >
                            <div>
                              <span className="font-bold text-gray-800 uppercase tracking-wide block mb-1">Illustrator</span>
                              <p className="text-gray-600">{illustrator}</p>
                            </div>
                            {themes && themes.length > 0 && (
                              <div>
                                <span className="font-bold text-gray-800 uppercase tracking-wide block mb-1.5">What You&apos;ll Learn</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {themes.map((theme, i) => (
                                    <span 
                                      key={i} 
                                      className="bg-indigo-50 text-indigo-700 border border-indigo-100/50 px-2 py-0.5 rounded-full font-medium"
                                    >
                                      {theme}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Controls Footer */}
                    <div className="mt-6 space-y-3">
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="w-full flex items-center justify-center gap-1 py-2 text-xs font-bold text-gray-400 hover:text-secondary border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? "Hide book details" : "Discover more book details"}
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{isExpanded ? "Hide Details" : "Discover More"}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>

                        <a
                            href={purchaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-6 py-3.5 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-primary hover:bg-pink-600 transition-all gap-2 transform"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Buy on {retailerName}
                        </a>
                    </div>
                </div>
            </motion.div>
        </AnimationWrapper>
    );
}
