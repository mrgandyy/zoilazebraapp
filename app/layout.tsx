import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Import Outfit and Inter
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configure fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zoila the Zebra",
  description: "Join Zoila on her adventures! Children's books, school visits, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
