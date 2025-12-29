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
  metadataBase: new URL('https://zoilazebra.com'), // Replace with actual production URL when available
  title: "Zoila the Zebra",
  description: "Join Zoila on her adventures! Children's books, school visits, and more.",
  openGraph: {
    title: "Zoila the Zebra",
    description: "Join Zoila on her adventures! Children's books, school visits, and more.",
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
        <Footer />
      </body>
    </html>
  );
}
