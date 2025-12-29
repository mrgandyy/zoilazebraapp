import Hero from "./components/Hero";
import BookCard from "./components/BookCard";
import { featuredBooks } from "./data/books";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./components/AnimationWrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-white">
      <Hero />

      {/* Featured Video Section */}
      <section className="py-20 bg-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-zebra opacity-[0.03]"></div>
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
                poster="/images/zoila-sitting.png" // Using Zoila wave as a poster fallback
              >
                <source src="/videos/ZoilaVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Featured Books Section - Wavy Top */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fadeUp">
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Collection</span>
              <h2 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl">
                Discover Zoila's Adventures
              </h2>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                Stories that inspire, teach, and bring smiles to little faces. Each book is a new journey into kindness.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredBooks.map((book, index) => (
              <AnimationWrapper key={index} animationType="scale" delay={index * 0.1}>
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

      {/* About Teaser - Rounded Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden my-12 mx-4 rounded-super">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-zebra opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 flex justify-center order-2 lg:order-1">
              <AnimationWrapper animationType="scale">
                {/* Character image - reusing Amando for friend context */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-full shadow-xl animate-pulse"></div>
                  <Image
                    src="/images/amando-yellow.png"
                    alt="Zoila's Friend Amando"
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
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Zoila the Zebra isn't just a character; she's a movement of kindness and learning.
                  Created by Juanita Quinones Gandara and Mark Bowles, these books are designed to
                  help children understand themselves and the world around them.
                </p>
                <Link href="/about" className="inline-block px-8 py-3.5 border-2 border-secondary text-base font-bold rounded-full text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
                  Meet the Authors
                </Link>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Teaser - Full Width Gradient */}
      <section className="bg-gradient-to-r from-primary to-pink-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-zebra opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimationWrapper animationType="scale">
            <h2 className="text-3xl font-extrabold text-white font-heading sm:text-5xl mb-6">
              Bring Zoila to Your School!
            </h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
              We love visiting schools and libraries to share the magic of reading.
              Schedule a visit or download free activities today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/programs" className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Learn About Programs
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all">
                Get in Touch
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
