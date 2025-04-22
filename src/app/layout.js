// Mark this file as a client component
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import { usePathname } from "next/navigation"; // Next.js App Router hook
import "./globals.css";
import Herosection from "./components/herosection";
import FeaturesSection from "./components/about";
import { FeaturedProducts } from "./components/featuredproducts";

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

  // Only show landing sections on the homepage (not on /shop or /product/[id])
  const isLandingPage = !pathname.startsWith("/shop") && !pathname.startsWith("/product/");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar is shown on every page */}
        <Navbar />

        {/* Conditionally show landing page sections only when not in /shop or /product */}
        {isLandingPage && (
          <>
            <Herosection />
            <FeaturesSection />
            <FeaturedProducts />
          </>
        )}

        {/* Main content of the current page */}
        <main>{children}</main>
      </body>
    </html>
  );
}
