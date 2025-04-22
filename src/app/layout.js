// Mark this file as a client component
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import { usePathname } from "next/navigation"; // Import usePathname
import "./globals.css";
import Herosection from './components/herosection';
import FeaturesSection from './components/about';
import { FeaturedProducts } from './components/featuredproducts';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Always show the Navbar */}
        <Navbar />

        {/* Only show these components if we're not on the /shop page */}
        {pathname !== "/shop" && (
          <>
            <Herosection />
            <FeaturesSection />
            <FeaturedProducts />
          </>
        )}

        {/* Render the page's content (children) */}
        <main>{children}</main>
      </body>
    </html>
  );
}
