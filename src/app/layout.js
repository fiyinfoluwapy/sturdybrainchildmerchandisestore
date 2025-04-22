import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import Herosection from './components/herosection';
import FeaturesSection from './components/about';
import { FeaturedProducts } from './components/featuredproducts';
import { Shop } from "./components/shop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brainchild Merch",
  description: "Boldly designed for the fearless",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Herosection />
        <FeaturesSection />
        <FeaturedProducts />

        {/* Add the Shop component here */}
        <Shop /> 

        {children}
      </body>
    </html>
  );
}
