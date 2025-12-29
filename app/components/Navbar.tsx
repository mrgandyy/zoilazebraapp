import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <Image
                src="/images/logo.png"
                alt="Zoila the Zebra"
                width={50}
                height={50}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-primary font-heading tracking-tight group-hover:text-pink-500 transition-colors">Zoila the Zebra</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
            <Link href="/" className="text-gray-600 hover:text-white hover:bg-primary px-4 py-2 rounded-full text-sm font-bold transition-all duration-300">Home</Link>
            <Link href="/books" className="text-gray-600 hover:text-white hover:bg-primary px-4 py-2 rounded-full text-sm font-bold transition-all duration-300">Books</Link>
            <Link href="/about" className="text-gray-600 hover:text-white hover:bg-primary px-4 py-2 rounded-full text-sm font-bold transition-all duration-300">About</Link>
            <Link href="/programs" className="text-gray-600 hover:text-white hover:bg-primary px-4 py-2 rounded-full text-sm font-bold transition-all duration-300">Programs</Link>
            <Link href="/contact" className="bg-primary text-white hover:bg-pink-600 px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border-2 border-transparent hover:border-pink-300">Contact</Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button className="p-2 rounded-full text-gray-400 hover:text-primary hover:bg-pink-50 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
