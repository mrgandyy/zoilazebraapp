import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Import Outfit and Inter
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ZoilaCompanion from "./components/ZoilaCompanion";

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
  metadataBase: new URL('https://zoilazebra.com'), // Replace with actual production URL when available
  title: "Zoila the Zebra - Children's Books on Kindness & Inclusion",
  description: "Join Zoila on her adventures! Discover our latest book 'Zoila the Zebra Meets Amazing Friends of All Abilities' (A Story About Special Needs), spreading kindness and inclusion.",
  openGraph: {
    title: "Zoila the Zebra - Children's Books on Kindness & Inclusion",
    description: "Join Zoila on her adventures! Discover our latest book 'Zoila the Zebra Meets Amazing Friends of All Abilities' (A Story About Special Needs), spreading kindness and inclusion.",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
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
        <ZoilaCompanion />
        <Footer />
      </body>
    </html>
  );
}
