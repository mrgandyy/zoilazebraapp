import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Footer Stripes */}
            <div className="absolute inset-0 bg-zebra opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto py-16 px-4 relative z-10 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-12">
                    <Link href="/" className="flex items-center gap-2 mb-6 group">
                        <Image
                            src="/images/logo.png"
                            alt="Zoila"
                            width={60}
                            height={60}
                            className="group-hover:rotate-12 transition-transform duration-300"
                        />
                        <span className="text-3xl font-bold text-primary font-heading tracking-tight">Zoila the Zebra</span>
                    </Link>

                    <div className="flex justify-center space-x-8">
                        <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all hover:scale-110">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all hover:scale-110">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-all hover:scale-110">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Footer">
                    <Link href="/" className="px-6 py-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors font-medium">Home</Link>
                    <Link href="/books" className="px-6 py-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors font-medium">Books</Link>
                    <Link href="/about" className="px-6 py-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors font-medium">About</Link>
                    <Link href="/programs" className="px-6 py-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors font-medium">Programs</Link>
                    <Link href="/contact" className="px-6 py-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors font-medium">Contact</Link>
                </nav>

                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="text-base text-gray-400">
                        &copy; {new Date().getFullYear()} Zoila the Zebra. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-300 mt-2">
                        Designed to spread kindness.
                    </p>
                </div>
            </div>
        </footer>
    );
}
