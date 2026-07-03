"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import BookCard from "./components/BookCard";
import { featuredBooks } from "./data/books";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./components/AnimationWrapper";
import { X, Heart, Sparkles, Lightbulb, BookOpen } from "lucide-react";

export default function Home() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Disable background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  // Find the new release book
  const newBook = featuredBooks.find((book) => book.newRelease) || featuredBooks[0];

  return (
    <div className="flex flex-col gap-0 bg-white">
      <Hero />

      {/* 1. NEW BOOK / FEATURED RELEASE SECTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-tr from-pink-50/70 via-cream-50/40 to-blue-50/60 border-y border-pink-100/30">
        {/* Soft Decorative Pastel Rainbow/Floral Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-zebra opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Large Book Cover */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <AnimationWrapper animationType="scale">
                <div className="relative w-72 h-[380px] sm:w-[380px] sm:h-[500px] md:w-[420px] md:h-[560px] max-w-full group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/50 to-blue-200/50 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.03] hover:rotate-1">
                    <Image
                      src={newBook.imageSrc}
                      alt="Cover of Zoila the Zebra Meets Amazing Friends of All Abilities, showing Zoila with a diverse group of children and Armando the Armadillo."
                      fill
                      priority
                      className="object-contain bg-white"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            {/* Right Column: Launch Content */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 text-left">
              <AnimationWrapper animationType="slideLeft">
                {/* Badge */}
                <div className="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-spin-slow" />
                  New Release
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl lg:text-5xl leading-tight mb-2">
                  {newBook.title}
                </h2>
                <h3 className="text-xl font-bold text-secondary font-heading mb-6">
                  {newBook.subtitle}
                </h3>

                {/* Description */}
                <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-sans mb-6">
                  <p>
                    Have you ever wished for a world where everyone is accepted just as they are? Zoila has.
                  </p>
                  <p>
                    Inspired by her mama&apos;s golden rule, Zoila sets out to make her school a kinder and more inclusive place. With help from Armando the Armadillo and her teacher, Mrs. C. Yañez, she begins a classroom pen-pal project that brings everyone closer together.
                  </p>
                </div>

                {/* Highlighted Spanish Quote */}
                <div className="border-l-4 border-primary pl-4 py-2 bg-pink-50/60 rounded-r-2xl mb-6 italic text-gray-700 text-sm sm:text-base font-medium">
                  “Recuerda, Zoila, la regla de oro es tratar a los demás como te gustaría que te trataran.”
                </div>

                {/* Learning Outcomes */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Learning Outcomes</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Learning Outcomes">
                    <li className="flex items-start text-sm sm:text-base text-gray-700 font-medium">
                      <Heart className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Respect and celebrate differences</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base text-gray-700 font-medium">
                      <BookOpen className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Every voice matters</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base text-gray-700 font-medium">
                      <Lightbulb className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>One idea can build community</span>
                    </li>
                  </ul>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={newBook.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl hover:scale-105 transition-all transform duration-200 text-center"
                  >
                    Buy on Amazon
                  </a>
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary/5 hover:scale-105 transition-all transform duration-200 text-center cursor-pointer"
                  >
                    See Full Book Overview
                  </button>
                </div>
              </AnimationWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WATCH THE NEW BOOK COME TO LIFE / VIDEO SECTION */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-zebra opacity-[0.01] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <AnimationWrapper animationType="fadeUp">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Book Trailer</span>
              <h2 className="text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">
                Watch the New Book Come to Life
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Take a peek inside the heartwarming pages of Zoila&apos;s newest special needs story.
              </p>
            </AnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Phone/Reel-style Framed Video (Left) */}
            <div className="md:col-span-5 flex justify-center">
              <AnimationWrapper animationType="scale">
                <div className="relative mx-auto w-[280px] aspect-[9/16] rounded-[3rem] border-[12px] border-gray-900 shadow-2xl bg-black overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                  {/* Phone Notch/Speaker */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 flex justify-center items-center z-30 pointer-events-none">
                    <div className="w-16 h-3 bg-black rounded-full border border-gray-800"></div>
                  </div>
                  
                  {/* Video Element */}
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover relative z-10"
                    poster="/images/7422.png" // Using the cover as poster
                  >
                    <source src="/videos/7464.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </AnimationWrapper>
            </div>

            {/* Video Supporting Copy (Right) */}
            <div className="md:col-span-7 text-left space-y-6">
              <AnimationWrapper animationType="slideLeft">
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  A Journey of Inclusion & Empathy
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
                  Our video preview showcases scenes from the classrooms and friendships in the new book. You&apos;ll catch a glimpse of Armando the Armadillo, Mrs. C. Yañez, and a diverse group of kids of all different abilities working together on their pen-pal adventure.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-primary flex-shrink-0 font-bold">✓</div>
                    <span className="text-gray-700 font-medium">Bilingual and bicultural representation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-secondary flex-shrink-0 font-bold">✓</div>
                    <span className="text-gray-700 font-medium">Focus on emotional literacy and special needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-accent flex-shrink-0 font-bold">✓</div>
                    <span className="text-gray-700 font-medium">Promotes school kindness programs</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 italic">
                  Press play on the trailer to hear the full narration and see the colorful pages created by Charlote Ellie.
                </p>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINAL Horizontal Featured Video Section (Preserved) */}
      <section className="py-20 bg-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-zebra opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimationWrapper animationType="scale">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Watch Our Story</span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl mb-8">
              Meet Zoila the Zebra
            </h2>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
              <video
                controls
                className="w-full h-full object-cover bg-black"
                poster="/images/zoila-sitting.png"
              >
                <source src="/videos/ZoilaVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Book Collection Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fadeUp">
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Collection</span>
              <h2 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl">
                Discover Zoila&apos;s Adventures
              </h2>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                Stories that inspire, teach, and bring smiles to little faces. Each book is a new journey into kindness.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredBooks.map((book, index) => (
              <AnimationWrapper key={book.id} animationType="scale" delay={index * 0.1}>
                <BookCard {...book} />
              </AnimationWrapper>
            ))}
          </div>

          <div className="mt-20 text-center">
            <AnimationWrapper animationType="fadeUp" delay={0.4}>
              <Link href="/books" className="inline-flex items-center text-primary font-bold hover:text-pink-600 text-lg transition-colors group">
                View All Books
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden my-12 mx-4 rounded-super">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-zebra opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 flex justify-center order-2 lg:order-1">
              <AnimationWrapper animationType="scale">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-full shadow-xl animate-pulse pointer-events-none"></div>
                  <Image
                    src="/images/armando-yellow.png"
                    alt="Zoila's Friend Armando"
                    fill
                    className="object-contain drop-shadow-2xl animate-float"
                  />
                </div>
              </AnimationWrapper>
            </div>
            <div className="order-1 lg:order-2">
              <AnimationWrapper animationType="slideRight">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Meet the Gang</span>
                <h2 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl mb-6 leading-tight">
                  More Than Just Stories
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
                  Zoila the Zebra isn&apos;t just a character; she&apos;s a movement of kindness and learning.
                  Created by Juanita Quiñones Gándara and Mark Bowles, these books are designed to
                  help children understand themselves and the world around them.
                </p>
                <Link href="/about" className="inline-block px-8 py-3.5 border-2 border-secondary text-base font-bold rounded-full text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
                  Meet the Creators
                </Link>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="bg-gradient-to-r from-primary to-pink-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-zebra opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimationWrapper animationType="scale">
            <h2 className="text-3xl font-extrabold text-white font-heading sm:text-5xl mb-6">
              Bring Zoila to Your School!
            </h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto font-sans">
              Juanita loves visiting schools and libraries to share the magic of reading.
              Schedule a visit or download free activities today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/activities" className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Activities & Visits
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all">
                Get in Touch
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL FOR PROMO GRAPHIC */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-label="Book overview back cover image lightbox"
          aria-modal="true"
        >
          <div className="relative max-w-3xl w-full h-[90vh] flex flex-col justify-center items-center">
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-0 right-0 bg-black/60 hover:bg-black text-white hover:text-gray-200 transition-colors p-3 rounded-full cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 m-2"
              aria-label="Close overview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div 
              className="relative w-full h-[80vh] bg-white/5 rounded-2xl overflow-hidden p-2 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the card itself
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/7284.jpg"
                  alt="Back cover promo graphic for Zoila the Zebra Meets Amazing Friends of All Abilities, containing detailed description, learning outcomes, and author biography."
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 800px"
                  priority
                />
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mt-3 text-center pointer-events-none">
              Press <kbd className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-xs">Esc</kbd> or click anywhere outside to close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
