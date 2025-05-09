// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import { CartProvider } from './context/cartcontext.jsx';




const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
